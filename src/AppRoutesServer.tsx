import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Server-only mirror of ./AppRoutes.tsx. `renderToString` runs in one
// synchronous pass and can't wait for React.lazy()'s dynamic import() to
// resolve, so instead of rendering the Suspense fallback (a spinner) for
// every lazy route, the server renders these pages eagerly-imported here.
// The actual code-splitting for the browser bundle still happens in
// AppRoutes.tsx - this file only affects the Node-side SSR bundle.
export default function AppRoutesServer() {
  return (
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
  );
}
