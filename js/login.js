import { USERS_BASE_URL } from './info.js';
import { SESSION_STORAGE_USER_EMAIL } from './info.js';
import { showModal } from './modal.js';

document.querySelector('#loginFrm').addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`${USERS_BASE_URL}/users`)
    .then(response => response.json())
    .then(data => {
        const email = e.target.email.value.trim()
        const password = e.target.password.value.trim()

        let found = false;
        data.forEach(user => {
            if (!found) {
                if (user.email === email && user.password == password) {
                    localStorage.setItem(LOCAL_STORAGE_USER_EMAIL, email);
                    location.href = 'login.htm';

                    found = true;
                }
            }
        });

        if (!found){
            showModal('validation error', 'incorrect credentials');
        }
    })
    .catch(error => console.log(error))
})

