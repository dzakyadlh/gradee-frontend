import "bootstrap/dist/css/bootstrap.min.css";
import "./styleReset.css";
import "./App.css";

import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Courses from "./pages/courses";
import CourseDetail from "./pages/course_detail";
import Loader from "./components/loader";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      {/* {window.location.pathname !== "/" &&
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register" && <Loader />} */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
