# Indeed API Client
ES2105 indeed api client that supports the Job Search endpoint.
Returns the response in json format.

### Installation
```npm install indeed-api-client```
___
Example
```javascript
import Indeed from indeed-api-client

Indeed('http://api.indeed.com/ads', publisherId)
  .jobSearch()
    .query('java')
    .location('Austin, TX')
    .sort('date')
    .radius(25)
    .userIp('1.2.3.4')
    .userAgent('Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36')
    .done()
    .then(response => {
      // do something with the response
    })
```
___
### Query Methods
* **query** - Search for available job postings by keyword
* **location** - Provide a postal code or city, state/province/region, if not called Mukilteo, WA is the default location
* **sort** - Sort by 'relevance' or 'date'. Default is relevance
* **radius** - Distance from search location ("as the crow flies"). Default is 25.
* **siteType** - To show only jobs from job boards use 'jobsite'. For jobs from direct employer websites use 'employer'.
* **jobType** - Allowed values: 'fulltime', 'parttime', 'contract', 'internship', 'temporary'.
* **start** - Start results at this result number, beginning with 0. Default is 0.
* **limit** - Maximum number of results returned per query. Default is 10. Max is 25.
* **daysBack** - Number of days back to Search
* **highlight** - Setting this value to 1 will bold terms in the snippet that are also present in q. Default is 0.
* **filter** - Filter duplicate results. 0 turns off duplicate job filtering. Default is 1.
* **latlong** - If 1, returns latitude and longitude information for each job result. Default is 0.
* **country** - Search within country specified. Default is US
* **channel** - Channel name: Group API requests to a specific channel
* **userIp** - The IP number of the end-user to whom the job results will be displayed. **This field is required.** Default is `localhost`.
* **userAgent** - The User-Agent (browser) of the end-user to whom the job results will be displayed. This can be obtained from the "User-Agent" HTTP request header from the end-user. **This field is required.** Default is `Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36`.
* **done** - Complete the request with this method and **then** complete the promise from the API
