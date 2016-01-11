// remember you need to be running the server too.
// run selenium-standalone start

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

var client = webdriverio
  .remote(options)
  .init()
  .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html");

// test to understand how testing works...
// check the value of the text in the div
test("clicking and getting text back", function(t) {
  var expectingToFind = "Here is some text"
  t.plan(4);
  t.equal(5, 5, "five is five");
  var text = client.getText('.get-me', function(err, text) {
    console.log("what came back: ", text);
    t.equal(expectingToFind, text, "Does it have the right string in it?");
  });
  // check the colour of the background of the cell befo
  var colorProperty = client.getCssProperty("#54", "background-color", function(err, text) {
    console.log(text.value);
    var expectedColour = 'rgba(0,128,0,1)';
    t.comment("Doing another test now");

    t.equal(expectedColour, text.value, "Is the cell green to start with?");

    // click on the square and check that the color changes

    client
      .click('#54', function(err, text) {
        var expectedColourAfterClick = 'rgba(0,0,0,1)';
        client
          .getCssProperty("#54", 'background-color', function(err, text) {
            var actualColourAfterClick = text.value;
            t.equal(expectedColourAfterClick, actualColourAfterClick, "Has the cell turned black after being clicked?");
            // client.end();
          });
      });
  });
});


// client.element('#this').then(function(err, res) {
//   assert(err === null);
//
//   client.elementIdCssProperty(response.value.ELEMENT, 'width').then(function(response) {
//     assert(response.value === '100px');
//   });
//
// })






test("Getting started with real TDD", function(t) {
  t.plan(1);
  t.comment("Doing another test now");

  t.equal(5, 5, 'five is five');

  // this is the one...
  var listOfColors = [];

  var IDs = client.getAttribute('td', 'id').then(function(result) {
    console.log(result);
    listOfColors.push(result);
  }, function(err) {
    console.log(err);
  });
});

// client.getHTML(".get-me", function(err, text) {
//   console.log(text);
//   var assertion = "Here is some text.\nHello";
//   var title = "Othello";
//   var testValue = text;
//   test("check", function(t) {
//     t.plan(2);
//     t.equal(5, 5, "five is five.");
//     console.log("Expecting: ", assertion);
//     console.log("Got: ", testValue);
//     t.equal(testValue, assertion, "the contents of the page should be such and such");
//   });
// });


// test("Clicking changes colour of box", function(t) {
//   t.equal(5, 5, "five is five");
//   var colorProperty = client.getCssProperty("#54", "background-color", function(err, text) {
//     console.log("The colour is: ", text.value);
//     console.log(text.value);
//     // var mycolor = colorProperty
//     t.equal(text.value, 'rgba(0,128,0,1)', "the box should be green to start with");
//     t.end();
//   });
// });
//
// test("clicked the box", function(t) {
//
//   var newColor = client.getCssProperty('#54',
//     "background-color",
//     function(err, text) {
//       console.log("The new colour is: ", text.value);
//       t.equal(text.value, 'rgba(0,0,0,1)', 'it should now be black');
//       t.end();
//     });
// });

// client.click("#54", function(err, text);

console.log(client);
