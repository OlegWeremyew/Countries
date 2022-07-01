import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Nullable } from '../../types';
import axios from 'axios';
import { searchByCountry } from '../../config';
import { Button } from '../../common';
import { Info } from '../../components';
import { ResponseType } from '../../App/types';

const Details: FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Nullable<ResponseType>>(null);

  const handleGoBack = (): void => {
    navigate(-1);
  };

  useEffect(() => {
    if (name) {
      axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
    }
  }, [name]);

  return (
    <>
      <Button onClick={handleGoBack}>
        <IoArrowBack /> Back
      </Button>
      <h1>Details {name}</h1>
      {country && <Info {...country} />}
    </>
  );
};

export default Details;
