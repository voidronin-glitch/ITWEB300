document.getElementById("loginBtn").addEventListener("click", login);

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("greeting").innerText = "Hello " + user;
    document.getElementById("greeting").style.display = "block";
    document.getElementById("errorMsg").innerText = "";
  } else {
    showError();
  }
}

function showError() {
  document.getElementById("errorMsg").innerText = "❌ Incorrect username or password.";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
