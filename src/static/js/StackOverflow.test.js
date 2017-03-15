
//
// var chromeOptions = sw.Capabilities.chrome();
// chromeOptions.addArguments("load-extension = ~/Workspace/MakersAcademy/devlinq");
// var driver = new sw.Builder()
//   .withCapabilities(chromeOptions)
//   .build();

// it('has content', ()=> {
//   var StackOverflow = require('./StackOverflow.js')
//   var chai = require('chai');
//   var chaiWebdriver = require('chai-webdriver');
//   var webdriver = require('selenium-webdriver');
//
//
//   var chromeCapabilities = webdriver.Capabilities.chrome();
//   var chromeOptions = {
//     // 'binary': '/Applications/Google\Chrome.app/Contents/MacOS/Google\ Chrome',
//     // 'args': ['--test-type', '--start-maximized'],
//     'extensions': ["/Users/Lauren/makers/devlinq.crx"]
//   };
//   chromeCapabilities.set('chromeOptions', chromeOptions);
//   var driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
//
//   chai.use(chaiWebdriver(driver));
//
//   driver.get('https://www.google.co.uk/search?num=50&site=&source=hp&q=search&oq=search&gs_l=hp.3..35i39k1l2j0i131k1j0l7.2080.2914.0.3219.7.7.0.0.0.0.199.389.2j1.3.0.ulpc%2Ccfro%3D1%2Cstargd-cl%3Dweb-for-rerank-with-language%2Ceulp%3D1%2Celpf%3D1...0...1.1.64.hp..4.2.294.0.ugXTP_iyLHI');
//   var text =  driver.findElement(webdriver.By.id('stack'));
//   chai.expect(document).dom.to.have.text('Hi there and as;fjha greetings!')
// // });
//
it('is not crazy',  ()=> {
  // // var StackOverflow = require('./StackOverflow.js');
  // var windowObjectReference;
  // var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
  //
  // function openRequestedPopup() {
  //   windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);
  // }
  // openRequestedPopup()

  //
  // var gui = require('nw.gui');


  // global.window.newDispatcher.requireNwGui()

  // Open URL with default browser.
  // gui.Window.open('https://github.com/rogerwang/node-webkit');




  var sw = require('selenium-webdriver');
  var chromeOptions = sw.Capabilities.chrome();
  // console.log(sw.Capabilities.chrome())
  // chromeOptions.addArguments({"extension":  "~/Workspace/MakersAcademy/devlinq"});
  // console.log(sw.Capabilities.chrome())
  var driver = new sw.Builder()
      .forBrowser('chrome')
      .build();

  driver.get('chrome://extensions')

    // var driver = new sw.Builder()
    //   .withCapabilities(chromeOptions)
    //   .build();


  // var chai = require('chai');
  // var chaiWebdriver = require('chai-webdriver');

  // chai.use(chaiWebdriver(driver));

  // driver.addExtension('/lauren/makers/devlinq.crx')
  driver.get('https://www.google.co.uk/')
  // driver.get('chrome://extensions')
  // driver.findElement(By.id('toggle-dev-on')).click()
  // var title = driver.findElement(sw.By.id('title'));

})
