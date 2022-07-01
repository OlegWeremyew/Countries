import React, { FC } from 'react';
import { Button } from '../../common';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-scroll';

export const GoUp: FC = () => (
  <div>
    <Link to="header" spy smooth offset={-30} duration={1500}>
      <Button>
        <span>Go Up</span>
        <IoHome />
      </Button>
    </Link>
  </div>
);
