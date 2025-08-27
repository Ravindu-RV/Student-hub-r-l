// Load user data
const user = JSON.parse(localStorage.getItem("loggedInUser"));

// If not logged in, go back to login
if (!user) {
  window.location.href = "index.html"; // 👈 this caused instant redirect
}

// Show username
document.getElementById("usernameDisplay").textContent = user.username;
document.getElementById("mainUsername").textContent = user.username;
