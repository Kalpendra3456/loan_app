
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto"; // ✅ For secure random token
import pool from "./Database.js"; // ✅ DB connection

const app = express();
app.use(bodyParser.json());
app.use(cors());

const JWT_SECRET = "super-secret-key";

// ------------------- SIGNUP -------------------
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
      email,
      hashedPassword,
    ]);

    res.json({ message: "Signup successful" });
  } catch (err) {
    console.error("❌ Signup error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- LOGIN -------------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- FORGOT PASSWORD -------------------
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const token = crypto.randomBytes(32).toString("hex"); // secure random token
    const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    await pool.query(
      "UPDATE users SET reset_token=$1, token_expiry=$2 WHERE email=$3",
      [token, expiry, email]
    );

    // ⚡ For now just return reset link (later you can send email)
    const resetLink = `http://localhost:5173/reset-password/${token}`;
    res.json({ message: "Reset link generated", resetLink });
  } catch (err) {
    console.error("❌ Forgot password error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- RESET PASSWORD -------------------
app.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE reset_token=$1 AND token_expiry > NOW()",
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "UPDATE users SET password=$1, reset_token=NULL, token_expiry=NULL WHERE reset_token=$2",
      [hashedPassword, token]
    );

    res.json({ message: "✅ Password reset successful!" });
  } catch (err) {
    console.error("❌ Reset password error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- AUTH MIDDLEWARE -------------------
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
}

// ------------------- PROTECTED ROUTES -------------------
app.get("/me", verifyToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT id, email FROM users WHERE id=$1", [req.user.id]);
    if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ /me error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/loans", verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, amount, status, due_date FROM loans WHERE user_id=$1",
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("❌ /loans error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- START SERVER -------------------
app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
