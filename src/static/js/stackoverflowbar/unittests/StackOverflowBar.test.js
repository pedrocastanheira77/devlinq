var assert = require('chai').assert;

var StackOverflowBar = require('../StackOverflowBar.js')


describe('StackOverflowBar', function(){
  describe('#getStackAPI', function(){
    it('returns an array of StackOverflowOutputItems', function(done){
        var stackbar = new StackOverflowBar;
        stackbar.getStackAPI("ruby array sort", 5).then(function(data){
        assert.equal(data[0].getTitle(), "Ruby Array sorting");
        assert.equal(data[0].getUrl(), "http://stackoverflow.com/questions/29264172/ruby-array-sorting");
        done();
      })
    })
    it('returns requested number of results if that number of results exists', function(done){
      var stackbar = new StackOverflowBar;
      stackbar.getStackAPI("ruby array sort", 5).then(function(data){
        assert.equal(data.length, 5);
        done();
      })
    })
    it('returns maximun number of results is requested number is more than existing one', function(done){
      var stackbar = new StackOverflowBar;
      stackbar.getStackAPI("ruby array sort", 40).then(function(data){
        assert.equal(data.length, 30);
        done();
      })
    })
  })
});
