import fetch from 'isomorphic-fetch';

/**
 * Cleans up the fetch response and converts it to JSON as
 * long as the response code starts with 2
 *
 * @param {promise} promise The Promise object returned by the fetch call
 */
export function fetchHandler(promise) {
	return promise.then(response => {
		if (response.status.toString().startsWith(2)) {
			return response.json();
		}
		throw new Error(`Server returned response code of ${status}`);
	});
}

/**
 * Gets the data.
 *
 * @param {string} url The Indeed API url,
 * @param {array} params The Indeed API params
 */
export function getData(url) {
	return fetch(url)
		.then(response => fetchHandler(response));
}
