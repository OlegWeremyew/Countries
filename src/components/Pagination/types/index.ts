export type PaginationProps = {
  numberOfCountries: number;
  currentPage: number;
  paginate: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};
