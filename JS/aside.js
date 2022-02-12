const dropdownBtn = document.querySelector('#dropdown-btn');
const asideHeader = document.querySelector('.aside-header');
const dropdownList = document.querySelector('.dropdown-list');
const aside = document.querySelector('.aside-container');
const sidebarLink = document.querySelectorAll('.sidebar-link');

asideHeader.addEventListener('click', () => {
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