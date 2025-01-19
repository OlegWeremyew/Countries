import React, { type FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import {
  CardBody,
  CardImage,
  CardList,
  CardListItem,
  CardTitle,
  Wrapper,
} from './components';
import type { CardType } from './types';

export const Card: FC<CardType> = memo(({ img, name, info = [] }) => {
  const navigate = useNavigate();

  const goToCountryPage = (): void => {
    navigate(`country/${name}`);
  };

  return (
    <Tilt>
      <Wrapper onClick={goToCountryPage}>
        <CardImage src={img} alt="country flag" title="country flag" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {info.map(({ title, description }) => (
              <CardListItem key={title}>
                <b>{title}:</b> {description}
              </CardListItem>
            ))}
          </CardList>
        </CardBody>
      </Wrapper>
    </Tilt>
  );
});
