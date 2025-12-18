import { USERS_BASE_URL } from './info.js';
import { showModal } from './modal.js';

const form = document.querySelector('#frmSignup');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const repeatPassword = form.repeatPassword.value.trim();

    if (password !== repeatPassword) {
        showModal('Error', 'Passwords must match');
        return;
    }

    try {
        const newUser = { email, password };

        const response = await fetch(`${USERS_BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) throw new Error('Failed to sign up');

        showModal('Success', 'You have signed up successfully!');
        form.reset();
    } catch (error) {
        console.error(error);
        showModal('Error', 'Something went wrong. Please try again.');
    }
});


// import { USERS_BASE_URL } from './info.js';
// import { showModal } from './modal.js';

// document.querySelector('#frmSignup').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = e.target.email.value.trim();
//     const password = e.target.password.value.trim();
//     const repeatPassword = e.target.repeatPassword.value.trim();

//     if (repeatPassword !== password){
//         showModal('Error', 'Passwords must match')
//         return;
//     }
    
//     const newUser = {
//         email: email,
//         password: password
//     }

//     fetch(`${USERS_BASE_URL}/users`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(newUser)
//     })
//     .then(response => response.json())
//     .then(() => {
//         showModal('Signed up,', 'you did it')
//         e.target.reset()
//     })
//     .catch(error => {
//         showModal('Error', 'Something went wrong')
//         console.log(error);
//     })

// })
