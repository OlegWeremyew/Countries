/**
 * Generates a URL for a request, filtering by provided codes.
 *
 * This function accepts an array of strings representing codes and returns a string that is a URL
 * for an API request. It encodes the given codes into a comma-separated string and appends the `codes`
 * parameter to the base URL, which is used for filtering.
 *
 * The base URL is retrieved from the `REACT_APP_BASE_URL` environment variable, which should be defined
 * in your project. Environment variables should be prefixed with `REACT_APP_` in order to be accessible in
 * your React code.
 *
 * @param {string[]} codes An array of string values representing codes for filtering.
 * @returns {string} Returns a string that represents the generated URL for the request.
 *
 * @example
 * const codes = ['123', '456', '789'];
 * const url = filterByCode(codes);
 * console.log(url); // "https://example.com/alpha?codes=123,456,789"
 */
export const filterByCode = (codes: string[]): string =>
  `${process.env.REACT_APP_BASE_URL}alpha?codes=${codes.join(',')}`;
