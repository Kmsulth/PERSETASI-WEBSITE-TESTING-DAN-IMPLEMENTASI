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
