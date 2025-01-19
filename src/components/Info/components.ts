import styled, { StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'section', object> = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

export const InfoImage: StyledComponent<'img', object> = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 1px solid var(--colors-text);
`;

export const InfoTitle: StyledComponent<'h1', object> = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

export const ListGroup: StyledComponent<'div', object> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const List: StyledComponent<'ul', object> = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem: StyledComponent<'li', object> = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Meta: StyledComponent<'div', object> = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const TagGroup: StyledComponent<'div', object> = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
