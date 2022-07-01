import React, { FC } from 'react';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { Wrapper } from './components';
import { Button } from '../../layout';

export const GoUp: FC = () => (
  <Wrapper>
    <Link to="header" spy smooth offset={-30} duration={500}>
      <Button>
        <span>Return to the top</span>
        <IoHome />
      </Button>
    </Link>
  </Wrapper>
);
