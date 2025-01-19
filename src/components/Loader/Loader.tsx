import { type FC } from 'react';
import { IoEarth } from 'react-icons/io5';
import { RotateElem, Wrapper } from './components';

export const Loader: FC = () => (
  <Wrapper>
    <RotateElem>
      <IoEarth size={250} />
    </RotateElem>
  </Wrapper>
);
