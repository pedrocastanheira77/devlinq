function StackOverflowOutputItem(title, url, viewCount, aswerCount, score){
  this._title = title;
  this._url = url;
  this._viewCount = viewCount;
  this._aswerCount = aswerCount;
  this._score = score;
}

StackOverflowOutputItem.prototype.getTitle = function () {
  return this._title;
};

StackOverflowOutputItem.prototype.getUrl = function () {
  return this._url;
};

StackOverflowOutputItem.prototype.getViewCount = function () {
  return this._viewCount;
};

StackOverflowOutputItem.prototype.getAnswerCount = function () {
  return this._aswerCount;
};

StackOverflowOutputItem.prototype.getScore = function () {
  return this._score;
};

module.exports = StackOverflowOutputItem;
