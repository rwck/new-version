var webdriverio = require('webdriverio');
var test = require('colored-tape');
var By = require('selenium-webdriver').By;

var options = {
  desiredCapabilities: {
    browserName: 'chrome',
    logLevel: 'verbose',
    // baseUrl: 'file:///home/donald/portfolio/new_projects/othello/new-version'
  }
};


var driver = webdriverio

var client = webdriverio
  .remote(options)
  .init()
  .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html");
