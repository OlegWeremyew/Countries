import React, { FC, ChangeEvent } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Input, InputContainer } from './components';
import { SearchType } from './types';

export const Search: FC<SearchType> = ({ search, setSearch }) => {
  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={e => changeSearchValue(e)} value={search} />
    </InputContainer>
  );
};
