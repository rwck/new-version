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
    .url("file:///home/donald/portfolio/new_projects/othello/new-version/index.html");

client.getText(".get-me", function(err, text) {
    console.log(text);
    var assertion = "Here is some text.\nHello";
    var testValue = text;
    test("check", function(t) {
        t.plan(2);
        t.equal(5, 5, "five is five.");
        t.equal(testValue, assertion, "the contents of the page should be such and such");
    })
    client.end();
})
