import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import LostItem from "./pages/LostItem";
import FoundItem from "./pages/FoundItem";
import UserProfile from "./pages/UserProfile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <MainNavbar />
      <div className="container d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<LostItem />} />
          <Route path="/found" element={<FoundItem />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;