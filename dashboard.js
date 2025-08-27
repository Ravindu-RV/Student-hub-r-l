// Load current user from localStorage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const profilePic = document.getElementById('profilePic');
const username = document.getElementById('username');
const logout = document.getElementById('logout');

if(currentUser) {
  profilePic.src = currentUser.profilePic;
  username.textContent = currentUser.username;
} else {
  // If no user logged in, redirect to login page
  window.location.href = "index.html";
}

// Logout
logout.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  window.location.href = "https://ravindu-rv.github.io/STUDENT-HUB/";
});
