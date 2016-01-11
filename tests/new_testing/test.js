var webdriverio = require('webdriverio');
var test = require('colored-tape');

var options = {
  desiredCapabilities: {
    browserName: 'chrome',
    logLevel: 'verbose',
  }
};

var client = webdriverio
  .remote(options)

test('Assertions with tape.', function(t) {
  client
    .init()
    .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html")
    .getAttribute('td', 'id').then(function(result) {
        var list = result;
        // console.log(result);
        t.equal(list.length, 64, "Checking number of squares");

        for (var i = 0; i < list.length; i++) {
          t.test("another test", function(st) {
            st.equal
          })
        }

        t.test("second test now", function(st) {
          for (var i = 0; i < list.length; i++) {
            var colors = client.getCssProperty('#' + list[i], "background-color").then(function(result) {
              st.equal(colors[i], 'rgba(0,128,0,1)', "checking...");
            })
          }
          st.end();
        })
      },
      function(err) {
        console.log("Something went wrong here", err);
      }
    )
    // .getCssProperty('#' + list[i], "background-color").then(function(myColors) {
    //   var colors = myColors;
    //   console.log(colors);
    // })
    .end()
  t.end();
});





//
//   for (var i = 0; i < 100; i++) {
//     // t.plan(101);
//     t.equal(i - i, 0, "Zero is zero");
//   }
//   t.ok('5-5=0', "maths");
//   var one = 1;
//   var two = 2;
//
//   t.equal(two - one, 1, "More maths");
//   t.notEqual(one - two, 9, "Even more maths");
//   var
//
//   t.test("this is a subtest", function(st) {
//     st.equal('this', 'this', 'a new test');
//     st.end();
//   });
//
//   // assert.equal(actual, expected,
//   //   'Given two mismatched values, .equal() should produce a nice bug report');
//
//   t.end();
// });
