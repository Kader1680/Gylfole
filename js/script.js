            // drob down section

let menu = document.querySelector('.menu');
let drop_down = document.querySelector('.drop_down');
let menu_left = document.querySelector('.menu_left');
let drop_down_vis = document.querySelector('.drop_down_vis');
menu.addEventListener('click', ()=>{
    menu.classList.toggle('menu_left'),
    drop_down.classList.toggle('drop_down_vis')
    
})


            // faq section


let faqs = document.querySelectorAll('.faq');
let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let ans_block = document.querySelector('.ans_block');

// question.addEventListener('click', ()=>{
//     answer.classList.toggle('ans_block')

    
// })
faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('ans_block')

    })
})


