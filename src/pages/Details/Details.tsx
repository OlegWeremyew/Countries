import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Nullable } from 'types';
import { Info } from 'components';
import type { ResponseType } from 'App/types';
import { Button } from 'layout';
import { searchByCountry } from 'utils';
import { countryApi } from 'api';
import type { NameType } from './types';
import { ResponseCountry } from 'pages/HomePage/types';

export const Details: FC = () => {
  const { name } = useParams<NameType>();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Nullable<ResponseType>>(null);

  const handleGoBack = (): void => {
    navigate(-1);
  };

  useEffect(() => {
    if (name) {
      countryApi
        .getCountryById(searchByCountry(name))
        .then((data: ResponseCountry) => setCountry(data[0]));
    }
  }, [name]);

  return (
    <>
      <Button onClick={handleGoBack}>
        <IoArrowBack /> Back
      </Button>
      <h1>Details {name}</h1>
      {country && <Info key={name} {...country} />}
    </>
  );
};
