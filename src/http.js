import fetch from 'fetch-everywhere';

/**
 * Gets the data.
 *
 * @param {string} url The Indeed API url,
 * @param {array} params The Indeed API params
 */
export function getData(url) {
  return fetch(url).then(response => response.json());
}
