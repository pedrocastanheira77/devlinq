jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

it('Extention add text to the google search results',  (done)=> {
  var sw = require('selenium-webdriver');
  var assert = require('chai').assert;
  var chromeOptions = sw.Capabilities.chrome();
  chromeOptions.set("chromeOptions",  {"args": ['--load-extension='+"/Users/KateLoschinina/Workspace/MakersAcademy/devlinq"]});
  // console.log(chromeOptions)
  var driver = new sw.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeOptions)
      .build();

  driver.get('https://www.google.co.uk/#q=search&*')
    .then(function(){
      driver.findElement(sw.By.id('searchform')).then(function(a) {
        setTimeout(function() {

          a.click().then(function(b) {
            driver.findElement(sw.By.id('stackoverflowbar')).then(function(c){
              console.log("here")
              assert.isNotNull(c,'Awesome');
              done();
            })
          })
        }, 5000)
      })
    })
})
