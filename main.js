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

// const categoryBtns = document.querySelector('.category__btn');
// categoryBtns.addEventListener('click', (event) => {
//   console.log('hi');
//   console.log(event);
// });

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

// function selectedCategory(category) {
//   const prevBtn = document.querySelector('.selected');
//   prevBtn.classList.remove('selected');
//   const newBtn = document.querySelector(`[data-filter="${category}"]`);
//   newBtn.classList.add('selected');
// }
