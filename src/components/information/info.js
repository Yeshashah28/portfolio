import "./info.css";
import { useEffect, useRef } from 'react';
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Aboutme from '../Aboutme/Aboutme';
import Skills from '../Skills/Skills';
import Qualification from '../Qualification/Qualification';
import Projects from '../Projects/Projects';

function Info() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectsTabRef = useRef(null);

  const handleTabSelect = (key) => {
    navigate(`/${key}`);
  };

  const activeTab = location.pathname.split('/')[1] || 'Aboutme';

  useEffect(() => {
    if (location.state?.fromNav && activeTab === 'projects') {
      setTimeout(() => {
        projectsTabRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, [location, activeTab]);

  return (
    <div className="info-container">
      <Tabs
        activeKey={activeTab}
        id="justify-tab-example"
        className="mb-3"
        onSelect={handleTabSelect}
        justify
      >
        <Tab eventKey="Aboutme" title="About Me" />
        <Tab eventKey="skills" title="Skills" />
        <Tab eventKey="qualification" title="Qualification" />
        <Tab eventKey="projects" title="Projects" />
      </Tabs>

      <div className="content-area">
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/Aboutme/*" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route
            path="/projects"
            element={<div ref={projectsTabRef}><Projects /></div>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Info;
