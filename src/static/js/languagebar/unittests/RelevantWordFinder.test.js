var assert = require('chai').assert;
var spies = require('chai-spies');
var chai = require('chai');
chai.use(spies);
var stub = require('sinon').stub;
var jsdom = require('jsdom');
var Language = require('../LanguagesBar.js');
var haveLanguage = require('../RelevantWordFinder.js').haveLanguage;
var haveVersion = require('../RelevantWordFinder.js').haveVersion;
var haveTopic = require('../RelevantWordFinder.js').haveTopic;
var arrayToLowerCase = require('../RelevantWordFinder.js').arrayToLowerCase;
var isStringInArray = require('../RelevantWordFinder.js').isStringInArray;
var splitStringIntoArray = require('../RelevantWordFinder.js').splitStringIntoArray;
var getInfoFromSearchBar = require('../RelevantWordFinder.js').getInfoFromSearchBar;
var compareSearchBarInfo = require('../RelevantWordFinder.js').compareSearchBarInfo;
var ourDocument;

describe('ReleventWordFinder', function(){
  var lang = new Language();

  beforeEach(function(){
    ourDocument = jsdom.jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                '</body>');
    });

  describe('#haveLanguage', function(){
    var STRING = "jaVASCRIPT";
    it('checks if language is in our library', function(){
      assert.equal(haveLanguage(STRING, lang), 6);
    });
    it('check is not case sensitive', function(){
      assert.equal(haveLanguage(STRING, lang), 6);
    });
    it('pluralize and unpluralize', function(){
      assert.equal(haveLanguage(STRING, lang), 6);
    });
  });

  describe('#haveVersion', function(){
    var VERSION = "ecmascript5.1";
    it('checks if version is in our library', function(){
      assert.equal(haveVersion(VERSION, lang.javascript), 0);
    });
  });

  describe('#haveTopic', function(){
    var TOPIC = "atomics";
    it('checks if topic is in our library', function(){
      assert.equal(haveTopic(TOPIC, lang.javascript), 3);
    });
    it('pluralize and unpluralize', function(){
      assert.equal(haveTopic(TOPIC, lang.javascript), 3);
    });
  });

  describe('#splitStringIntoArray', function(){
    it('splits string into array by words', function(){
      var STRING  = "ruby version array";
      assert.deepEqual(splitStringIntoArray(STRING), [ 'ruby', 'version', 'array']);
    });
    it('removes all symbols other than full stops', function(){
      var STRING  = "I dfdpsojfqwf *&^&@%£@ 2321 dsfsdf. 4343 ,efw e";
      assert.deepEqual(splitStringIntoArray(STRING), [ 'I', 'dfdpsojfqwf', '£', '2321', 'dsfsdf.', '4343', 'efw', 'e' ]);
    });
  });

  describe('#getInfoFromSearchBar', function(){
    it('finds the searched string', function(){
      assert.deepEqual(getInfoFromSearchBar(ourDocument), [ 'ruby', 'array']);
    });
  });

  describe('#compareSearchBarInfo', function(){
    it('returns array of language, version and topic', function(){
      assert.deepEqual(splitStringIntoArray('ruby 2.4.0 array'), [ 'ruby', '2.4.0', 'array']);
    });
  });

  describe('#arrayToLowerCase', function(){
    it('turns all elements in array to lower case', function(){
      assert.deepEqual(arrayToLowerCase(['RUBY', 'RUby', 'ruby']), [ 'ruby', 'ruby', 'ruby']);
    });
  });

  describe('#isStringInArray', function(){
    it('checks if a string is in an array', function(){
      assert.deepEqual(isStringInArray('ruby', ['ruby', 'javascript']), 0);
      assert.deepEqual(isStringInArray('rub', ['ruby', 'javascript']), -1);
    });
  });


});
