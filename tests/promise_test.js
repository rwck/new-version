var webdriverio = require('webdriverio');
var test = require('colored-tape');
// var By = require('selenium-webdriver').By;

var options = {
  desiredCapabilities: {
    browserName: 'chrome',
    logLevel: 'verbose',
  }
};

var client = webdriverio
  .remote(options)
  .init()
  .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html");


var testPromise = function() {
  return new Promise(function(resolve, reject) {
    resolve(function() {
      client.getAttribute('td', 'id').then(function(result) {
        var list = result;
        console.log(list);
        test('checking the colour of the cells', function(assert) {
          for (var i = 0; i < list.length; i++) {
            client.getCssProperty('#' + list[i], "background-color").then(function(result) {
                assert.equal(result.value, 'rgba(0,128,0,1)', "checking...");
              },
              function(err) {
                console.log("Something went wrong here", err);
              });
          }
        });
      })
    });
  })
}

testPromise();

// .then(function() {
//   console.log("Done");
// });

//
// var promise = new Promise(function(resolve, reject) {
//   resolve(function() {
//     client.getAttribute('td', 'id').then(function(result) {
//       var list = result;
//     });
//   });
// });
//
// promise.then(function(result) {
//   result();
//   // console.log(result);
//   console.log(list);
// })
//
//
//
//
// var promise = new Promise(function(resolve, reject) {
//   if (addition(4, 12) === 17) {
//     resolve("Stuf worked");
//   } else {
//     reject(Error("It broke"));
//   }
// });
//
// function addition(num1, num2) {
//   return num1 + num2;
// }
//
// promise.then(function(result) {
//   console.log(result); // "Stuff worked"
// }, function(err) {
//   console.log(err); // Error: "it broke"
// });
