import React, { FC } from 'react';
import { Wrapper } from './components';
import { Container } from '../../layout';
import { MainType } from './types';

export const Main: FC<MainType> = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
