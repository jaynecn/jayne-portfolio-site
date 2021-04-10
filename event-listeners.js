const navContainer = document.querySelector('.nav');

navContainer.addEventListener('mouseover', function(element) {
  element.target.style.color = '#343a40';
  element.target.style.backgroundColor = "#f1f4f8";
});

navContainer.addEventListener('mouseout', function(element) {
  element.target.style.color = '#343A40';
  element.target.style.backgroundColor = "#FFFAFA"
  
});

const header = document.querySelector('.intro');

const leftBtn = document.querySelector('.left-button');

leftBtn.addEventListener('click', function (element) {
  element.target.style.color = '#FF7F50';
  element.target.style.border.display = 'block';
});

const rightBtn = document.querySelector('.right-button');

rightBtn.addEventListener('click', function (element) {
  element.target.style.color = '#FF7F50';
  element.target.style.border.display = 'block';
});