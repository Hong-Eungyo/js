const left_b = document.querySelector('#left_box'),
      right_b = document.querySelector('#right_box'),
      main_b = document.querySelector('#main_box');
let position = 0;

function boxSlide () {
    position++;
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

left_b.addEventListener('click', boxSlide);
right_b.addEventListener('click', boxSlide);
main_b.addEventListener('click', boxSlide);