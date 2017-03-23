var expect = require('chai').expect;
var ChromeExtensions = require('../lib/ChromeExtensionsInBar.js');
var language;

describe('ChromeExtensions', function(){
  beforeEach(function(){
    language = new ChromeExtensions;
  });

  describe("#generateOfficialDocsURL", function(){
    it('returns correct url for no given topic', function(){
      var version = "Coming soon!";
      var topic = "Choose a topic";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      expect(resultURL).to.equal(language.baseUrl);
    });

    it('returns correct url for given topic', function(){
      var version = "N/A";
      var topic = "alarms";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      var expectedURL = "https://developer.chrome.com/extensions/alarms";
      expect(resultURL).to.equal(expectedURL);
    });
  });

  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("Chrome Extensions");
    });
  });
});
