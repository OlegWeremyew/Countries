export type PaginationProps = {
  pageSize: number;
  totalCountries: number;
  paginate: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};
