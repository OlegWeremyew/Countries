interface PaginationProps {
  numberOfCountries: number;
  currentPage: number;
  paginate: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export type { PaginationProps };
