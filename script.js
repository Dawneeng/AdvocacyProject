
// Animation settings
let animation = {
  revealDistance: 150,
  transitionDuration: '2s',
  transitionTimingFunction: 'ease',
}

// Select all elements with the class 'revealable'
const revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  let windowHeight = window.innerHeight;

  for (let i = 0; i < revealableContainers.length; i++) {
    let elementTop = revealableContainers[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Attach the reveal function to the scroll event
window.addEventListener('scroll', reveal);
