let position = 0;
const leftBox = document.querySelector('#left-box');
const rightBox = document.querySelector('#right-box');
const mainBox = document.querySelector('#main-box');
const bottomBox = document.querySelector('#bottom-box');
const topBox = document.querySelector('#up-box');


function slideBox() {
    position ++;
    if(position % 5 == 0) {
        leftBox.classList.remove('open');
        rightBox.classList.remove('open');
        bottomBox.classList.remove('open');
        topBox.classList.remove('open');
    } else if (position % 5 == 1) {
        leftBox.classList.add('open');
        rightBox.classList.remove('open');
        bottomBox.classList.remove('open');
        topBox.classList.remove('open');
    } else if (position % 5 == 2){
        leftBox.classList.remove('open');
        rightBox.classList.add('open');
        bottomBox.classList.remove('open');
        topBox.classList.remove('open');
    } else if(position % 5 == 3) {
        leftBox.classList.remove('open');
        rightBox.classList.remove('open');
        bottomBox.classList.add('open');
        topBox.classList.remove('open');
    } else {
        leftBox.classList.remove('open');
        rightBox.classList.remove('open');
        bottomBox.classList.remove('open');
        topBox.classList.add('open');
    }
}

leftBox.addEventListener('click', slideBox);
mainBox.addEventListener('click', slideBox);
rightBox.addEventListener('click', slideBox);