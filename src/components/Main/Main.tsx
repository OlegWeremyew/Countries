import React, { FC } from 'react';
import { Wrapper } from './components';
import { Container } from '../../layout';

export const Main: FC<any> = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
