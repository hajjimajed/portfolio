import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import About from './routes/about/about.component';
import Projects from './routes/projects/projects.component';
import ProjectView from './routes/project-view/project-view.component';

import Loader from './components/loader/loader.component';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectName" element={<ProjectView />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
