var assert = require('chai').assert;
import StackOverflowOutputItem from '../StackOverflowOutputItem.js'

describe('StackOverflowOutputItem', function(){

  it('instantiates with two arguments', function(){
    var stackitem = new StackOverflowOutputItem("title", "url", "1", "1", "1");
    assert.instanceOf(stackitem, StackOverflowOutputItem);
  });
  it('#getTitle', function(){
    var stackitem = new StackOverflowOutputItem("title", "url", "1", "1", "1");
    assert.equal(stackitem.getTitle(), "title");
  });
  it('#getUrl', function(){
    var stackitem = new StackOverflowOutputItem("title", "url", "1", "1", "1");
    assert.equal(stackitem.getUrl(), "url");
  });
  it('#getViewCount', function(){
    var stackitem = new StackOverflowOutputItem("title", "url", "1", "1", "1");
    assert.equal(stackitem.getViewCount(), "1");
  });
  it('#getAnswerCount', function(){
    var stackitem = new StackOverflowOutputItem("title", "url", "1", "1", "1");
    assert.equal(stackitem.getAnswerCount(), "1");
  });
  it('#getScore', function(){
    var stackitem = new StackOverflowOutputItem("title", "url", "1", "1", "1");
    assert.equal(stackitem.getScore(), "1");
  });
});
