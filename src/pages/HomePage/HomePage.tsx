import React, { FC, useEffect, useState } from 'react';
import { Card, Controls, List } from '../../components';
import axios from 'axios';
import { ALL_COUNTRIES } from '../../config';
import { InfoItem } from '../../components/Card/Card';
import { ResponseType } from '../../App';

export type CountryInfoType = {
  img: string;
  name: string;
  info: InfoItem[];
};

export type HomePageType = {
  countries: ResponseType[];
  setCountries: (data: ResponseType[]) => void;
};

const HomePage: FC<HomePageType> = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState<ResponseType[]>(countries);

  const handleSearch = (search: string, region: string): void => {
    let data = [...countries];
    if (region) {
      data = data.filter(country => country.region.includes(region));
    }
    if (search) {
      data = data.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get<ResponseType[]>(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);

  useEffect(() => {
    handleSearch('', '');
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map(country => {
          const countryInfo: CountryInfoType = {
            img: country.flags.png,
            name: country.name,
            info: [
              { title: 'Population', description: country.population.toLocaleString() },
              { title: 'Region', description: country.region },
              { title: 'Capital', description: country.capital },
            ],
          };
          return <Card key={country.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
