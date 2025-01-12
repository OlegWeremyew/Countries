import React, { FC, PropsWithChildren } from 'react';
import { Wrapper } from './components';

export const List: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
