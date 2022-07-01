import React, { FC, useEffect, useState } from 'react';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { Wrapper } from './components';

export type OptionType = {
  value: string;
  label: string;
};

export type ControlsType = {
  onSearch: (search: string, regionValue: string) => void;
};

const options: OptionType[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const Controls: FC<ControlsType> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<any>('');

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
