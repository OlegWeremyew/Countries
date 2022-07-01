import React, { FC } from 'react';
import {
  CardBody,
  CardImage,
  CardList,
  CardListItem,
  CardTitle,
  Wrapper,
} from './components';
import { useNavigate } from 'react-router-dom';

export type CardType = {
  img: string;
  name: string;
  info: InfoItem[];
};

export type InfoItem = {
  title: string;
  description: string;
};

export const Card: FC<CardType> = ({ img, name, info = [] }) => {
  const navigate = useNavigate();

  const goToCountryPage = (): void => {
    navigate(`country/${name}`);
  };

  return (
    <Wrapper onClick={goToCountryPage}>
      <CardImage src={img} alt="country flag" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(el => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
