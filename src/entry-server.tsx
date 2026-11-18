import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import AppRoutesServer from './AppRoutesServer';

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutesServer />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetContext;
  // These calls return complete tags as strings (e.g. "<title>...</title>"),
  // already HTML-escaped by react-helmet-async.
  const helmetTags = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
      ].join('\n    ')
    : '';

  return { html, helmetTags };
}
