function StackOverflowOutputItem(title, url){
  this._title = title;
  this._url = url;
}

StackOverflowOutputItem.prototype.title = function () {
  return this._title;
};

StackOverflowOutputItem.prototype.url = function () {
  return this._url;
};
