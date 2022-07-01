import styled from 'styled-components';

import Select from 'react-select';

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 767px) {
    padding: 0 2rem;
  }
`;

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: provided => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
      cursor: 'pointer',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;
  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  padding: 0.5rem 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1rem;
  border-radius: var(--radii);
  font-size: var(--fs-md);

  border: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--colors-text);
  cursor: pointer;

  &:hover {
    border: 2px solid var(--color-hover-inout);
    background-color: var(--colors-ui-base);
  }
`;
