import { USERS_BASE_URL } from './info.js';
import { LOCAL_STORAGE_USER_EMAIL } from './info.js';
import { showModal } from './modal.js';

document.querySelector('#loginFrm').addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`${USERS_BASE_URL}/users`)
        .then(res => res.json())
        .then(users => {
            const email = e.target.email.value.trim()
            const password = e.target.password.value.trim()

            let loginSuccess = false;
            users.forEach(user => {
                if (!loginSuccess) {
                    if (user.email === email && user.password == password) {
                        localStorage.setItem(LOCAL_STORAGE_USER_EMAIL, email);
                        location.href = "index.html";

                        loginSuccess = true;
                    }
                }
            });

            if (!loginSuccess) {
                showModal('validation error', 'incorrect crendentials')
            }
        })
        .catch(error => console.log(error))
})

