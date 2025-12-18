import { LOCAL_STORAGE_USER_EMAIL } from './info.js';

export function logout() {
    document.querySelector('#btnLogout').addEventListener('click', () => {
        localStorage.removeItem(LOCAL_STORAGE_USER_EMAIL);
        location.reload();
    }); 
}
