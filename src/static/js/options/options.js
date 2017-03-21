var resultsPromise = new Promise(function(resolve, reject){
  chrome.storage.local.get(function(result){
    resolve(result.stackOverflowResults);
  });
});

function loadOptions(resultsPromise) {
  resultsPromise.then(function(stackOverflowStoredResults){
    var currentValue = stackOverflowStoredResults ? stackOverflowStoredResults : "5";
    var stackOverflowResultsOption = document.querySelector('option[value="' + currentValue + '"]');
    stackOverflowResultsOption.selected = "selected";
  });
}

function saveOptions() {
  var stackOverflowResults = document.getElementById('stackOverflowResults').value;
  chrome.storage.local.set({"stackOverflowResults": stackOverflowResults});
  messageConfirmation();
}

function messageConfirmation(){
  var messageConfirmation = document.getElementById('saveConfirmation');
  messageConfirmation.innerHTML = "Saved successfully!";
  setTimeout(function() {
    messageConfirmation.innerHTML = '';
  }, 1000);
}

document.addEventListener('DOMContentLoaded', loadOptions(resultsPromise));
document.getElementById('save').addEventListener('click', saveOptions);

module.exports = {
  messageConfirmation
}
