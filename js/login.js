import { USERS_BASE_URL, LOCAL_STORAGE_USER_EMAIL } from './info.js';
import { showModal } from './modal.js';

document.querySelector('#loginFrm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = e.target.email.value.trim().toLowerCase();
    const passwordInput = e.target.password.value.trim();

    try {
        const res = await fetch(`${USERS_BASE_URL}/users`);
        const users = await res.json();

        const user = users.find(u => u.email.toLowerCase() === emailInput && u.password === passwordInput);

        if (user) {
            localStorage.setItem(LOCAL_STORAGE_USER_EMAIL, emailInput);
            location.href = "index.html";
        } else {
            showModal('Validation error', 'Incorrect credentials');
        }
    } catch (error) {
        console.error(error);
        showModal('Error', 'Something went wrong. Please try again.');
    }
});


// import { USERS_BASE_URL } from './info.js';
// import { LOCAL_STORAGE_USER_EMAIL } from './info.js';
// import { showModal } from './modal.js';

// document.querySelector('#loginFrm').addEventListener('submit', (e) => {
//     e.preventDefault();

//     fetch(`${USERS_BASE_URL}/users`)
//         .then(res => res.json())
//         .then(users => {
//             const email = e.target.email.value.trim()
//             const password = e.target.password.value.trim()

//             let loginSuccess = false;
//             users.forEach(user => {
//                 if (!loginSuccess) {
//                     if (user.email === email && user.password == password) {
//                         localStorage.setItem(LOCAL_STORAGE_USER_EMAIL, email);
//                         location.href = "index.html";

//                         loginSuccess = true;
//                     }
//                 }
//             });

//             if (!loginSuccess) {
//                 showModal('validation error', 'incorrect credentials')
//             }
//         })
//         .catch(error => console.log(error))
// })
