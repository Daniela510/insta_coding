// storing dependencies into a variable
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//storing port number and our full app
var port = 3000;
var app = express();

// step 1: Setting up the boilerplate and routing
app.get('/wiki', function(req, res) {

  var url = 'https://en.wikipedia.org/wiki/Oxygen';

  request(url, function(error, response, html) {
    if (!error) {
      //res.send(html);
      var $ = cheerio.load(html);
      var data = {
        articleTitle: '',
        articleImg: '',
        articlePara: ''
      };
      $('#content').filter(function() {
        data.articleTitle = $(this).find('#firstHeading').text();
        data.articleImg = $(this).find('img').first().attr('src');
        data.articlePara = $(this).find('p:nth-of-type(6)').text();
      });
      res.send(data);

      fs.writeFile('wiki-output.js', JSON.stringify(data, null, 4), function(error) {
        console.log('File written on hard drive');
      });
    }
  });

});

app.get('/imdb', function(req, res) {

  var url = 'https://www.imdb.com/chart/top';

  request(url, function(error, response, html) {
    if (!error) {
      //res.send(html);
      var $ = cheerio.load(html);
      var data = [];
      $('.lister-list').filter(function() {
        $(this).find('tr').each(function(i, elem) {
          data[i] = "'" + $(this).find('.posterColumn').find('img').attr('src') + "'";
        });

      });
      res.send(data);

      fs.writeFile('imdb-output.js', 'var imdb_list = [' + data + ']', function(err) {
        console.log('File written on hard drive');
      });
    }
  });

});

app.get('/instagram', function(req, res){

  // try any hashtags and see the results, make sure to write INSIDE the quotation marks
  var hashtag = 'aesthetic';
  var url = 'https://instagram.com/explore/tags/'+ hashtag +'/?__a=1';

  // let's make the http request to the url above using the 'request' dependency
  request(url, function(error, response, html) {

    // only execute if there's no error
    if(!error) {

      // we can use the dependency 'cheerio' to traverse the DOM and use jQuery-like selectors and functions
      var $ = cheerio.load(html);

      // the url actually gives back already a ready to use JSON object so we just want that raw text
      var instagram_data = $.text();

      // send the data we've stored in our array back to the browser
      res.send(instagram_data);

      // save the data we've stored in our object on our machine
      fs.writeFile('insta.js', 'var instagram_output = ' + instagram_data, function(err){
        console.log('File is written successfully!');
      });

    }
  });
});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
