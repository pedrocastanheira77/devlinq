var assert = require('chai').assert;
import StackOverflowBar from '../StackOverflowBar.js';
var stackbar = new StackOverflowBar();

describe('StackOverflowBar', function(){
  describe('#getStackAPI', function(){
    it('returns an array of StackOverflowOutputItems', function(done){
      stackbar.getStackAPI("ruby array sort", 5).then(function(data){
        assert.equal(data[0].getTitle(), "Ruby Array sorting");
        assert.equal(data[0].getUrl(), "http://stackoverflow.com/questions/29264172/ruby-array-sorting");
        done();
      })
    })
    it('returns requested number of results if that number of results exists', function(done){
      stackbar.getStackAPI("ruby array sort", 5).then(function(data){
        assert.equal(data.length, 5);
        done();
      })
    })
    it('returns maximun number of results is requested number is more than existing one', function(done){
      stackbar.getStackAPI("ruby array sort", 40).then(function(data){
        assert.equal(data.length, 30);
        done();
      })
    })
  })
});
