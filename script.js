document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modalOverlay');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modalOverlay.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});












