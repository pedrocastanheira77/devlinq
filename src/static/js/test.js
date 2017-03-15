console.log("hello")

var sw = require('selenium-webdriver');
var chromeOptions = sw.Capabilities.chrome();
chromeOptions.set("chromeOptions",  {"args": ['--load-extension='+"/Users/Lauren/makers/devlinq"]});
console.log(chromeOptions)
var driver = new sw.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeOptions)
    .build();

driver.get('https://www.google.co.uk/#q=search&*')
