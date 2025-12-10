export const showModal = (header, text) => {
    const modal = document.querySelector('#modal')
    const closeBtn = document.querySelector('.close')

    modal.querySelector('h3').innerText = header;
    modal.querySelector('p').innerText = text;
    modal.showModal();

    closeBtn.addEventListener('click', () => {
        modal.close();
    });
}

// this is styled in styles.css 
// Maybe if we use modals alot I'll make a seperate stylesheet for this 