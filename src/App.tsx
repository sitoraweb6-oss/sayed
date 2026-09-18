import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToAnchor from './components/layout/ScrollToAnchor';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<CaseStudy />} />
            <Route path="about" element={<About />} />
            <Route path="my-story" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
