import { SESSION_STORAGE_USER_EMAIL } from './info.js';

const email = sessionStorage.getItem(SESSION_STORAGE_USER_EMAIL);

if (email !== null) {
    document.querySelector('#user').innerText = email;
} else {
    document.querySelector('#user').innerText = '';
}

