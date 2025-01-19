import styled, { type StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'main', object> = styled.main`
  padding: 1rem 0;

  @media (min-width: 767px) {
    padding: 2rem 0;
  }
`;
