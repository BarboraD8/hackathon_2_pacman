'use strict';

const app = document.querySelector('#app');
const stage = new Stage(19, 9);
app.appendChild(stage.mount());

const pac = new Pacman(stage, 'Jane', 'girl', 'dark', 0, 0);
stage.element.appendChild(pac.mount());

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') {
    pac.move('right');
  } else if (e.code === 'ArrowLeft') {
    pac.move('left');
  } else if (e.code === 'ArrowUp') {
    pac.move('up');
  } else if (e.code === 'ArrowDown') {
    pac.move('down');
  }
});
