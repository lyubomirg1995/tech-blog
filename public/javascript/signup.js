async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
  
        // check the response status
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);