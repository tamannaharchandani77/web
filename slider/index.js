const slides = document.querySelectorAll('.slide')
const move = document.querySelector('.move')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const demo = document.querySelector('.demo')
let count = 0;

prev.addEventListener('click',()=>{
    count--;
    if(count == -1){
        count = slides.length - 1;
    }
    changePosition();
})

move.addEventListener('click',()=>{
    demo.style.transform = 'translateX(300px)'
})

next.addEventListener('click',()=>{
    count++;
    if(count == slides.length){
        count = 0;
    }
    changePosition();
})
console.log(slides)

slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`;
})

function changePosition(){
    // on every next click, it has to move count * 100 to the left
    // on every prev click, it has to move count * 100 to the right
    slides.forEach((slide)=>{
       slide.style.transform = `translateX(${-100*count}%)`
    })
}

// HW Q, pehle sb pics side me h, button pe click kro aur 1 pic right se ayegi, uske neeche 1 left se, uske neeche right and so on, with a smooth effect