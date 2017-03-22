var expect = require('chai').expect;
var assert = require('chai').assert;
var StackOverflowBar = require('../StackOverflowBar.js')
var chai = require('chai');
var stub = require('sinon').stub;
var ourChrome = require('sinon-chrome');
var jsdom = require('jsdom');

describe('StackOverflowBar', function(){
  // what this tests is commented out
  // describe('#getStackAPI', function(){
  //   it('returns an array of StackOverflowOutputItems', function(done){
  //       var stackbar = new StackOverflowBar;
  //       stackbar.getStackAPI("ruby array sort", 5).then(function(data){
  //       assert.equal(data[0].getTitle(), "Ruby Array sorting");
  //       assert.equal(data[0].getUrl(), "http://stackoverflow.com/questions/29264172/ruby-array-sorting");
  //       done();
  //     })
  //   })
  //   it('returns requested number of results if that number of results exists', function(done){
  //     var stackbar = new StackOverflowBar;
  //     stackbar.getStackAPI("ruby array sort", 5).then(function(data){
  //       assert.equal(data.length, 5);
  //       done();
  //     })
  //   })
  //   it('returns maximun number of results is requested number is more than existing one', function(done){
  //     var stackbar = new StackOverflowBar;
  //     stackbar.getStackAPI("ruby array sort", 40).then(function(data){
  //       assert.equal(data.length, 30);
  //       done();
  //     })
  //   })
  // })

  // describe('#stackOverflowDiv', function(){
  //
  // };

  // describe('#createStackOverflowTitle', function(){
  //
  // };

  describe('#createStackOverflowDiv', function(){
    it('returns a div element', function(){
      var stackbar = new StackOverflowBar;
      var aDocument = jsdom.jsdom('<div id="lst-ib"></div>')
      aDocument.getElementById('lst-ib').value = "hey there"
      expect(stackbar.createStackOverflowDiv(aDocument).tagName).to.equal('DIV')
    });

    it('returns a div element with id stackoverflowbar', function(){
      var stackbar = new StackOverflowBar;
      var aDocument = jsdom.jsdom('<div id="lst-ib"></div>')
      aDocument.getElementById('lst-ib').value = "hey there"
      expect(stackbar.createStackOverflowDiv(aDocument).id).to.equal('stackoverflowbar')
    });
  });

  // var chai = require('chai');
  // var spies = require('chai-spies');
  // chai.use(spies);

  // describe('#insertStackOverflowAPI', function(){
  //   it('does something', function(){
  //     var stackdiv = createStackOverflowDiv();
  //     stub(StackOverflowBar.prototype, 'decideStringForAPI')
  //     StackOverflowBar.prototype.decideStringForAPI.returns("ruby array")
  //     var spy = chai.spy.on(stackdiv, 'insertAdjacentHTML');
  //     console.log(spy)
  //     insertStackOverflowAPI(5, stackdiv)
  //     expect(spy).to.have.been.called()
  //   });
  // });
  describe('#getStackAPI', function(){

    // it('returns a promise', function(){
    //   var stackbar = new StackOverflowBar;
    //   var element = document.createElement('div')
    //   element.value = "ruby array"
    //   stub(document, 'getElementById')
    //   document.getElementById.withArgs("lst-ib").returns(element)
    //   expect(stackbar.decideStringForAPI()).to.equal(element.value)
    // });

    it('returns an array of StackOverflowOutputItems', function(done){
         var stackbar = new StackOverflowBar;
         stackbar.getStackAPI("ruby array sort", 5).then(function(data){
         assert.equal(data[0].getTitle(), "Ruby Array sorting");
         assert.equal(data[0].getUrl(), "http://stackoverflow.com/questions/29264172/ruby-array-sorting");
         done();
       });
     });

    it('returns requested number of results if that number of results exists', function(done){
      var stackbar = new StackOverflowBar;
      stackbar.getStackAPI("ruby array sort", 5).then(function(data){
        assert.equal(data.length, 5);
        done();
      });
    });

    it('returns maximun number of results is requested number is more than existing one', function(done){
      var stackbar = new StackOverflowBar;
      stackbar.getStackAPI("ruby array sort", 40).then(function(data){
        assert.equal(data.length, 30);
        done();
      });
    });
  });

  describe('getStackAPI', function(){
    it('returns a promise', function(){
      var stackbar = new StackOverflowBar;
      var promise = stackbar.getStackAPI("ruby array", 3)
      expect(promise.constructor.name).to.equal("Promise")
    });
  });

  describe('#stackAPIresult', function(){
    it('returns a HTML paragraph element', function(){
      var aDoc = jsdom.jsdom('<div id="lst-ib"></div>')
      aDoc.getElementById('lst-ib').value = "hey there";
      var stackbar = new StackOverflowBar;
      expect(stackbar.stackAPIresult(aDoc).tagName).to.equal('P')
    });

    it('returns a HTML paragraph element with id exampleSOresult', function(){
      var aDoc = jsdom.jsdom('<div id="lst-ib"></div>')
      aDoc.getElementById('lst-ib').value = "hey there"
      var stackbar = new StackOverflowBar;
      expect(stackbar.stackAPIresult(aDoc).id).to.equal('exampleSOresult')
    });

    it('returns a HTML paragraph element with innerHTML from decideStringForAPI', function(){
      var stackbar = new StackOverflowBar;
      var aDoc = jsdom.jsdom('<div id="lst-ib"></div>')
      aDoc.getElementById('lst-ib').value = "hey there"
      expect(stackbar.stackAPIresult(aDoc).innerHTML).to.equal('hey there')
    });
  });

  // describe('getRequestedNumberOfLinks', function(){
  //   it('returns the value from chrome local storage', function(){
  //     getRequestedNumberOfLinks(ourChrome);
  //     assert.ok(ourChrome.storage.local.get.calledOnce);
  //   });
  // });

  describe('decideStringForAPI', function(){
    it('returns the value of the correct element', function(){
      var aDocument = jsdom.jsdom('<div id="lst-ib"></div>')
      aDocument.getElementById('lst-ib').value = "hey there"
      var stackbar = new StackOverflowBar;
      expect(stackbar.decideStringForAPI(aDocument)).to.equal("hey there")
    })
  });

  describe('createStackOverflowTitle', function(){
    it('returns a div element', function(){
      var stackbar = new StackOverflowBar;
      var aDocument = jsdom.jsdom('<div id="lst-ib"></div>')
      aDocument.getElementById('lst-ib').value = "hey there"
      var stackdiv = stackbar.createStackOverflowDiv(aDocument)
      console.log(stackdiv)
      expect(stackbar.createStackOverflowTitle(stackdiv).tagName).to.equal('hello')
    });
  })
});
