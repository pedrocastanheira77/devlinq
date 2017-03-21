function Javascript() {
  this.name = "Javascript";
  this.baseUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/";
  this.offDocs = "Mozilla (MDN)";
  this.versions = ["ECMAScript5.1",
                    "ECMAScript6",
                    "ECMAScript7"];
  this.topics = ["Array",
                  "ArrayBuffer",
                  "AsyncFunction",
                  "Atomics",
                  "Boolean",
                  "DataView",
                  "Date",
                  "Error",
                  "EvalError",
                  "Float32Array",
                  "Float64Array",
                  "Function",
                  "Generator",
                  "GeneratorFunction",
                  "Infinity",
                  "Int16Array",
                  "Int32Array",
                  "Int8Array",
                  "InternalError",
                  "Intl",
                  "Intl.Collator",
                  "Intl.DateTimeFormat",
                  "Intl.NumberFormat",
                  "Iterator",
                  "JSON",
                  "Map",
                  "Math",
                  "NaN",
                  "Number",
                  "Object",
                  "ParallelArray",
                  "Promise",
                  "Proxy",
                  "RangeError",
                  "ReferenceError",
                  "Reflect",
                  "RegExp"];
}

Javascript.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Intl.", "");
    return this.baseUrl + topic;
  }
};


Javascript.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = Javascript;
