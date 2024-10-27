const loginFormHandler = async (event) => {
  event.preventDefault();

  // Log to see if the event handler is firing
  console.log('Login form handler triggered');

  // Collect values from the login form
  const name = document.querySelector('#name-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    console.log('Login form values:', name, password); 

    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login error:', errorData);
      alert(errorData.message || 'An error occurred during login');
    } else {
      document.location.replace('/');
    }
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  // Log to see if the event handler is firing
  console.log('Signup form handler triggered');

  const name = document.querySelector('#name-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && password) {
    console.log('Signup form values:', name, password);

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Error Response: ', errorText);  // This will print server's error message
      alert(response.statusText);
    }

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  } else {
    console.log('Name or password missing');
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);