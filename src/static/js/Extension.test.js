jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

it('Extention add text to the google search results',  (done)=> {
  var sw = require('selenium-webdriver');
  var chromeOptions = sw.Capabilities.chrome();
  chromeOptions.set("chromeOptions",  {"args": ['--load-extension='+"/Users/KateLoschinina/Workspace/MakersAcademy/devlinq"]});
  // console.log(chromeOptions)
  var driver = new sw.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeOptions)
      .build();

  driver.get('https://www.google.co.uk/#q=search&*')
    .then(function(){
      console.log(1)
      // done();
    })
    .then(function(){
      console.log(2)
      // driver.findElement(sw.By.id('main')).then(function(el){
      //   console.log(el)
      //   el.click();
      // });
      // var a = driver.findElement(sw.By.id('appbar'));
      // a.click();
      // console.log(a)
      driver.findElement(sw.By.id('searchform')).then(function(a) {
        setTimeout(function() {
          console.log(a);
          a.click().then(function(b) {
            console.log(b)
            
            done();
          }).catch(function(c) {
            console.log(c)
            done();
          })
        }, 5000)


      })
      // driver.getPageSource().then(function(a) {
      //
      //
      // });
      //
      // a.then(function() {
      //   console.log(3);
      //   done();
      // }).catch(function() {
      //   console.log("ERROR", 3, arguments);
      //   done();
      // })

    })
    // .then(function(q) {
    //   console.log(3)
    //   q.click();
    //
    // });

    // console.log(r);

  // console.log(driver.findElement({id: 'appbar'}).click());

})
