var expect = require('chai').expect;
var JQuery = require('../lib/JqueryInBar.js')

describe('JQuery', function(){
  it("#generateOfficialDocsURL", function(){
    var language = new JQuery;
    var version = "V1";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic)
    var expectedURL = "http://api.jquery.com/add";
    expect(resultURL).to.equal(expectedURL);
  });
});
