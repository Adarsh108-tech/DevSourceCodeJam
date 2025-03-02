import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
function App() {
  const [Authenticate , setAuthentication] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
