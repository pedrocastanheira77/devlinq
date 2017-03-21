it('Extention add text to the google search results', (done) => {
  var sw = require('selenium-webdriver');
  var assert = require('chai').assert;
  var chromeOptions = sw.Capabilities.chrome();
  chromeOptions.set("chromeOptions",  {"args": ['--load-extension='+"/Users/KateLoschinina/Workspace/MakersAcademy/devlinq", "--enable-extension-apps"]});
  var driver = new sw.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeOptions)
      .build();

  driver.get('https://www.google.co.uk/#q=search&*')
    .then(function(){
      driver.findElements({id: 'language_bar'})
        .then(found => console.log("Language Bar is found"));
        done();
      driver.findElements({id: 'stackoverflow_bar'})
          .then(found => console.log("Stack Overflow Bar is found"));
          done();
      })
    done();
})
