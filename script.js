function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

function createAccount() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    document.getElementById("message").innerText = "Fill in all fields";
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  document.getElementById("message").innerText = "Account created!";
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html"; // 🔥 go to next page
  } else {
    document.getElementById("message").innerText = "Invalid login";
  }
}