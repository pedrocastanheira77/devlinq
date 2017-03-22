var expect = require('chai').expect;
var assert = require('chai').assert;
var StackOverflowBar = require('../StackOverflowBar.js')
var chai = require('chai');
var stub = require('sinon').stub;

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

  // describe('#createStackOverflowDiv', function(){
  //   it('returns a div element', function(){
  //     expect(createStackOverflowDiv().tagName).to.equal('DIV')
  //   });
  //
  //   it('returns a div element with id stackoverflowbar', function(){
  //     expect(createStackOverflowDiv().id).to.equal('stackoverflowbar')
  //   });
  // });

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
  describe('#decideStringForAPI', function(){

    it('returns a promise', function(){
      var stackbar = new StackOverflowBar;
      var element = document.createElement('div')
      element.value = "ruby array"
      stub(document, 'getElementById')
      document.getElementById.withArgs("lst-ib").returns(element)
      expect(stackbar.decideStringForAPI()).to.equal(element.value)
    });

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
      var stackbar = new StackOverflowBar;
      expect(stackbar.stackAPIresult().tagName).to.equal('P')
    });
    it('returns a HTML paragraph element with id exampleSOresult', function(){
      var stackbar = new StackOverflowBar;
      expect(stackbar.stackAPIresult().id).to.equal('exampleSOresult')
    });

    it('returns a HTML paragraph element with innerHTML from decideStringForAPI', function(){
      var stackbar = new StackOverflowBar;
      stub(stackbar, 'decideStringForAPI')
      stackbar.decideStringForAPI.returns("hello tester")
      expect(stackbar.stackAPIresult().innerHTML).to.equal('hello tester')
    });
  });

  describe('#createStackOverflowDiv', function(){
    it('returns an element of type div', function(){
      var stackbar = new StackOverflowBar;
      var pelement = document.createElement('p')
      stub(stackbar, 'stackAPIresult');
      stackbar.stackAPIresult.returns(document.createElement('p'))
      expect(stackbar.createStackOverflowDiv().tagName).to.equal('DIV')
    });

    it('returns an element of type div', function(){
      var stackbar = new StackOverflowBar;
      var pelement = document.createElement('p')
      stub(stackbar, 'stackAPIresult');
      stackbar.stackAPIresult.returns(document.createElement('p'))
      expect(stackbar.createStackOverflowDiv().id).to.equal('stackOverflow')
    })
  });
});
