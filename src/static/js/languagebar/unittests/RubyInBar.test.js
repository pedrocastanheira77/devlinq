var expect = require('chai').expect;
var Ruby = require('../lib/RubyInBar.js');
var language;

describe('Ruby', function(){
  beforeEach(function(){
    language = new Ruby;
  });

  describe("#generateOfficialDocsURL", function(){
    it('returns correct url for no given topic', function(){
      var version = "2.1.3";
      var topic = "Array";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      expect(resultURL).to.equal(language.baseUrl+'2.1.3/Array.html');
    });

    it('returns correct url for given topic', function(){
      var version = "2.1.3";
      var topic = "Array";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      var expectedURL = "https://ruby-doc.org/core-2.1.3/Array.html";
      expect(resultURL).to.equal(expectedURL);
    });
  });

  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("Ruby-doc");
    });
  });
});
