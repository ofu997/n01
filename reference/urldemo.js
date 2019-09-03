const url = require('url');

const myUrl = new URL('https://thedigitalcurator.azurewebsites.net');
const myUrl2 = new URL('https://thedigitalcurator.azurewebsites.net/Archives/Index?searchString=Hawking');

// serialized url
console.log("href: " + myUrl.href);
console.log("to string: " + myUrl.toString());
// host: root domain
console.log("host: " + myUrl.host);
// exclude port
console.log("hostname: " + myUrl.hostname);
// pathname
console.log("pathname: " + myUrl.pathname);
// serialized query
console.log("search: " + myUrl2.search);
//  params object
console.log("search params: " + myUrl2.searchParams);
// add  param
myUrl2.searchParams.append('abc','234');
console.log("new search params: " + myUrl2.searchParams);
myUrl2.searchParams.forEach(
    (value,name) => console.log(`name: ${name}, value: ${value}`)
);