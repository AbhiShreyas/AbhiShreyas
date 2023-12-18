// Get references to the elements
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');

// Add event listener for the Save button
saveBtn.addEventListener('click', () => {
  // Validate the inputs before saving
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Regular expressions for validation
  const usernamePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (username === '' || email === '' || password === '') {
    presentAlert("Can't Proceed. Kindly enter all the required details.");
  } else if (!username.match(usernamePattern)) {
    presentAlert("Username must contain only letters, no numbers or symbols.");
  } else if (!email.match(emailPattern)) {
    presentAlert("Invalid email format.");
  } else if (password.length < 6 || password.length > 8) {
    presentAlert("Password must contain minimum 6 characters and maximum 8 characters.");
  } else {
    // Save the data or proceed with further actions here
    presentAlert("Data saved successfully!");

    // Redirect to the menu.html page
    window.location.href = 'file:///D:/MCA%20Project/CODE%20PART/Shreyz%20Basket/MENU/menu.html';
  }
});


// Function to present ion-alert
function presentAlert(message) {
  const alert = document.createElement('ion-alert');
  alert.header = 'Alert';
  alert.subHeader = 'Important message';
  alert.message = message;
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  return alert.present();
}
clearBtn.addEventListener('click', () => {
  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
});