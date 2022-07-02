import React, { FC, lazy, useState } from 'react';
import { Header, Main } from 'components';
import { Routes, Route } from 'react-router-dom';
import { ResponseType } from 'App/types';

const HomePage = lazy(() => import('pages').then(tm => ({ default: tm.HomePage })));
const Details = lazy(() => import('pages').then(tm => ({ default: tm.Details })));
const NotFoundPage = lazy(() =>
  import('pages').then(tm => ({ default: tm.NotFoundPage })),
);

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
