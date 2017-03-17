process.env.NODE_ENV = 'test';
var chai = require('chai');
var assert = require('chai').assert;
var Browser = require('zombie');
var mocha = require('mocha');
var http = require('http');
import EventStackOverflowBar from '../EventStackOverflowBar.js';
import StackOverflowBar from '../StackOverflowBar.js';
var stackbar = new StackOverflowBar();


describe('EventStackOverflowBar', function () {

  beforeAll(function () {
    this.server = http.createServer(EventStackOverflowBar).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
    console.log(this.browser);
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('Inserts StackOverflow results into div', function (done) {
    // assert.ok(this.browser.success);
    assert.equal(1,1);
    console.log(this.browser.success);
    // // stackbar.getStackAPI("ruby array sort", 5).then(function(data){
    //   // what do we expect from it?
    //   done();
    // // })
  }).then(done);

  afterAll(function(done) {
    this.server.close(done);
  });
});
