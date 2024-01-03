let position = 0;
const left_b = document.querySelector('#left_box');
const main_b = document.querySelector('#main_box');
const right_b = document.querySelector('#right_box');

function ani_slide() {
    position ++;
    if(position % 3 == 0) {
        left_b.classList.remove('open');
        right_b.classList.remove('open');
    } else if (position % 3 == 1) {
        left_b.classList.add('open');
        right_b.classList.remove('open');
    } else {
        left_b.classList.remove('open');
        right_b.classList.add('open');
    }
}


left_b.addEventListener('click',ani_slide);
main_b.addEventListener('click',ani_slide);
right_b.addEventListener('click',ani_slide);