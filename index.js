import jobSearch from './src/jobSearch';

export default function Indeed(url = 'http://api.indeed.com/ads', publisherId) {
	if (!publisherId) {
		throw Error('An Indeed publisher id is required');
	} else {
		return {
			jobSearch: () => jobSearch(url, publisherId)
		};
	}
}
