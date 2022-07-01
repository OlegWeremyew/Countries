import React, { FC } from 'react';
import {
  CardBody,
  CardImage,
  CardList,
  CardListItem,
  CardTitle,
  Wrapper,
} from './components';

export const Card: FC<any> = ({ img, name, info = [], callback }) => (
  <Wrapper onClick={callback}>
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
