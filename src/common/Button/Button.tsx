import styled from 'styled-components';

export const Button = styled.button.attrs({
  type: 'button',
})`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5rem;
  border-radius: var(--radii);

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
