import styled, { StyledComponent } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderElement: StyledComponent<'header', object> = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper: StyledComponent<'div', object> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 767px) {
    padding: 1rem 0;
  }
`;

export const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  padding: 0.5rem;
  border-radius: var(--radii);

  &:hover {
    background-color: var(--colors-bg);
  }
`;

export const ModeSwitcher: StyledComponent<'div', object> = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  padding: 0.5rem;
  border-radius: var(--radii);

  &:hover {
    background-color: var(--colors-bg);
  }
`;
