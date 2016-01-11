var setupTests = require('./setup_tests.js')


// var webdriverio = require('webdriverio');
// var test = require('colored-tape');
// // var By = require('selenium-webdriver').By;
//
// var options = {
//   desiredCapabilities: {
//     browserName: 'chrome',
//     logLevel: 'verbose',
//   }
// };
//
// var client = webdriverio
//   .remote(options)
//   .init()
//   .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html");

newTest = function() {
  client.getAttribute('td', 'id').then(function(result) {
    var list = result;
    test("checking the colour of the cells", function(assert) {
      for (var i = 0; i < list.length; i++) {
        client.getCssProperty('#' + list[i],
          "background-color").then(function(result) {
          assert.equal(result.value, 'rgba(0,128,0,1)', 'checking...');
        }, function(err) {
          console.log("something went wrong", err);
        });
      }
      assert.end();
    })
  });
}

newTest();
