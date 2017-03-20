var expect = require('chai').expect;
var Javascript = require('../lib/JavascriptInBar.js')

describe('Javascript', function(){
  it("#generateOfficialDocsURL", function(){
    var language = new Javascript;
    var version = "ECMAScript6";
    var topic = "Array";
    var resultURL = language.generateOfficialDocsURL(version, topic)
    var expectedURL = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array";
    expect(resultURL).to.equal(expectedURL);
  });
});
