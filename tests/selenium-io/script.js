var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox');

// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .setChromeOptions(/* ... */)
//     .setFirefoxOptions(/* ... */)
//     .build();


var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .usingServer('http://localhost:4444/wd/hub')
  .build();
