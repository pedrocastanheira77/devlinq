var expect = require('chai').expect;
var assert = require('chai').assert;
var changeClickButtonStatus = require('../BackgroundFunctions.js').changeClickButtonStatus;
var chrome = require('sinon-chrome');
var api = require('then-chrome');
var spies = require('chai-spies')
require('assert-extended');
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised');
var stub = require('sinon').stub
var pageRefresher = require('../BackgroundFunctions.js').pageRefresher;
var runSpinner = require('../BackgroundFunctions.js').runSpinner;
var runContentScripts = require('../BackgroundFunctions.js').runContentScripts;
var triggerContentsScripts = require('../BackgroundFunctions.js').triggerContentsScripts;
var pageCleaner = require('../BackgroundFunctions.js').pageCleaner;
var jsdom = require('jsdom').jsdom;
chai.use(spies);


describe('BackgroundFunctions', function(){
  beforeEach(function () {
      global.chrome = chrome;
  });

  describe('#changeClickButtonStatus', function(){
    it('if current status is "on" returns "off"', function(){
      expect(changeClickButtonStatus("on", chrome)).to.equal("off");
    });
    it('if current status is "off" returns "on"', function(){
      expect(changeClickButtonStatus("off", chrome)).to.equal("on");
    });
  });

  describe('pageRefresher', function(){
    it('executes script with correct arguments', function(done){
      pageRefresher(chrome);
      assert.ok(chrome.tabs.query.called, 'function was called');
      chrome.tabs.query.yields([1,2]);
      assert.ok(chrome.tabs.update.notCalled, 'function was not called');
      done();
    });
  });

  describe('runSpinner', function(){
    it('executes script with correct arguments', function(done){
      runSpinner(chrome);
      assert.ok(chrome.tabs.query.called, 'function was called');
      assert.ok(chrome.tabs.executeScript.called, 'function was called');
      assert.ok(chrome.tabs.executeScript.called, 'function was called');
      done();
    });
  });

  describe('runContentScripts', function(){
    it('executes script with correct arguments', function(done){
      runContentScripts(chrome);
      assert.ok(chrome.tabs.query.called, 'function was called');
      assert.ok(chrome.tabs.insertCSS.called, 'function was called');
      assert.ok(chrome.tabs.executeScript.called, 'function was called');
      done();
    });
  });

  describe('pageCleaner', function(){
    it('executes script with correct arguments', function(done){
      pageCleaner(chrome);
      assert.ok(chrome.tabs.query.called, 'function was called');
      assert.ok(chrome.tabs.executeScript.called, 'function was not called');
      done();
    });
  });

  describe('triggerContentsScripts', function(){
    it('calls relevant functions', function(){
      var tab =  "hello I'm a tab";
      var clickButtonStatus = "on";
      var div = jsdom('<div id="change"></div>')
      div.getElementById('change').status = "complete"
      triggerContentsScripts(1,div, tab, chrome, "on");
    });
  });
});
