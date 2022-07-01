import React, { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </StrictMode>,
);
