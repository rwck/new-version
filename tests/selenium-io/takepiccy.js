// remember you need to be running the server too.
// run selenium-standalone start

var webdriverio = require('webdriverio');
var test = require('colored-tape');
var options = {
    desiredCapabilities: {
        browserName: 'chrome',
        logLevel: 'verbose',
        // baseUrl: 'file:///home/donald/portfolio/new_projects/othello/new-version'
    }
};

var client = webdriverio
    .remote(options)
    .init()
    .url("https://shrouded-cliffs-5129.herokuapp.com/");

client.saveScreenshot('./arduino_screenshot.png', function(err, screenshot, response) {
    client.end();
});
