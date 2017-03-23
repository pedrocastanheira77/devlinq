var expect = require('chai').expect;
var React = require('../lib/ReactInBar.js');
var language;

describe('React', function(){
  beforeEach(function(){
    language = new React();
  });

  it("#generateOfficialDocsURL", function(){
    var version = "Comming soon!";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "https://facebook.github.io/reactadd()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("React");
  });
});
