const menutoggle = document.querySelector( '.menu-toggle input');
const nav = document.querySelector('nav ul');

menutoggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

var navbar = document.querySelector('.navbar');
window.addEventListener("scroll",()=>{
    if (document.documentElement.scrollTop > 20){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
})

var navbar = document.querySelector('.navbar');
window.addEventListener("scroll",()=>{
    if (document.documentElement.scrollTop > 20){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
})

var fontlogo = document.querySelector('.navbar h2');
window.addEventListener("scroll",()=>{
    if (document.documentElement.scrollTop > 20){
        fontlogo.classList.add("change-color");
    } else{
        fontlogo.classList.remove("change-color");
    }
})

var spans = document.querySelectorAll('.menu-toggle span');
    window.addEventListener("scroll",()=> {

    if (document.documentElement.scrollTop > 20) {
        spans.forEach(link => {
            link.classList.add("burger-color");
    });
    } 
    else { spans.forEach(link => {
            link.classList.remove("burger-color");
        });
    }
});


var fontlogo2 = document.querySelectorAll('.navbar a');

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
        fontlogo2.forEach(link => {
            link.classList.add("change-color2");
        });
    } 
    else {

        fontlogo2.forEach(link => {
            link.classList.remove("change-color2");
        });
    }
});

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
// Hapus variabel timeAutoNext yang digunakan untuk slide otomatis

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

let runTimeOut;

function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}
