var casper = require('casper').create();
var links;

function getLinks() {
// Scrape the links from top-right nav of the website
    var links = document.querySelectorAll('ul#menu li a');
    return Array.prototype.map.call(links, function (e) {
        return e.getAttribute('href')
    });
}

// Opens casperjs homepage
casper.start('https://www.henriettahotel.com/');

casper.then(function () {
    links = this.evaluate(getLinks);
});

casper.run(function () {
    for(var i in links) {
        console.log(links[i]);
    }
});