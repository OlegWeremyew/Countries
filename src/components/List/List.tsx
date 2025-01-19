import React, { type FC, type PropsWithChildren } from 'react';
import { Wrapper } from './components';

export const List: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
