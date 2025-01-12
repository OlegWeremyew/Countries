type PaginationProps = {
  numberOfCountries: number;
  currentPage: number;
  paginate: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};

type ButtonsType = Array<number>;

export type { PaginationProps, ButtonsType };
