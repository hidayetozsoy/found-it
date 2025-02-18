import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LostItem from "./pages/LostItem";
import FoundItem from "./pages/FoundItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost" element={<LostItem />} />
        <Route path="/found" element={<FoundItem />} />
      </Routes>
    </Router>
  );
}

export default App;