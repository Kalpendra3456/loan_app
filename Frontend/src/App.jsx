// filepath: src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Process from "./components/Process/Process.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoanDetails from "./components/LoanDetails/LoanDetails.jsx";
import LoanForm from "./components/LoanForm/LoanForm.jsx";
import UserDetails from "./components/userDetails/UserDetails.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/Signup/Signup.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx"; 
import ResetPassword from "./components/ResetPass/ResetPass.jsx";
import ForgetPassword from "./components/ForgetPass/ForgetPass.jsx";  

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route
          path="/personal-loan-details"
          element={
            <PrivateRoute>
              <LoanDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/loanform"
          element={
            <PrivateRoute>
              <LoanForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-details"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
