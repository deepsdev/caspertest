var casper = require('casper').create();
casper.start('https://www.henriettahotel.com/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://www.madrasglobal.com/', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();