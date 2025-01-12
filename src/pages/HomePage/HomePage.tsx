import React, { FC, useEffect, useState } from 'react';
import { Card, Controls, List, GoUp, Pagination } from 'components';
import type { ResponseType } from 'App/types';
import type { CountryInfoType, HomePageType } from './types';
import { countryApi } from 'api';

export const HomePage: FC<HomePageType> = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState<ResponseType[]>(countries);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 24;

  const lastCountryIndex = currentPage * pageSize;
  const firstCountryIndex = lastCountryIndex - pageSize;
  const currentCountry = filteredCountries.slice(firstCountryIndex, lastCountryIndex);
  const numberOfCountries = Math.ceil(filteredCountries.length / pageSize);

  const paginate = (page: number): void => {
    setCurrentPage(page);
  };

  const nextPage = (): void => {
    setCurrentPage((prev: number) => (prev === numberOfCountries ? prev : prev + 1));
  };

  const prevPage = (): void => {
    setCurrentPage((prev: number) => (prev === 1 ? prev : prev - 1));
  };

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
      countryApi.getCountriesList().then(data => setCountries(data));
    }
  }, []);

  useEffect(() => {
    handleSearch('', '');
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {currentCountry.map(country => {
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
      {filteredCountries.length >= 12 && <GoUp />}
      {filteredCountries.length >= 20 && (
        <Pagination
          currentPage={currentPage}
          numberOfCountries={numberOfCountries}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </>
  );
};
