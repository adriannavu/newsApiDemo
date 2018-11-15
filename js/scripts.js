$(document).ready(function() {
  console.log('scripts loaded');

  var myKey = config.MY_KEY;
  var url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-14&sortBy=publishedAt&apiKey=' + myKey;
  var url2 = 'https://newsapi.org/v2/sources?language=en&country=us&apiKey=' + myKey;
  var urlArray = [url, url2];
  var data = [];
  var html = '';
  var articles = [];
  var i = '';

  for (i = 0; i < urlArray.length; i++) {

    $.ajax({
      type: 'GET',
      url: url,
      data: data,
      dataType: 'json',
      async: true,
      success: function(data) {
        console.log(data);
        articles = data.articles;

        articles.forEach(function(article) {
          console.log(article.title);
          html += '<div class="latest-news flex">';
          html += '<img class="thumbnail" src="' + article.urlToImage + '">';
          html += '<div class="text">';
          html += '<a href="' + article.url + '" target = "_blank">';
          html += '<h2 class="headline">' + article.title + '</h2>';
          html += '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
          html += '</a></div>';
          html += '</div>';
        }); //end of forEach
        $('#results').html(html);
      } //end of success
    }); //end of ajax

  }
});