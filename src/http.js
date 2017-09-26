import axios from 'axios';
/**
 * Gets the data.
 *
 * @param {string} url The Indeed API url,
 * @param {array} params The Indeed API params
 */
export function getData(url) {
  return axios.get(url).then(response => response.json());
}
