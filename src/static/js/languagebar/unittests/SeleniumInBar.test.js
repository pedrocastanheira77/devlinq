var expect = require('chai').expect;
var Selenium = require('../lib/SeleniumInBar.js');
var language;

describe('Selenium', function(){
  beforeEach(function(){
    language = new Selenium();
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
      var expectedURL = "http://www.seleniumhq.org/add()";
      expect(resultURL).to.equal(expectedURL);
    });
  });

  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("Selenium");
    });
  });
});
