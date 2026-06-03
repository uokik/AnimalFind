import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import PublicAnimalProfile from "./pages/PublicAnimalProfile";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Activate from "./pages/Activate";
// import Profile from "./pages/Profile";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* routes*/}
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* aktywacja */}
        {/* <Route path="/activate/:token" element={<Activate />} />

        {/* publiczny profil  */}
        <Route path="/p/:uid" element={<PublicAnimalProfile />} />

        {/* prywatne tu */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
