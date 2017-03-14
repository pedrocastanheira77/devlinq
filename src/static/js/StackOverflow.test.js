var StackOverflow = require('./StackOverflow.js')


// Start with a webdriver instance:
// var sw = require('selenium-webdriver');
//
// // And then...
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
//
// var chromeOptions = sw.Capabilities.chrome();
// chromeOptions.addArguments("load-extension = ~/Workspace/MakersAcademy/devlinq");
// var driver = new sw.Builder()
//   .withCapabilities(chromeOptions)
//   .build();


  //import the selenium web driver
  var webdriver = require('selenium-webdriver');

  var chromeCapabilities = webdriver.Capabilities.chrome();
  //setting chrome options to start the browser fully maximized
  var chromeOptions = {
    'args': ['--test-type', '--start-maximized'],      'extensions': ['~/Workspace/MakersAcademy/devlinq']
  };
  chromeCapabilities.set('chromeOptions', chromeOptions);
  var driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

  chai.use(chaiWebdriver(driver));

// And you're good to go!
driver.get('https://www.google.co.uk/search?num=50&site=&source=hp&q=search&oq=search&gs_l=hp.3..35i39k1l2j0i131k1j0l7.2080.2914.0.3219.7.7.0.0.0.0.199.389.2j1.3.0.ulpc%2Ccfro%3D1%2Cstargd-cl%3Dweb-for-rerank-with-language%2Ceulp%3D1%2Celpf%3D1...0...1.1.64.hp..4.2.294.0.ugXTP_iyLHI');
chai.expect('#stack').dom.to.have.text("I'm a kitty!");
