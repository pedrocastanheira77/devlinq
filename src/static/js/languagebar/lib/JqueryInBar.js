function JQuery() {
  this.name = "JQuery",
  this.baseUrl = "http://api.jquery.com/",
  this.offDocs = "API JQuery",
  this.versions = [
                    "3.1",
                    "3.0",
                    "2.2",
                    "2.1",
                    "2.0",
                    "1.12",
                    "1.11",
                    "1.10",
                    "1.9",
                    "1.8",
                    "1.7",
                    "1.6",
                    "1.5",
                    "1.4",
                    "1.3",
                    "1.2",
                    "1.1",
                    "1.0"
                  ],
this.topics = [ "add()",
                "addBack()",
                "addClass()",
                "after()",
                "ajaxComplete()",
                "ajaxError()",
                "ajaxSend()",
                "ajaxStart()",
                "ajaxStop()",
                "ajaxSuccess()",
                "andSelf()",
                "animate()",
                "append()",
                "appendTo()",
                "attr()",
                "before()",
                "bind()",
                "blur()",
                "callbacks.add()",
                "callbacks.disable()",
                "callbacks.disabled()",
                "callbacks.empty()",
                "callbacks.fire()",
                "callbacks.fired()",
                "callbacks.fireWith()",
                "callbacks.has()",
                "callbacks.lock()",
                "callbacks.locked()",
                "callbacks.remove()",
                "change()",
                "children()",
                "clearQueue()",
                "click()",
                "clone()",
                "closest()",
                "contents()",
                "context",
                "contextmenu()",
                "css()",
                "data()",
                "dblclick()",
                "deferred.always()",
                "deferred.catch()",
                "deferred.done()",
                "deferred.fail()",
                "deferred.isRejected()",
                "deferred.isResolved()",
                "deferred.notify()",
                "deferred.notifyWith()",
                "deferred.pipe()",
                "deferred.progress()",
                "deferred.promise()",
                "deferred.reject()",
                "deferred.rejectWith()",
                "deferred.resolve()",
                "deferred.resolveWith()",
                "deferred.state()",
                "deferred.then()",
                "delay()",
                "delegate()",
                "dequeue()",
                "detach()",
                "die()",
                "each()",
                "empty()"
              ]
}

JQuery.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("()","")
    return this.baseUrl + topic;
  }
};


JQuery.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = JQuery;
