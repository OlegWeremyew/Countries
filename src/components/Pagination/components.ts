import styled, { type StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'div', object> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  margin-top: 10px;

  @media (max-width: 425px) {
    gap: 1px;
  }
`;

export const Button: StyledComponent<'button', object> = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  font-size: var(--fs-md);

  border: 2px solid transparent;

  color: var(--colors-text);
  cursor: pointer;

  &:not([disabled]):hover {
    border: 2px solid var(--color-hover-inout);
    background-color: var(--colors-ui-base);
  }

  &:not([disabled]):focus {
    border: 2px solid var(--color-hover-inout);
    background-color: var(--colors-ui-base);
  }

  &:disabled {
    opacity: 0.4;
    cursor: auto;
  }
`;
