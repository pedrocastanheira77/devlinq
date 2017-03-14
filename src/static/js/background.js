document.addEventListener('DOMContentLoaded', function() {

  var newDiv = document.createElement("div");
  newDiv.id = "official";
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);

  var currentDiv = document.getElementById("viewport");
  console.log(currentDiv)

  document.body.insertBefore(newDiv, currentDiv);

  console.log("Are you there?")
})
