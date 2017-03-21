function loadOptions(resultsPromise, theDocument) {
  resultsPromise.then(function(stackOverflowStoredResults){
    var currentValue = stackOverflowStoredResults ? stackOverflowStoredResults : "5";
    var stackOverflowResultsOption = theDocument.querySelector('option[value="' + currentValue + '"]');
    stackOverflowResultsOption.selected = "selected";
    return theDocument;
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

module.exports = {
  messageConfirmation,
  loadOptions,
  saveOptions
}
