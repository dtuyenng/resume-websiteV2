import "./App.css";

import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./routes/Projects";
import AboutMe from "./routes/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
    </Routes>
  );
}

export default App;
