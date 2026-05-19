import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Activate from "./pages/Activate";
// import Profile from "./pages/Profile";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Publiczne trasy */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* Kluczowa trasa dla Twojego taga NFC */}
        {/* Backend w Go przekieruje tutaj: localhost:3000/activate/AnimFind-XXXX */}
        {/* <Route path="/activate/:token" element={<Activate />} />

        {/* Widok profilu dla znalazcy */}
        {/* <Route path="/p/:uid" element={<Profile />} />

        {/* Trasy prywatne (później dodasz tu ProtectedRoute) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
