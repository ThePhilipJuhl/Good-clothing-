import { USERS_BASE_URL } from './info.js';
import { showModal } from './modal.js';

document.querySelector('#frmSignup').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const repeatPassword = e.target.repeatPassword.value.trim();

    if (repeatPassword !== password){
        showModal('Error', 'Passwords must match')
        return;
    }
    
    const newUser = {
        email: email,
        password: password
    }

    fetch(`${USERS_BASE_URL}/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(() => {
        showModal('Signed up,', 'you did it')
        e.target.reset()
    })
    .catch(error => {
        showModal('Error', 'Somethign went wrong')
        console.log(error);
    })

})