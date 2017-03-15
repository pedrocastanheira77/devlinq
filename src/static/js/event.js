setTimeout(function() {
  $(document).ready(function(){

    $("#submitSearchButton").click(function() {
      alert("Hello");
    });

    $("#languageDropdownList").change(function(){
      var val = $("#languageDropdownList option:selected").text();
    });

  });
}, 2000);
