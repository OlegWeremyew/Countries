import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  margin-top: 10px;

  @media (max-width: 425px) {
    gap: 1px;
  }
`;

export const Button = styled.button.attrs({
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

  &:hover {
    border: 2px solid var(--color-hover-inout);
    background-color: var(--colors-ui-base);
  }

  @media (max-width: 425px) {
    font-size: var(--fs-sm-x);
    width: 22px;
    height: 22px;
  }
`;
