$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var question1 =$ ("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();

    $(".name").text(name);

    if (question1 === "programmingLanguage" && question2 === "csharp" && question3 === "back-end") {
      $("#csharp").show();
      $("#css").hide();
      $("#ruby").hide();
    }
    else if (question1 === "web-pages" && question3 === "front-end") {
      $("#csharp").hide();
      $("#css").show();
      $("#ruby").hide();
    }
    else {
      $("#csharp").hide();
      $("#css").hide();
      $("#ruby").show();
    }
  });
});
