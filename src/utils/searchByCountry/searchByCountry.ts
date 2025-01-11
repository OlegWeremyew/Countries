/**
 * Generates a URL to fetch country information by its name.
 *
 * @function
 * @name searchByCountry
 * @param {string} name - The name of the country to search for.
 *                        Must be a valid, non-empty string.
 * @returns {string} The constructed URL in the format `${BASE_URL}name/${name}`.
 *
 * @example
 * // Example usage:
 * const url = searchByCountry('Canada');
 * console.log(url); // Output: 'https://example.com/api/name/Canada' (assuming BASE_URL = 'https://example.com/api/')
 *
 * @throws {Error} If the `name` parameter is an empty string.
 */
export const searchByCountry = (name: string): string => {
  if (!name || name.trim() === '') {
    throw new Error('Country name cannot be empty.');
  }

  return `${process.env.REACT_APP_BASE_URL}name/${name}`;
};
