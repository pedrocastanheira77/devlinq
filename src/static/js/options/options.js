function saveOptions() {
  var stackOverflowResults = document.getElementById('stackOverflowResults').value;
  chrome.storage.local.set({"stackOverflowResults": stackOverflowResults});
  var messageConfirmation = document.getElementById('saveConfirmation');
  messageConfirmation.innerHTML = "Saved successfully!";
  setTimeout(function() {
    messageConfirmation.innerHTML = '';
  }, 1000);
}

function loadOptions() {
  var stackOverflowStoredResults;
  chrome.storage.local.get(function(result){
    stackOverflowStoredResults = result.stackOverflowResults;
  });
  setTimeout(function(){
    if (stackOverflowStoredResults) {
      var currentValue = stackOverflowStoredResults;
    } else {
      var currentValue = "5";
    }
    var stackOverflowResultsOption = document.querySelector('option[value="' + currentValue + '"]');
    stackOverflowResultsOption.selected = "selected"
  }, 500);
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);
