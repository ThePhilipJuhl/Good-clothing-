import { USERS_BASE_URL } from './info.js';

document.querySelector('#frmSignup').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const username = e.target.username.value.trim();
    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const password = e.target.password.value.trim();
    const repeatPassword = e.target.repeatPassword.value.trim();

    const newUser = {
        email: email,
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password
    }

    fetch(`${USERS_BASE_URL}/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(() => {
        e.target.reset()
    })
    .catch(error => {
        console.log(error);
    })

})