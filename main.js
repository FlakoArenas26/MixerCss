$("a").click(function () {
  $(this).toggleClass("active");
});

$(".master-btn").click(function () {
  $(".volume, .volume2").toggleClass("dim");
});

$(".master").change(function () {
  var Width = $(this).val();
  $(".volume").val(Width);
});
