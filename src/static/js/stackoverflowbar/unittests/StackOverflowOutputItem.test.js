var assert = require('chai').assert;
import StackOverflowOutputItem from '../StackOverflowOutputItem.js'

describe('StackOverflowOutputItem', function(){

  it('instantiates with two arguments', function(){
    var stackitem = new StackOverflowOutputItem("title", "url");

    assert.equal(stackitem.getTitle(), "title");
    assert.equal(stackitem.getUrl(), "url");
  });
});
