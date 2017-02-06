import { getData } from './http';
import queryStrings from './queryStrings';
import qs from 'query-string';

export default function jobSearch(url, publisherId) {
  const endpoint = '/apisearch';
  queryStrings.publisher = publisherId;

  // default query is all job postings
  this.query = keywords => {
    queryStrings.q = keywords;
    return this;
  };

  // default location is Mukilteo, WA
  this.location = location => {
    queryStrings.l = location;
    return this;
  };

  // default sort is 'relevance'
  this.sort =  sort => {
    queryStrings.sort = sort;
    return this;
  };

  // default radius is 25, the max is 150
  this.radius = radius => {
    queryStrings.radius = radius;
    return this;
  },
  // default is `all`
  this.siteType = st => {
    queryStrings.st = st;
    return this;
  },
  // default is 'all'
  this.jobType = jt => {
    queryStrings.jt = jt;
    return this;
  },
  // default is 0
  this.start = start => {
    queryStrings.start = start;
    return this;
  },
  // default is 10, the max is 25
  this.limit = limit => {
    queryStrings.limit = limit;
    return this;
  },
  this.daysBack = days => {
    queryStrings.fromage = days;
    return this;
  },
  // default is 0, which is off
  this.highlight = num => {
    queryStrings.highlight = num;
    return this;
  },
  // default is 1, which turns off duplicate postings
  this.filter = num => {
    queryStrings.filter = num;
    return this;
  },
  // default is 0, which doesn't return lat long info with each response
  this.latlong = num => {
    queryStrings.latlong = num;
    return this;
  },
  // default is 'us'
  this.country = country => {
    queryStrings.co = country;
    return this;
  },
  this.channel = channel => {
    queryStrings.chnl = channel;
    return this;
  },
  // this is a required filed
  this.userIp = userIp => {
    queryStrings.userip = userIp;
    return this;
  },
  // this is a required field
  this.userAgent = userAgent => {
    queryStrings.useragent = userAgent;
    return this;
  },
  this.done = () => {
    if (queryStrings.userip && queryStrings.useragent) {
      let params = qs.stringify(queryStrings);
      let fullURL = `${url}${endpoint}?${params}`;

      return getData(fullURL).then(response => response);
    } else {
      throw Error('Missing user ip or user agent');
    }
  };
}
