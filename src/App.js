import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import LostItem from "./pages/LostItem";
import FoundItem from "./pages/FoundItem";
import UserProfile from "./pages/UserProfile"

function App() {
  return (
    <>
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost" element={<LostItem />} />
        <Route path="/found" element={<FoundItem />} />
        <Route path="/:username" element={<UserProfile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;