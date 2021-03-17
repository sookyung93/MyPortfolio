'use strict';

const navBarMenu = document.querySelector('.sideBar__menu');
navBarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }

  showSection(link);
  activeButton(link);
});

function showSection(link) {
  const prevSection = document.querySelector('.show-section');
  prevSection.classList.remove('show-section');
  const newSection = document.querySelector(`${link}`);
  newSection.classList.add('show-section');
}

function activeButton(link) {
  const prevSection = document.querySelector('.active');
  prevSection.classList.remove('active');
  const newSection = document.querySelector(`[data-link="${link}"]`);
  newSection.classList.add('active');
}
