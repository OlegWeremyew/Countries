import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'App';
import { Loader } from 'components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>,
);
