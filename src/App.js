import "bootstrap/dist/css/bootstrap.min.css";
import "./styleReset.css";
import "./App.css";

import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";

import { useNavigate } from "react-router";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
