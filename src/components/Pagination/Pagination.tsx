import React, { FC } from 'react';
import { Button, Wrapper } from './components';
import { IoCaretBackSharp, IoCaretForwardSharp } from 'react-icons/io5';
import { PaginationProps } from 'components/Pagination/types';

export const Pagination: FC<PaginationProps> = ({
  pageSize,
  totalCountries,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  const range = Math.ceil(totalCountries / pageSize);

  for (let i = 1; i <= range; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <Button onClick={prevPage}>
        <IoCaretBackSharp />
      </Button>
      {pageNumbers.map(number => (
        <Button key={number} onClick={() => paginate(number)}>
          {number}
        </Button>
      ))}
      <Button onClick={nextPage}>
        <IoCaretForwardSharp />
      </Button>
    </Wrapper>
  );
};
