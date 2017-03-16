jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

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
            driver.findElement(sw.By.id('stack')).then(function(c){
              c.getText().then(function(d){
                assert.inNotNull(d,'Awesome');
                done();
              })
              done();
            })
            done();
          }).catch(function(c) {
            done();
          })
        }, 5000)
      })
    })
})
