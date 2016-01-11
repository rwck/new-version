var webdriverio = require('webdriverio');
// var test = require('colored-tape');
// var By = require('selenium-webdriver').By;

var options = {
  desiredCapabilities: {
    browserName: 'chrome',
    logLevel: 'verbose',
    // baseUrl: 'file:///home/donald/portfolio/new_projects/othello/new-version'
  }
};

var client = webdriverio
  .remote(options);
// .init()
//

describe("My first effort", function() {

  // beforeEach(function() {
  //   client
  //     .init()
  //     .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html")
  // });

  //
  // afterEach(function() {
  //   client
  //     .end();
  // });

  it("Should be on the home page", function() {
    client
      .url("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html")
      .getAttribute('td', 'id')
      .then(function(result) {
        console.log(result);
        expect(result.length).toEqual(70);

      });

    // client.getAttribute('id').then(function(result) {()
    //   expect(result).toBe("home");
    // });
  });

  it("Should have the title Othello v2", function() {
    client.getTitle().then(function(result) {
      expect(result).toBe("Othellodd v2");
    });
  });

  //   })
  // })
  //
  //
  // client.getCssProperty("#54", "background-color").then(function() {

});


//     this.driver = new selenium.Builder().
//     withCapabilities(selenium.Capabilities.chrome()).
//     build();
//
//     this.driver.get("file:///Users/donald/portfolio/new_projects/othello/new-version/index.html").then(done);
//   });
//
//   afterEach(function() {
//     this.driver.quit().then(done);
//   });
//
//
//   it("Should be on the home page", function() {
//     var element = this.driver.findElement(selenium.By.tagName('body'));
//
//     element.getAttribute('id').then(function() {
//       expect(id).toBe("home");
//       done();
//     });
//   })
//
// });
