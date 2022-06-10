let myimg = ["s1.jpg", "s2.jpg", "s3.jpg"];
let slider_img = document.querySelector('.slider_img')
// let local_continer = document.getElementById('local_continer')




setInterval(() => {
    let random = Math.floor(Math.random()*myimg.length)
    let randomimg = myimg[random]
    
    slider_img.style.backgroundImage = "url('img/"+ randomimg +"')"
}, 9000);