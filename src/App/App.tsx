import React, { FC, lazy, useState } from 'react';
import { Header, Main } from '../components';
import { Routes, Route } from 'react-router-dom';
import { ResponseType } from './types';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Details = lazy(() => import('../pages/Details/Details'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App: FC = () => {
  const [countries, setCountries] = useState<ResponseType[]>([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<HomePage countries={countries} setCountries={setCountries} />}
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
};
