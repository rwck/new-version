var webdriver = require("selenium-webdriver");
var test = require("colored-tape");

var By = require("selenium-webdriver").By;
var until = require("selenium-webdriver").until;

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.get('file:///Users/donald/portfolio/new_projects/othello/new-version/index.html');

var everything = driver.findElement(By.className("get-me"));
var heading = driver.findElement(By.tagName("h1").innerHTML);

test("mytest", function(t) {
  t.plan(1);
  t.equal(5, 5, "five is five");
  t.equal(heading, "Hello", "the heading says 'Hello'");
  // t.equal(everything, )
})

driver.quit();
