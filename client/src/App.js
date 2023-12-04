import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element = {            <img
              src={require("./Media/Comig-Soon.png")}
              alt="logo"
              className="h-screen w-screen object-cover"
            />} />
        <Route path="/documents" element = {            <img
              src={require("./Media/Comig-Soon.png")}
              alt="logo"
              className="h-screen w-screen object-cover"
            />} />
        <Route path="/pdfs" element = {            <img
              src={require("./Media/Comig-Soon.png")}
              alt="logo"
              className="h-screen w-screen object-cover"
            />} />
        <Route path="/media" element = {            <img
              src={require("./Media/Comig-Soon.png")}
              alt="logo"
              className="h-screen w-screen object-cover"
            />} />
        <Route path="/about" element = {            <img
              src={require("./Media/Comig-Soon.png")}
              alt="logo"
              className="h-screen w-screen object-cover"
            />} />
        <Route path="/contact" element = {            <img
              src={require("./Media/Comig-Soon.png")}
              alt="logo"
              className="h-screen w-screen object-cover"
            />} />
      </Routes>
    </Router>
  );
}

export default App;
