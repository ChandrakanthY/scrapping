const rp = require('request-promise'); // request-promise is the simplified HTTP request client
const $ = require('cheerio'); // cheerio is Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
const url = 'https://www.deccanherald.com/lok-sabha-election-2019/cong-rjd-will-push-21st-century-india-into-darkness-733765.html';
var Data = new Object();

 rp(url)
  .then(function(html){
    //success!
    Data.Title = $('div.strap-heading-wrapper h2',html).text();
    Data.Time = $('ul.crud-items li.sanspro-semib',html).text();
    Data.Author = $('div.article-author__time a.sanspro-reg',html).text();
    Data.LastUpdate = $('ul.crud-items li.sanspro-semib',html).text();
    Data.Description = $('div.field-item p',html).text();
    console.log(Data)
    
  })
    
  .catch(function(err){
    //handle error
  }); 