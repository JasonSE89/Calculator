function calcButton() {
  $(".btn").on("click", function() {
    if ($(this).text() === "=") {
      $("#text").text(eval($("#text").text()));
    } else if ($(this).text() === "c") {
      $("#text").text("");
    } else {
      $("#text").append($(this).text());
    }
  });
}

$(document).on("click", calcButton());
