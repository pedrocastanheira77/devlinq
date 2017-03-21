// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

xit('Extention add text to the google search results',  (done)=> {
  var sw = require('selenium-webdriver');
  var assert = require('chai').assert;
  var chromeOptions = sw.Capabilities.chrome();
  chromeOptions.set("chromeOptions",  {"args": ['--load-extension='+"/Users/Lauren/makers/devlinq", "--enable-extension-apps"]});
  // console.log(chromeOptions)
  var driver = new sw.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeOptions)
      .build();

  driver.get('https://www.google.co.uk/#q=search&*')
    .then(function(){
    // inject bundle.js

      // chrome.tabs.executeScript(tabs[0].id, {file:"bundle.js"});

      // var screen = require("sikuli")
      // var s = new Screen()
      // s.find("icon.png").then(function(s){
      //   s.click("icon.png")
      // })
      //
      driver.findElement(sw.By.className('gb_9e gb_Ia gb_yb')).then(function(a) {
      //
      driver.executeScript("console.log('hey')");
      done()
      // setTimeout(function() {
      //     a.click()
      //     // a.click()
      //     a.click().then(function(b) {
      //       // driver.findElement(sw.By.id('stackoverflowbar')).then(function(c){
      //         console.log("here")
      //       //   assert.isNotNull(c,'Awesome');
      //       //   done();
      //       // })
      //     })
      //   }, 5000)
      })
    })
    // setTimeout(function(){
    // //   console.log("before script")
    //

      driver.executeScript("console.log('hey')");
      done()

    // }, 1000)



})
