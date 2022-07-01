import React, { FC, useEffect, useState } from 'react';
import {
  InfoImage,
  InfoTitle,
  List,
  ListGroup,
  ListItem,
  Meta,
  Tag,
  TagGroup,
  Wrapper,
} from './components';
import axios from 'axios';
import { filterByCode } from '../../config';
import { useLocation, useNavigate } from 'react-router-dom';

export type InfoType = {
  name?: string;
  nativeName?: string;
  flag?: string;
  capital?: string;
  population?: number;
  region?: any;
  subregion?: string;
  topLevelDomain?: any[];
  currencies?: any[];
  languages?: any[];
  borders?: any[];
};

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
}) => {
  const [neighbors, setNeighbors] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const changeCountryPage = (path: string): void => {
    console.log(location.pathname);
    console.log(`country/${path}`);
    navigate(`country/${path}`, { replace: true });
  };

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(res => res.data)
        .then((res: any[]) => setNeighbors(res.map(c => c.name)));
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population</b> {population}
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
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain</b>{' '}
              {topLevelDomain.map(d => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency</b>{' '}
              {currencies.map(c => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Top Level Domain</b>{' '}
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
                <Tag key={b} onClick={() => changeCountryPage(b)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
