var test = require('colored-tape');
var webdriverio = require('webdriverio');
var assert = require('assert');

var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

var client = webdriverio.remote(options);

test("This is a test", function(t) {

  var ids = [];

  t.plan(3);

  client

    .init()

  .url('file:///Users/donald/portfolio/new_projects/othello/new-version/index.html')

  .getTitle().then(function(title) {
    console.log('Title is: ' + title);
    t.equal(title, 'Othello v2', "The site's title should be 'Othello v2'");
    t.equal(5 * 50, 250, "maths");
  })

  .click('#myButton')

  .getText('#someText').then(function(value) {
    t.equal(value, 'I was clicked', "Clicking the button");
  })

  .getAttribute('td', 'id').then(function(attr) {
    // console.log(attr);
    attr.forEach(function(elem) {
      client.click('#' + elem, function(err, res) {
        // console.log(res);
      })
    })
    attr.forEach(function(elem) {
    client.getCssProperty('#' + elem, 'background-color').then(function(color) {
      console.log(color.parsed.rgba);
    })
  })
  })

  // .getAttribute('td', 'id').then(function(attr) {
  //   console.log(attr);
  //   attr.forEach(function(elem) {
  //     client.getAttribute('#' + elem, 'background-color').then(function(color) {
  //         console.log(color);
  //       })
  //       // console.log(res.state);
  //   })
  // })

});


// test("new test", function(t) {
//   t.plan(1);
//   t.equal(5, 5, "five is five");
// })
