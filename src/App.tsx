import React, { FC } from 'react';
import './App.css';
import { Controls, Header, Main } from './components';

export const App: FC = () => (
  <>
    <Header />
    <Main>
      <Controls />
    </Main>
  </>
);
