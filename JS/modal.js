const modalLiveDemo = document.querySelector('#modal-live-demo');
const modalCloseButton = document.querySelector('.modal-close');
const modalDemoClick = document.querySelector('.modal-demo-click');

modalCloseButton.addEventListener('click', () => {
    modalLiveDemo.classList.remove('active-modal');
})

modalDemoClick.addEventListener('click', () => {
    modalLiveDemo.classList.add('active-modal');
})
