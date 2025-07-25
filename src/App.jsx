import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import './index.css'; // Import your global styles
import ScrollToTop from './components/ScrollToTop';

export default function App() {

  return (
    <Router>
      <ScrollToTop /> 
        <Routes>
          
          
          <Route element={<MainLayout />}>
            
            <Route path='/' element={<HomePage/>} />
            <Route path='/about_me' element={<AboutMePage />} />
            <Route path='/contact_me' element={<ContactPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
    
          </Route>
  
        </Routes>

    </Router>
  );
}



