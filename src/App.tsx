import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToAnchor from './components/layout/ScrollToAnchor';
import AppRoutes from './AppRoutes';

// NOTE: the actual <Routes>/<Route> tree lives in ./AppRoutes.tsx so that
// entry-server.tsx (used for server-side rendering) can render the exact
// same pages inside a <StaticRouter> instead of this <BrowserRouter>.
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToAnchor />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
