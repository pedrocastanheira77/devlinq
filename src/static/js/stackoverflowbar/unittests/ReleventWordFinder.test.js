var assert = require('chai').assert;

var ReleventWordFinder = require('../ReleventWordFinder.js')


describe('ReleventWordFinder', function(){

  describe('#getString', function(){

    it('returns the initialized string', function(){
      var rwf = new ReleventWordFinder("ruby array");
      assert.equal(rwf.getString(), "ruby array");
    })

  })

  describe('#getKeyWords', function(){

    it('returns the key words array', function(){
      var rwf = new ReleventWordFinder("ruby array car");
      assert.equal(rwf.getKeyWords(), ["ruby", "array", "hash"]);
    })

  })

  describe('#findKeyWords', function(){

    it('returns key words', function(){
      var rwf = new ReleventWordFinder("ruby car array");
      assert.deepEqual(rwf.findKeyWords(), ["ruby", "array"]);
    })

  })

});
