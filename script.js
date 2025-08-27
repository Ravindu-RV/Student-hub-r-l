// Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginContainer = document.getElementById('loginContainer');
const registerContainer = document.getElementById('registerContainer');
const loginMessage = document.getElementById('loginMessage');
const regMessage = document.getElementById('regMessage');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Password toggle elements
const toggleLoginPassword = document.getElementById('toggleLoginPassword');
const toggleRegPassword = document.getElementById('toggleRegPassword');
const toggleRegConfirmPassword = document.getElementById('toggleRegConfirmPassword');

const loginPassword = document.getElementById('loginPassword');
const regPassword = document.getElementById('regPassword');
const regConfirmPassword = document.getElementById('regConfirmPassword');

// Switch forms
showRegister.addEventListener('click', () => {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'block';
  loginMessage.textContent = '';
});

showLogin.addEventListener('click', () => {
  registerContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  regMessage.textContent = '';
});

// Toggle password visibility
toggleLoginPassword.addEventListener('click', () => {
  loginPassword.type = loginPassword.type === 'password' ? 'text' : 'password';
});

toggleRegPassword.addEventListener('click', () => {
  regPassword.type = regPassword.type === 'password' ? 'text' : 'password';
});

toggleRegConfirmPassword.addEventListener('click', () => {
  regConfirmPassword.type = regConfirmPassword.type === 'password' ? 'text' : 'password';
});

// Registration
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('regUsername').value.trim();
  const password = regPassword.value;
  const confirmPassword = regConfirmPassword.value;

  if(password !== confirmPassword) {
    regMessage.style.color = 'red';
    regMessage.textContent = "Passwords do not match!";
    return;
  }

  if(username && password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if(users.find(u => u.username === username)) {
      regMessage.style.color = 'red';
      regMessage.textContent = "Username already exists!";
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    regMessage.style.color = 'green';
    regMessage.textContent = "Registration successful! Redirecting...";
    registerForm.reset();

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  }
});

// Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = loginPassword.value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);

  if(user) {
    loginMessage.style.color = 'green';
    loginMessage.textContent = "Login successful! Redirecting...";
    loginForm.reset();

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    loginMessage.style.color = 'red';
    loginMessage.textContent = "Invalid username or password!";
  }
});
