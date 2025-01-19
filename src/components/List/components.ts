import styled, { type StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'section', object> = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem 0;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    padding: 2.5rem 0 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;
