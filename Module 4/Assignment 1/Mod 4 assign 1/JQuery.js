$("#loginBtn").click(function () {
  let user = $("#username").val();
  $("#greeting").text("Hello " + user).show();
});
