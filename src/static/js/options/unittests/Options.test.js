var messageConfirmation = require('../OptionsModules.js').messageConfirmation;
var loadOptions = require('../OptionsModules.js').loadOptions;
var saveOptions = require('../OptionsModules.js').saveOptions;
var expect = require('chai').expect;
var assert = require('chai').assert;
var stub = require('sinon').stub;
var jsdom = require('jsdom');
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var ourDocument;
var ourChrome = require('sinon-chrome');

describe('Options', function() {
  beforeEach(function(){
    ourDocument = jsdom.jsdom ('<body>'+
                                      'Number of Stack Overflow:'+
                                      '<select id="stackOverflowResults">'+
                                       '<option value="3">3</option>' +
                                       '<option value="5">5</option>' +
                                       '<option value="10">10</option>' +
                                       '<option value="15">15</option>' +
                                       '<option value="20">20</option>' +
                                      '</select>' +
                                      '<div id="status">' +
                                        '<button id="save">Save</button>' +
                                        '<span id="saveConfirmation"></span>' +
                                      '</div>' +
                                    '</body>');
                                    });

  describe('#messageConfirmation', function() {
    it('Sets message confirmation innerHTML', function(){
      messageConfirmation(ourDocument);
      expect(ourDocument.getElementById("saveConfirmation").innerHTML).to.equal("Saved successfully!");
    });

    it('After 1s the message is empty', function(done){
      messageConfirmation(ourDocument);
      setTimeout(function(){
        expect(ourDocument.getElementById("saveConfirmation").innerHTML).to.equal("");
        done();
      }, 2000);
    });
  });

  describe('#loadOptions', function() {
    it('loads saved number of stack overflow results into chrome storage', function(done) {
      var ourPromise = new Promise(function(resolve, reject){
        resolve("10");
      });
      loadOptions(ourPromise, ourDocument);
      setTimeout(function(){
        var select = ourDocument.querySelector('#stackOverflowResults');
        expect(select.options[ select.selectedIndex ].value).to.equal("10");
        done();
      }, 500);
    });

});

  describe('#saveOptions', function() {
    it('Saves chosen number of stack overflow results', function() {
      saveOptions(ourDocument, ourChrome);
      assert.ok(ourChrome.storage.local.set.calledOnce);
    });
  });
});
