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

const categoryBtns = document.querySelector('.work__categories');
categoryBtns.addEventListener('click', (event) => {
  console.log(event.target.dataset.filter);
});

function showSection(link) {
  const prevSection = document.querySelector('.show-section');
  prevSection.classList.remove('show-section');
  const newSection = document.querySelector(`${link}`);
  newSection.classList.add('show-section');

  const projects = document.querySelector('.work__projects');
  const categories = document.querySelector('.work__categories');
  if (link === '#projects') {
    projects.classList.add('show-projects');
    categories.classList.add('show-btn');
  } else {
    projects.classList.remove('show-projects');
    categories.classList.remove('show-btn');
  }
}

function activeButton(link) {
  const prevSection = document.querySelector('.active');
  prevSection.classList.remove('active');
  const newSection = document.querySelector(`[data-link="${link}"]`);
  newSection.classList.add('active');
}

function selectedCategory(category) {
  const prevBtn = document.querySelector('.selected');
  prevBtn.classList.remove('selected');
  const newBtn = document.querySelector(`[data-filter="${category}"]`);
  newBtn.classList.add('selected');
}
