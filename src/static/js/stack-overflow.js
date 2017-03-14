// window.onload(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var d = document;
    var newDiv = d.createElement("div");
    var newContent = d.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    var currentDiv = d.getElementById("appbar");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);
  })
// });
