import React, { FC, useEffect, useState } from 'react';
import {
  InfoImage,
  InfoTitle,
  List,
  ListGroup,
  ListItem,
  Meta,
  TagGroup,
  Wrapper,
} from './components';
// @ts-ignore
import Roll from 'react-reveal/Roll';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InfoType } from './types';
import { filterByCode } from '../../utils/filterByCode/filterByCode';
import { Button } from '../../layout';

export const Info: FC<InfoType> = ({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  topLevelDomain = [],
  currencies = [],
  languages = [],
  borders = [],
  area,
  timezones,
}) => {
  const [neighbors, setNeighbors] = useState<string[]>([]);
  const navigate = useNavigate();

  const changeCountryPage = (path: string): void => {
    navigate(`/country/${path}`);
  };

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(res => res.data)
        .then((data: any[]) => {
          setNeighbors(data.map(c => c.name));
        });
  }, [borders]);

  return (
    <Wrapper>
      <Fade left>
        <InfoImage src={flag} alt={name} />
      </Fade>
      <div>
        <Roll right>
          <InfoTitle>{name}</InfoTitle>
          <ListGroup>
            <List>
              <ListItem>
                <b>Native Name:</b> {nativeName}
              </ListItem>
              <ListItem>
                <b>Population:</b> {population}
              </ListItem>
              <ListItem>
                <b>Region:</b> {region}
              </ListItem>
              <ListItem>
                <b>Sub Region:</b> {subregion}
              </ListItem>
              <ListItem>
                <b>Capital:</b> {capital}
              </ListItem>
              <ListItem>
                <b>Area:</b> {area}{' '}
                <span>
                  km<sup>2</sup>
                </span>
              </ListItem>
              <ListItem>
                <b>Timezones:</b> {timezones}
              </ListItem>
            </List>
            <List>
              <ListItem>
                <b>Top Level Domain:</b>{' '}
                {topLevelDomain.map(d => (
                  <span key={d}>{d}</span>
                ))}
              </ListItem>
              <ListItem>
                <b>Currency:</b>{' '}
                {currencies.map(c => (
                  <span key={c.code}>{c.name} </span>
                ))}
              </ListItem>
              <ListItem>
                <b>Top Level Domain:</b>{' '}
                {languages.map(l => (
                  <span key={l.name}>{l.name}</span>
                ))}
              </ListItem>
            </List>
          </ListGroup>
          <Meta>
            <b>Border Countries</b>
            {!borders.length ? (
              <span>There is no border countries</span>
            ) : (
              <TagGroup>
                {neighbors.map(b => (
                  <Button key={b} onClick={() => changeCountryPage(b)}>
                    {b}
                  </Button>
                ))}
              </TagGroup>
            )}
          </Meta>
        </Roll>
      </div>
    </Wrapper>
  );
};
