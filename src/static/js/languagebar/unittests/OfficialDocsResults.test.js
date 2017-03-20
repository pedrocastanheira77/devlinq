var expect = require('chai').expect;
var createLink = require('../OfficialDocsResults.js').createLink
var createOfficialDiv = require('../OfficialDocsResults.js').createOfficialDiv


describe('createLink', function(){
    it('returns a link', function(){
      expect(createLink().tagName).to.equal('A')
    });

    it('returns a link with id link', function(){
      expect(createLink().id).to.equal('link')
    });
});

describe("#createOfficialDiv", function(){
  it('returns a div', function(){
    expect(createOfficialDiv().tagName).to.equal('DIV')
  })

  it('returns a div with id official', function(){
    expect(createOfficialDiv().id).to.equal('official')
  });
});
