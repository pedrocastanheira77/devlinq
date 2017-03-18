process.env.NODE_ENV = 'test';
var chai = require('chai');
var assert = require('chai').assert;
var Browser = require('zombie');
var mocha = require('mocha');
var http = require('http');
var StackOverflowBar = require('../StackOverflowBar.js')
import EventStackOverflowBar from '../EventStackOverflowBar.js';
import {StackOverflowBar} from '../StackOverflowBar.js';


describe('EventStackOverflowBar', function () {

  beforeAll(function () {
    this.server = http.createServer(EventStackOverflowBar).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
    console.log(this.browser);
  });

  afterAll(function(done) {
    this.server.close(done);
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  test('Inserts StackOverflow results into div', function () {
    var event_stackbar = new EventStackOverflowBar;
    assert.equal(event_stackbar.check(1),1);
  })
});
