$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var subject =$ ("#subject");
    var learn = $("#learn");
    var company = $("#company");
    var languge = $("#languge");
    var logic = $("#ligic");


$(".name").text(name);

    if (subject === "math" && logic === "back-end" ||learn === "programmingLanguge" && company === "established") {
      $("#C#/.NET").show();
    }
    else if (subject === "art" && logic === "front-end" || learn === "web-pages" && languge === "CSS/Design") {
      $("#CSS/Design").show();
    }
    else if (learn === "web-application" && logic === "back-end" || company === "start-up" &&  languge === "Ruby/Rails") {
      $("#Ruby/Rails").show();
    }
  });
});
