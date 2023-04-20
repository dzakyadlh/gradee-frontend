import "bootstrap/dist/css/bootstrap.min.css";
import "./styleReset.css";
import "./App.css";

import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import CourseDetail from "./pages/course_detail";
import Navbar from "./components/navbar";

import { useNavigate } from "react-router";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
