var casper = require('casper').create();
var source;

function getSource() {
    var source = document.querySelectorAll('img');
    return Array.prototype.map.call(source, function (e) {
        return e.getAttribute('src')
    });
}

casper.start('http://www.madrasglobal.com/');

casper.then(function () {
    source = this.evaluate(getSource);
});

casper.run(function () {
    for(var i in source) {
        console.log(source[i]);
    }
});