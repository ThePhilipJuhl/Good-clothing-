import { USERS_BASE_URL, LOCAL_STORAGE_USER_EMAIL } from './info.js';
import { showModal } from './modal.js';

document.querySelector('#loginFrm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = e.target.email.value.trim()
    const passwordInput = e.target.password.value.trim();

    try {
        const response = await fetch(`${USERS_BASE_URL}/users`);
        const users = await response.json();

        const user = users.find(u => u.email === emailInput && u.password === passwordInput);

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


