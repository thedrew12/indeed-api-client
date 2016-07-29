// query params
export default {
	publisher: '',
	v: 2,
	format: 'json',
	callback: '',
	q: '',
	// Location. Use a postal code or a "city, state/province/region" combination.
	l: '',
	// Sort by relevance or date. Default is relevance.
	sort: 'relevance',
	// Distance from search location ("as the crow flies"). Default is 25.
	radius: 25,
	// Site type. To show only jobs from job boards use 'jobsite'. For jobs from direct employer websites use 'employer'.
	st: '',
	// Job type. Allowed values: "fulltime", "parttime", "contract", "internship", "temporary".
	jt: '',
	// Start results at this result number, beginning with 0. Default is 0.
	start: 0,
	// Maximum number of results returned per query. Default is 10
	limit: 10,
	// Number of days back to search.
	fromage: '',
	// Setting this value to 1 will bold terms in the snippet that are also present in q. Default is 0.
	highlight: 0,
	// Filter duplicate results. 0 turns off duplicate job filtering. Default is 1.
	filter: 1,
	// If latlong=1, returns latitude and longitude information for each job result. Default is 0.
	latlong: 0,
	// Search within country specified. Default is 'us'.
	co: 'us',
	// Channel Name: Group API requests to a specific channel
	chnl: '',
	// The IP number of the end-user to whom the job results will be displayed. This field is required.
	userip: '',
	// The User-Agent (browser) of the end-user to whom the job results will be displayed. This can be obtained from the "User-Agent" HTTP request header from the end-user. This field is required.
	useragent: ''
};
