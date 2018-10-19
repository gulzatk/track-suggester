$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var question1 =$ ("#question1");
    var question2 = $("#question2");
    var question3 = $("#question3");
    var question4 = $("#question4");
    var question5 = $("#question5");

$(".name").text(name);

    if (question1 === "programmingLanguage" && question2 === "back-end" && question3 === "1" && question4 === "established" && question5 === "c-sharp") {
      $("#c-sharp/.NET").show();
    }
    else if (question1 === "web-pages" && question2 === "front-end" && question3 === "3" && question4 === "start-up" && question5 === "CSS") {
      $("#CSS/Design").show();
    }
    else if (question1 === "web-application" && question2 === "back-end" && question3 === "2" &&  question4 === "established" && question5 === "Ruby") {
      $("#Ruby/Rails").show();
    } else {
      $(".anyone").show()
    }
  });
});
