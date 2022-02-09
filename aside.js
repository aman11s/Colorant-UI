const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownList = document.querySelector('.dropdown-list');
const aside = document.querySelector('.aside-container');
const sidebarLink = document.querySelectorAll('.sidebar-link');

dropdownBtn.addEventListener('click', () => {
    aside.classList.toggle('aside-height')
    dropdownList.classList.toggle('hide')
    dropdownBtn.classList.toggle('transform-btn')
});

// Hide side link when clickded

sidebarLink.forEach(link => {
    link.addEventListener('click', () => {
        dropdownList.classList.add('hide');
        dropdownBtn.classList.toggle('transform-btn');
    })
})