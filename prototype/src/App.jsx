import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import logo from "./assets/logo-transparent.png";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="app">

      <nav className="navbar">

        <div className="brand">
          <img
            src={logo}
            alt="Evolution Hub Logo"
            className="nav-logo"
          />

          <h2>Evolution Hub</h2>
        </div>

        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="nav-btn">
            Get Started
          </Link>
        </div>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
