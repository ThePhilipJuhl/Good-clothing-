import { SESSION_STORAGE_USER_EMAIL } from './info.js';

const email = sessionStorage.getItem(SESSION_STORAGE_USER_EMAIL);

if (email !== null) {
    document.querySelector('#user').innerText = email;
    document.querySelector('#logout').style.display = "block";  // show logout
    document.querySelector('#login').style.display = "none";    // hide login
} else {
    document.querySelector('#user').innerText = '';
    document.querySelector('#logout').style.display = "none";   // hide logout
}

