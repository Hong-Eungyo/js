let position = 0;
const main_w = document.querySelector("#main_box");
const left_w = document.querySelector("#left_box");
const right_w = document.querySelector("#right_box");

function ani_slide () {
    // console.log(position);
    position++;
    if (position % 3 == 0) {
        console.log(position);
        console.log(position % 3);
        left_w.classList.remove("open");
        right_w.classList.remove("open");
    } else if (position % 3 == 1) {
        console.log(position);
        console.log(position % 3);
        left_w.classList.add("open");
        right_w.classList.remove("open");
    } else {
        console.log(position);
        console.log(position % 3);
        left_w.classList.remove("open");
        right_w.classList.add("open");
    }
}

main_w.addEventListener("click", ani_slide);
left_w.addEventListener("click", ani_slide);
right_w.addEventListener("click", ani_slide);