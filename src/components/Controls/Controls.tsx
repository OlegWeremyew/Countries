import React, { FC, useState } from 'react';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { Wrapper } from './components';

export type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const Controls: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<any>('');

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
