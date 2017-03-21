var expect = require('chai').expect;
var Javascript = require('../lib/JavascriptInBar.js');
var language;

describe('Javascript', function(){
  beforeEach(function(){
    language = new Javascript;
  });

  it("#generateOfficialDocsURL", function(){
    var version = "ECMAScript6";
    var topic = "Array";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array";
    expect(resultURL).to.equal(expectedURL);
  });

  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Mozilla (MDN)");
  });
});
