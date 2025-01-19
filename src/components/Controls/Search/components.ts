import styled, { type StyledComponent } from 'styled-components';

export const InputContainer: StyledComponent<'label', object> = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border: 2px solid transparent;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  cursor: text;

  &:hover {
    border: 2px solid var(--color-hover-inout);
  }

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input: StyledComponent<'input', object> = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
`;
