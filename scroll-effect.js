/*
   This script fades in the welcome on the 
   homepage when scrolling down 

*/

const checkpoint = 350;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0;
  } else {
    opacity = currentScroll / checkpoint - 1;
  }
  document.querySelector(".front").style.opacity = opacity;
});