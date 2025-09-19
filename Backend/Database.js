// import { Pool } from "pg";

// // Create a PostgreSQL connection pool
// const pool = new Pool({
//   user: "postgres", // Replace with your PostgreSQL username
//   host: "localhost",     // Replace with your database host
//   database: "postgres", // Replace with your database name
//   password: "Kalpendra@1234??", // Replace with your PostgreSQL password
//   port: 5432,            // Default PostgreSQL port
// });                                             

// // Test the database connection
// pool.query("SELECT NOW()", (err, res) => {
//   if (err) {
//     console.error("❌ DB connection failed:", err.message);
//   } else {
//     console.log("✅ DB connected at:", res.rows[0].now);
//   }
// });

// export default pool;

import { Pool } from "pg";

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: "postgres",   // your postgres username
  host: "localhost",
  database: "postgres", // change if your project db has a different name
  password: "Kalpendra@1234??", 
  port: 5432,
});

// Test DB connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ DB connection failed:", err.message);
  } else {
    console.log("✅ DB connected at:", res.rows[0].now);
  }
});

export default pool;
