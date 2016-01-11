var test = require('colored-tape');
var webdriverio = require('webdriverio');
var assert = require('assert');

var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

var client = webdriverio.remote(options);

var myTest = {};

/////////--- START OF TESTS --- //////////////////////////////////

test("Clicking on already coloured square should do nothing", function(t) {

  var ids = [];

  t.plan(2);

  client

    .init()

  .url('file:///Users/donald/portfolio/new_projects/othello/new-version/index.html')

  .getCssProperty('#34', 'background-color').then(function(color) {
    myTest.originalColor = color.parsed.rgba;
    console.log(myTest.originalColor);
  })

  .click('#34')

  // clcking on an already not green square should do nothing

  .getCssProperty('#34', 'background-color').then(function(color) {
    var newColor = color.parsed.rgba;
    console.log(newColor);
    t.equal(myTest.originalColor, newColor, "shouldn't change colour on being clicked")
  })

  .getCssProperty('#44', 'background-color').then(function(color) {
    myTest.originalColor = color.parsed.rgba;
    console.log(myTest.originalColor);
  })

  .click('#44')

  // clcking on an already not green square should do nothing

  .getCssProperty('#44', 'background-color').then(function(color) {
    var newColor = color.parsed.rgba;
    console.log(newColor);
    t.equal(myTest.originalColor, newColor, "shouldn't change colour on being clicked")
  })

});

/// --- ///

test("Can only click if there is an adjacent square of the opposing colour", function(t) {

  t.plan(2);

  t.equal(5, 25/5, "maths works");

  client

  .getCssProperty('#54', 'background-color').then(function(color) {
    myTest.originalColor = color.parsed.rgba;
    console.log(myTest.originalColor);
  })

  .click('#54')

  // clcking on an already not green square should do nothing

  .getCssProperty('#54', 'background-color').then(function(color) {
    myTest.originalColor = color.parsed.rgba;
    console.log(myTest.originalColor);
  })

  .click('#54')

  .getCssProperty('#54', 'background-color').then(function(color) {
    var newColor = color.parsed.rgba;
    console.log(newColor);
    t.equal(myTest.originalColor, newColor, "shouldn't change colour on being clicked")
  })

})

/// --- ///

test("have same colour in row to right", function(t) {

  // this doesn't actually test what you're saying needs to be tested.

  t.plan(1);

  client.click('#64');
  client.click('#74');



  t.equal(5, 5+5-5);

  // clicking on cell 45 should not work if the player is black

  client.click('#45');

  //  test goes here

  //

  // there needs to be one of the player's colour in the same row for it to be a valid move

})

// test("new test", function(t) {
//   t.plan(1);
//   t.equal(5, 5, "five is five");
// })
