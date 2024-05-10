const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var mainImg = document.getElementById("mainImg");

var smallImg = document.getElementsByClassName("small-img"); 


for(let i=0; i<5;i++)
    {
        smallImg[i].onclick = function(){
            mainImg.src = smallImg[i].src;
        }
    }




