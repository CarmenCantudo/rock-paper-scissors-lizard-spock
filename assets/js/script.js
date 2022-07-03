// Popup from https://youtu.be/MBaw_6cPmAw

let openModalButtons = document.getElementById('btn-rules');
let closeModalButtons = document.getElementById('close-btn-rules');
let overlay = document.getElementById('overlay');

openModalButtons.addEventListener('click', () => {
    let modal = document.getElementById('modal');
    openModal(modal);
})

closeModalButtons.addEventListener('click', () => {
    let modal = document.getElementById('modal');
    closeModal(modal);
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}