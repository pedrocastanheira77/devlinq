var assert = require('chai').assert;
var Language = require('../LanguagesBar.js');
var haveLanguage = require('../RelevantWordFinder.js').haveLanguage;
var haveVersion = require('../RelevantWordFinder.js').haveVersion;
var haveTopic = require('../RelevantWordFinder.js').haveTopic;
var splitStringIntoArray = require('../RelevantWordFinder.js').splitStringIntoArray;


describe('ReleventWordFinder', function(){
  var lang = new Language();
  describe('#haveLanguage', function(){
    it('checks if language is in our library', function(){
      var string = "jaVASCRIPT";
      assert.equal(haveLanguage(string, lang), 1);
    })
    it('check is not case sensitive', function(){
      var string = "jaVASCRIPT";
      assert.equal(haveLanguage(string, lang), true);
    })
    it('pluralize and unpluralize', function(){
      var string = "jaVASCRIPTs";
      assert.equal(haveLanguage(string, lang), true);
    })
  })

  describe('#haveVersion', function(){
    it('checks if version is in our library', function(){
      var version = "ecmascript5.1";
      assert.equal(haveVersion(version, lang.javascript), 0);
    })
  })

  describe('#haveTopic', function(){
    it('checks if topic is in our library', function(){
      var topic = "atomics";
      assert.equal(haveTopic(topic, lang.javascript), 3);
    })
    it('pluralize and unpluralize', function(){
      var topic = "atomic";
      assert.equal(haveTopic(topic, lang.javascript), 3);
    })
  })

  describe('#splitStringIntoArray', function(){
    it('splits string into array by words', function(){
      var string  = "ruby version array";
      assert.deepEqual(splitStringIntoArray(string), [ 'ruby', 'version', 'array']);
    })
    it('removes all symbols other than full stops', function(){
      var string  = "I dfdpsojfqwf *&^&@%£@ 2321 dsfsdf. 4343 ,efw e";
      assert.deepEqual(splitStringIntoArray(string), [ 'I', 'dfdpsojfqwf', '£', '2321', 'dsfsdf.', '4343', 'efw', 'e' ]);
    })
  })
});
