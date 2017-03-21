var assert = require('chai').assert;
var Language = require('../LanguagesBar.js');
var haveLanguage = require('../RelevantWordFinder.js').haveLanguage;
var haveVersion = require('../RelevantWordFinder.js').haveVersion;
var haveTopic = require('../RelevantWordFinder.js').haveTopic;
var splitStringIntoArray = require('../RelevantWordFinder.js').splitStringIntoArray;

describe('ReleventWordFinder', function(){
  var lang = new Language();

  describe('#haveLanguage', function(){
    var STRING = "jaVASCRIPT";
    it('checks if language is in our library', function(){
      assert.equal(haveLanguage(STRING, lang), 1);
    });
    it('check is not case sensitive', function(){
      assert.equal(haveLanguage(STRING, lang), true);
    });
    it('pluralize and unpluralize', function(){
      assert.equal(haveLanguage(STRING, lang), true);
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
});
