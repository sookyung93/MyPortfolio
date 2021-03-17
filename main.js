'use strict';

const navBarMenu = document.querySelector('.sideBar__menu');
navBarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }

  showSection(link);
  selectedButton(link);
});

function showSection(link) {
  const prevSection = document.querySelector('.show-section');
  prevSection.classList.remove('show-section');
  const newSection = document.querySelector(`${link}`);
  newSection.classList.add('show-section');
}

function selectedButton(link) {
  const prevSection = document.querySelector('.active');
  prevSection.classList.remove('active');
  const newSelected = document.querySelector(`[data-link="${link}"]`);
  newSelected.classList.add('active');
}
