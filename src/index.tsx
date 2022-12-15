import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/browser';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import 'assets/styles/main.css';

import { AppProviders } from 'providers/AppProviders';
import { AppRoutes } from 'routing/AppRoutes';
import { worker } from 'api/mocks/mock-worker';

import * as serviceWorker from './serviceWorker';

const openReactQueryDevtools = import.meta.env.DEV;

if (import.meta.env.DEV) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // TODO: Uncomment, transform require to import
  // const whyDidYouRender = require('@welldone-software/why-did-you-render');
  // whyDidYouRender(React);
  worker.start({ onUnhandledRequest: 'bypass' });
}

if (import.meta.env.VITE_APP_SENTRY_DSN) {
  Sentry.init({ dsn: import.meta.env.VITE_APP_SENTRY_DSN });
}

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <AppProviders>
    <AppRoutes />
    {openReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
  </AppProviders>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
