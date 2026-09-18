import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToAnchor from './components/layout/ScrollToAnchor';
import Home from './pages/Home';

// Route-level dynamic imports to minimize initial bundle size and optimize Core Web Vitals
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function RouteLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-transparent" aria-label="Loading content">
      <div className="w-7 h-7 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route 
              path="work" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Work />
                </Suspense>
              } 
            />
            <Route 
              path="work/:slug" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <CaseStudy />
                </Suspense>
              } 
            />
            <Route 
              path="about" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <About />
                </Suspense>
              } 
            />
            <Route 
              path="my-story" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <About />
                </Suspense>
              } 
            />
            <Route 
              path="contact" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Contact />
                </Suspense>
              } 
            />
            <Route 
              path="privacy-policy" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <PrivacyPolicy />
                </Suspense>
              } 
            />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
