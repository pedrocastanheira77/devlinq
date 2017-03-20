var expect = require('chai').expect;
var Ruby = require('../lib/RubyInBar.js')

describe('Ruby', function(){
  it("#generateOfficialDocsURL", function(){
    var language = new Ruby;
    var version = "2.1.3";
    var topic = "Array";
    var resultURL = language.generateOfficialDocsURL(version, topic)
    var expectedURL = "https://ruby-doc.org/core-2.1.3/Array.html";
    expect(resultURL).to.equal(expectedURL);
  });
});
