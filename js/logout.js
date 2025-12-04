import { SESSION_STORAGE_USER_EMAIL } from './info.js';
import { showModal } from './modal.js';


export function logout() {
    document.querySelector('#btnLogout').addEventListener('click', () => {
        sessionStorage.removeItem(SESSION_STORAGE_USER_EMAIL);
        location.reload();
    }); 
}
