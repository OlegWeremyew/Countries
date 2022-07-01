import React, { FC, useEffect, useState } from 'react';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { Wrapper } from './components';
import { ControlsType } from './types';
import { options } from './data';

export const Controls: FC<ControlsType> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<any>('');
  const optionArray = options;
  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={optionArray}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
