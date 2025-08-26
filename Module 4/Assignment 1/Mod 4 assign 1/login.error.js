$("#loginBtn").click(function () {
  let user = $("#username").val();
  let pass = $("#password").val();

  if (user !== "admin" || pass !== "1234") {
    $("#errorMessage").text("Invalid login. Please try again.").show();
    $("#username, #password").val(""); // clear fields
  }
});
