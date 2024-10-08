import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Note from "./noteject/Note";
import Student from "./props/Student";

function App() {
  return (
    <>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/noteject" element={<Note/>}/>
        {/* <Route path="/tryprops" element={<Student/>}/> */}
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;


