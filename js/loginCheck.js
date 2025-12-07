import { SESSION_STORAGE_USER_EMAIL } from './info.js';

export function loginCheck() {
    const email = localStorage.getItem(LOCAL_STORAGE_USER_EMAIL);
    const user = document.querySelector('#user');

    if (email !== null) {
        user.innerText = email;
        document.querySelector("#login").classList.add('hidden')
        document.querySelector("#signup").classList.add('hidden')
    } else {
        user.innerText = '';
        document.querySelector("#login").classList.remove('hidden')
        document.querySelector("#signup").classList.remove('hidden')
        document.querySelector("#logout").classList.add('hidden')
    }
}

