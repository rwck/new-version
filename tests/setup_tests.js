setupTests = {
  webdriverio: require('webdriverio'),
  tape: require('colored-tape'),
  // var By = require('selenium-webdriver').By;

  options: {
    desiredCapabilities: {
      browserName: 'chrome',
      logLevel: 'verbose',
    }
  },

  client: this.webdriverio
    .remote(this.options)
    .this.init()
    .this.url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html")
}

module.exports = setupTests;
