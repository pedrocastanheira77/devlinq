var expect = require('chai').expect;
var stub = require('sinon').stub;
stub(document)
document.returns("HELLO")
var messageConfirmation = require('../options.js').messageConfirmation;

describe('Options', function(){
  describe('#messageConfirmation', function(){
    it('Sets message confirmation innerHTML', function(){
      var ourDocument = ""
      messageConfirmation(ourDocument)
    });
  });
});
