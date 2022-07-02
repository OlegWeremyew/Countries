import React, { FC, useEffect, useState } from 'react';
import { Button, Wrapper } from './components';
import { IoCaretBackSharp, IoCaretForwardSharp } from 'react-icons/io5';
import { PaginationProps } from 'components/Pagination/types';

export const Pagination: FC<PaginationProps> = ({
  numberOfCountries,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const [arrayOfCurrentButtons, setArrayOfCurrentButtons] = useState<any[]>([]);
  const pageNumbers: any[] = [];

  let dotsInitial = '...';
  let dotsLeft = '... ';
  let dotsRight = ' ...';

  for (let i = 1; i <= numberOfCountries; i += 1) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    let tempNumberOfPages = [...arrayOfCurrentButtons];

    if (numberOfCountries < 6) {
      tempNumberOfPages = pageNumbers;
    }

    if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, '...', numberOfCountries];
    } else if (currentPage === 4) {
      const sliced = pageNumbers.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, pageNumbers.length];
    } else if (currentPage > 4 && currentPage < numberOfCountries - 2) {
      const sliced1 = pageNumbers.slice(currentPage - 2, currentPage); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = pageNumbers.slice(currentPage, currentPage + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfCountries,
      ];
    } else if (currentPage > pageNumbers.length - 3) {
      const sliced = pageNumbers.slice(pageNumbers.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    }

    paginate(currentPage);
    setArrayOfCurrentButtons(tempNumberOfPages);
  }, [currentPage]);

  return (
    <Wrapper>
      <Button onClick={prevPage} disabled={currentPage === 1}>
        <IoCaretBackSharp />
      </Button>
      {arrayOfCurrentButtons.map(number => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          disabled={number === dotsInitial || number === dotsLeft || number === dotsRight}
        >
          {number}
        </Button>
      ))}
      <Button onClick={nextPage} disabled={currentPage === numberOfCountries}>
        <IoCaretForwardSharp />
      </Button>
    </Wrapper>
  );
};
