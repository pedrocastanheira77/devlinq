function StackOverflowOutputItem(title, url){
  this._title = title;
  this._url = url;
}

StackOverflowOutputItem.prototype.getTitle = function () {
  return this._title;
};

StackOverflowOutputItem.prototype.getUrl = function () {
  return this._url;
};

// module.exports = StackOverflowOutputItem;
