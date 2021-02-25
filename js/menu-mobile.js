function deployMenu(){
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.menu-mobile');
    const close = document.querySelector('.menu-mobile .close');

    burger.addEventListener('click', function(){
        mobileMenu.style.transform='translateX(0%)';
    })

   close.addEventListener('click', function(){
        mobileMenu.style.transform='translateX(-100%)';
    })
}

deployMenu();

