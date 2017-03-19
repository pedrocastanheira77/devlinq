function ReleventWordFinder(string){
  this._string = string;
  this._keyWords = ["ruby", "array", "hash", "javascript", "sort", "join"];
}

ReleventWordFinder.prototype.getString = function () {
  return this._string;
};

ReleventWordFinder.prototype.getKeyWords = function () {
  return this._keyWords;
};

ReleventWordFinder.prototype.findKeyWords = function () {
  var matches = []
  var words = this.getString().split(" ")
  for (var i = 0; i < words.length; i++) {
    if (this.getKeyWords().includes(words[i])) {
      matches.push(words[i])
    }
  };
  return matches;
};

module.exports = ReleventWordFinder;
