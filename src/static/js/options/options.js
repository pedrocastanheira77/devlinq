var d = document;

var resultsPromise = new Promise(function(resolve, reject){
  chrome.storage.local.get(function(result){
    resolve(result.stackOverflowResults);
  });
});

function loadOptions(resultsPromise, theDocument) {
  resultsPromise.then(function(stackOverflowStoredResults){
    var currentValue = stackOverflowStoredResults ? stackOverflowStoredResults : "5";
    var stackOverflowResultsOption = theDocument.querySelector('option[value="' + currentValue + '"]');
    stackOverflowResultsOption.selected = "selected";
  });
}

function saveOptions(theDocument) {
  var stackOverflowResults = theDocument.getElementById('stackOverflowResults').value;
  chrome.storage.local.set({"stackOverflowResults": stackOverflowResults});
  messageConfirmation(theDocument);
}

function messageConfirmation(theDocument){
  var messageConfirmation = theDocument.getElementById('saveConfirmation');
  messageConfirmation.innerHTML = "Saved successfully!";
  setTimeout(function() {
    messageConfirmation.innerHTML = '';
  }, 1000);
}

d.addEventListener('DOMContentLoaded', function(){loadOptions(resultsPromise, d)});
d.getElementById('save').addEventListener('click', function(){saveOptions(d)});

module.exports = {
  messageConfirmation
};
