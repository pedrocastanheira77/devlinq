var assert = require('chai').assert;

describe('StackOverflowBar', function(){
  describe('#getStackAPI', function(){
    it('returns an array of StackOverflowOutputItems', function(){
      var stackbar = new StackOverflowBar();
      var apicall = stackbar.getStackAPI("ruby array sort");
      assert.equal(apicall[0].title(), "Sorting an array in descending order in Ruby")
      // expect(apicall[0].title()).toEqual("Sorting an array in descending order in Ruby");
      // expect(apicall[0].url()).toEqual("http://stackoverflow.com/questions/2642182/sorting-an-array-in-descending-order-in-ruby");
    });
  })
});
