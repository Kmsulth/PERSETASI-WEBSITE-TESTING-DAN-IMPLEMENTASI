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

fontlogo2.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "red"; // Atur warna teks menjadi merah saat kursor masuk
    });

    // Tambahkan event listener untuk event mouseout
    link.addEventListener("mouseout", () => {
        link.style.color = ""; // Kembalikan warna teks ke nilai awal atau kosong saat kursor keluar
    });
});

let lastScrollTop = 0;


/* paralaxx efeect */

let imgcnm = document.getElementById('imgcnm');
let clapper = document.getElementById('clapper');
let logocc = document.getElementById('logocc');
let lamp = document.getElementById('lamp');
let cipung2= document.getElementById('cipung2');
let cipung1 = document.getElementById('cipung1');
let bgblack = document.getElementById('bgblack');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    imgcnm.style.marginTop = value * 1.0  + 'px';
    clapper.style.left = value * -0.8  + 'px';
    clapper.style.top = value * 0.2  + 'px';
    logocc.style.top = value * 0.2  + 'px';
    lamp.style.left = value * 1.5  + 'px';
    lamp.style.top = value * -1.5  + 'px';
    cipung2.style.left = value * 1.5  + 'px';
    cipung1.style.left = value * -1.5  + 'px';
    cipung1.style.top = value * -1.5  + 'px';
    bgblack.style.top = value * 0.3  + 'px';
    
});

