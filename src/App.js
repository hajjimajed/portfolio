import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import About from './routes/about/about.component';
import Projects from './routes/projects/projects.component';
import ProjectView from './routes/project-view/project-view.component';

import Loader from './components/loader/loader.component';

function App() {


  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const handleScroll = () => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 1500,
      delay: 500,
      smooth: true, // Increase duration to slow down scrolling
    });
  };


  return (
    <>

      <div className="App" onScroll={handleScroll} onWheel={handleScroll}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectName" element={<ProjectView />} />
          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
