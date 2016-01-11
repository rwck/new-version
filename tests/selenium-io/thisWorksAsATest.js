var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    .url("file:///home/donald/portfolio/new_projects/othello/new-version/index.html")
    // .url('http:localhost:')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);

    })
    .get(function(err, res) {
        console.log("Heading was: " + res.value);
    })
    .end();
