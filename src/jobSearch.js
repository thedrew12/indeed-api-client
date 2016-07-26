import { getData } from './http';
import queryStrings from './queryStrings';
import qs from 'query-string';

const handler = {
  get(target, name) {
    return name in target ? target[name] : 37;
  }
};

export default function jobSearch(url, publisherId) {
  const endpoint = '/apisearch';
  queryStrings.publisher = publisherId;
  const queryProxy = new Proxy({
    // default query is all job postings
    query: keywords => {
      queryStrings.q = keywords;
      return queryProxy;
    },
    // default location is Mukilteo, WA
    location: location => {
      queryStrings.l = location;
      return queryProxy;
    },
    // default sort is 'relevance'
    sort: sort => {
      queryStrings.sort = sort;
      return queryProxy;
    },
    // default radius is 25, the max is 150
    radius: radius => {
      queryStrings.radius = radius;
      return queryProxy;
    },
    // default is `all`
    siteType: st => {
      queryStrings.st = st;
      return queryProxy;
    },
    // default is 'all'
    jobType: jt => {
      queryStrings.jt = jt;
      return queryProxy;
    },
    // default is 0
    start: start => {
      queryStrings.start = start;
      return queryProxy;
    },
    // default is 10, the max is 25
    limit: limit => {
      queryStrings.limit = limit;
      return queryProxy;
    },
    daysBack: days => {
      queryStrings.fromage = days;
      return queryProxy;
    },
    // default is 0, which is off
    highlight: num => {
      queryStrings.highlight = num;
      return queryProxy;
    },
    // default is 1, which turns off duplicate postings
    filter: num => {
      queryStrings.filter = num;
      return queryProxy;
    },
    // default is 0, which doesn't return lat long info with each response
    latlong: num => {
      queryStrings.latlong = num;
      return queryProxy;
    },
    // default is 'us'
    country: country => {
      queryStrings.co = country;
      return queryProxy;
    },
    channel: channel => {
      queryStrings.chnl = channel;
      return queryProxy;
    },
    // this is a required filed
    userIp: userIp => {
      queryStrings.userip = userIp;
      return queryProxy;
    },
    // this is a required field
    userAgent: userAgent => {
      queryStrings.useragent = userAgent;
      return queryProxy;
    },
    done: () => {
      if (queryStrings.userip && queryStrings.useragent) {
        let params = qs.stringify(queryStrings);
        let fullURL = `${url}${endpoint}?${params}`;

        return getData(fullURL)
          .then(response => {
            return response.data;
          });
      } else {
        throw Error('Missing user ip or user agent');
      }
    }
  }, handler);

  return queryProxy;
}
