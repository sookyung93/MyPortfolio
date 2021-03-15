'use strict';

const navBarMenu = document.querySelector('.sideBar__menu');
navBarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }

  showSection(link);
});

function showSection(link) {
  const prevSection = document.querySelector('.show-section');
  prevSection.classList.remove('show-section');
  const newSection = document.querySelector(`${link}`);
  newSection.classList.add('show-section');
}
