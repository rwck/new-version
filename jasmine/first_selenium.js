var selenium = require('selenium-webdriver');

describe("My first effort", function() {

  beforeEach(function(done) {
    this.driver = new selenium.Builder().
    withCapabilities(selenium.Capabilities.chrome()).
    build();

    this.driver.get("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html").then(done);
  });

  afterEach(function() {
    this.driver.quit().then(done);
  });


  it("Should be on the home page", function() {
    var element = this.driver.findElement(selenium.By.tagName('body'));

    element.getAttribute('id').then(function() {
      expect(id).toBe("home");
      done();
    });
  })

});
