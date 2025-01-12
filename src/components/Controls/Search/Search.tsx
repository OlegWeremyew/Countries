import React, { FC, ChangeEvent, memo } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Input, InputContainer } from './components';

import type { SearchType } from './types';

export const Search: FC<SearchType> = memo(({ search, setSearch }) => {
  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={changeSearchValue} value={search} />
    </InputContainer>
  );
});
