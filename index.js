import Indeed from './src/Indeed';

let api = Indeed('http://api.indeed.com/ads', '7862926378084508');
api.jobSearch()
  .query('graphic designer')
  .userAgent('Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36')
  .userIp('localhost')
  .location('California')
  .done()
  .then(response => {
    // console.log(response);
  });

export default from './src/Indeed';
