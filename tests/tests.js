var test = require("colored-tape");
var boo = require("../boo.js");

test("draw playing grid", function(t) {
  t.plan(2);


// t.equal(actual, expected, "statement")
  t.equal(5, 5, "five is five.");
  // t.equal(sayHello(), "Hello")
  t.equal(($(".hello-there").text), "HI.", "the page should say HI");
});
