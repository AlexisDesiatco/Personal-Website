function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

const slider1 = document.querySelector('.gallery1');

slider1.addEventListener('mousedown', e => {
  isDown = true;
  slider1.classList.add('active');
  startX = e.pageX - slider1.offsetLeft;
  scrollLeft = slider1.scrollLeft;
});
slider1.addEventListener('mouseleave', _ => {
  isDown = false;
  slider1.classList.remove('active');
});
slider1.addEventListener('mouseup', _ => {
  isDown = false;
  slider1.classList.remove('active');
});
slider1.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider1.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider1.scrollLeft = scrollLeft - walk;
});

const slider2 = document.querySelector('.gallery2');

slider2.addEventListener('mousedown', e => {
  isDown = true;
  slider2.classList.add('active');
  startX = e.pageX - slider2.offsetLeft;
  scrollLeft = slider2.scrollLeft;
});
slider2.addEventListener('mouseleave', _ => {
  isDown = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', _ => {
  isDown = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider2.scrollLeft = scrollLeft - walk;
});


