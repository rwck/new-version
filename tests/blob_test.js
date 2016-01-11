var webdriverio = require('webdriverio');
var test = require('colored-tape');
var By = require('selenium-webdriver').By;

var options = {
  desiredCapabilities: {
    browserName: 'chrome',
    logLevel: 'verbose',
  }
};




var client = webdriverio.remote(options);


firstTest = function() {
  test("first selenium test", function(assert) {
    assert.plan(1);
    client
      .init()
      .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html")
      .getAttribute('td', 'id').then(function(result) {
        var list = result;
        for (var i = 0; i < list.length; i++) {
          assert.equal()
        }
        // console.log(list);
        assert.equal(list.length, 64, "64 squares")
      })
      .end()
  });
}



secondTest = function() {
  test("still trying to get my head round this", function(assert) {
    assert.plan(3);
    client
      .init()
      .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html")
      .getAttribute('td', 'id').then(function(result) {
        var list = result;
        console.log(list);
        assert.equal(list.length, 64, "there should be 64 squares");
      })
      .getTitle().then(function(title) {
        assert.equal("Othello v2", title, "Page title should be Othello v2")
      })
      .getCssProperty('#54', 'background-color').then(function(result) {
        assert.equal(result.value, 'rgba(0,128,0,1)', "square 54 should be green");
      })
      .end();
  })
}


setTests = function() {
  return new Promise(function(resolve, reject) {
    resolve(firstTest());
  });
}

firstTest();

// setTests().then(secondTest())
// secondTest();


// test("check colours of all squares", function(assert) {
//   assert.plan();
//   client
//     .init()
//     .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html")







//
//
//
//   .init()
//   .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html");
//
//
// client.getAttribute('td', 'id').then(function(result) {
//   var list = result;
//   console.log(result);
//   for (var i = 0; result[i]; i++) {
//     console.log(result[i]);
//   }
// }, function(err) {
//   console.log("Something went wrong", err);
// });
//
// console.log(By);
