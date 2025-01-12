import React, { FC, type PropsWithChildren } from 'react';
import { Wrapper } from './components';
import { Container } from 'layout';

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
