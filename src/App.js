import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import About from './routes/about/about.component';
import Projects from './routes/projects/projects.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
