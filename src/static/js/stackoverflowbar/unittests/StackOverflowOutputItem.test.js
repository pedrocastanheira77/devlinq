var assert = require('chai').assert;

describe('StackOverflowOutputItem', function(){

  it('instantiates with two arguments', function(){
    var stackitem = new StackOverflowOutputItem("title", "url");

    assert.equal(stackitem.title(), "title")
    // expect(stackitem.title()).toEqual("title");
    // expect(stackitem.url()).toEqual("url");

  });
});
