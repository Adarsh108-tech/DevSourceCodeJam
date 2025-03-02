import { Route ,  BrowserRouter as Router , Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import { useState } from "react";
import Home from "./pages/Home.tsx";
function App() {
  const [Authented , setAuthented] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
