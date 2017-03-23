var expect = require('chai').expect;
var Cplusplus = require('../lib/CplusplusInBar.js');
var language;

describe('Cplusplus', function(){
  beforeEach(function(){
    language = new Cplusplus;
  });

  it("#generateOfficialDocsURL", function(){
    var version = "C++";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "https://isocpp.orgadd()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("C++");
  });
});
