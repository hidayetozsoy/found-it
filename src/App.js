import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import LostItem from "./pages/LostItem";
import FoundItem from "./pages/FoundItem";
import UserProfile from "./pages/UserProfile";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<LostItem />} />
          <Route path="/found" element={<FoundItem />} />
          <Route path="/:username" element={<UserProfile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;