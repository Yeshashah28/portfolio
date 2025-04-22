import React, { useRef } from "react";
import NavBar from "./components/navigationBar/navBar";
import Intro from "./components/intro/intro";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Info from "./components/information/info";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <NavBar
          onContactClick={() => scrollToSection(contactRef)}
        />

        <Intro />

        <Routes>
          <Route path="*" element={<Layout />} />

          <Route path="/info/*" element={<Info/>}/>
        </Routes>

        <Certification />
        <div ref={contactRef}><Contact /></div>
      </div>
    </Router>
  );
}

export default App;
