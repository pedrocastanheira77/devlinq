var expect = require('chai').expect;
var ChromeExtensions = require('../lib/ChromeExtensionsInBar.js');
var language;

describe('ChromeExtensions', function(){
  beforeEach(function(){
    language = new ChromeExtensions;
  });

  it("#generateOfficialDocsURL", function(){
    var version = "N/A";
    var topic = "alarms";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "https://developer.chrome.com/extensions/alarms";
    expect(resultURL).to.equal(expectedURL);
  });

  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Chrome Extensions");
  });
});
