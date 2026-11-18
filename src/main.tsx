import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// hydrateRoot (not createRoot) because index.html's #root div now arrives
// from the server already filled with real, rendered HTML (see
// src/entry-server.tsx and server.ts) - hydration attaches React's event
// handlers to that existing markup instead of throwing it away and
// re-rendering from scratch.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
);
