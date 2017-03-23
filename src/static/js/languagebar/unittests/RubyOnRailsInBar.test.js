var expect = require('chai').expect;
var RubyonRails = require('../lib/RubyonRailsInBar.js');
var language;

describe('RubyonRails', function(){
  beforeEach(function(){
    language = new RubyonRails;
  });

  describe("#generateOfficialDocsURL", function(){
    it('returns correct url for no given topic', function(){
      var version = "Coming soon!";
      var topic = "Choose a topic";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      expect(resultURL).to.equal(language.baseUrl);
    });

    it('returns correct url for given topic', function(){
      var version = "Comming soon!";
      var topic = "add()";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      var expectedURL = "http://rubyonrails.orgadd()";
      expect(resultURL).to.equal(expectedURL);
    });
  });

  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("Ruby on Rails");
    });
  });
});
