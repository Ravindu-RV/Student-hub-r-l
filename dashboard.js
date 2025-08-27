// Load user data from localStorage
const user = JSON.parse(localStorage.getItem("loggedInUser"));

// If not logged in, redirect to login
if (!user) {
  window.location.href = "index.html";
}

// Show username in sidebar & main
document.getElementById("usernameDisplay").textContent = user.username;
document.getElementById("mainUsername").textContent = user.username;

// Optional: set profile pic (default if none uploaded)
if (user.profilePic) {
  document.getElementById("profilePic").src = user.profilePic;
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
});
