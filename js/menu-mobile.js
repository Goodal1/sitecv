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

const main = document.querySelector('.main-banner');
main.addEventListener('mouseover', function(e){
    let walk = e.x/10;
    document.querySelector('#robot').style.transform=`translateX(${walk}px) translateY(20%) rotate(10deg)`
})

main.addEventListener('mouseout', function(e){
    document.querySelector('#robot').style.transform=`translateX(0px) translateY(25%) rotate(0deg)`
})

const darkmode = document.querySelector('#darkmode');
darkmode.addEventListener('click',function(){
    document.documentElement.style.setProperty('--dark1', '#fff');
    document.documentElement.style.setProperty('--dark2', '#F4F7F6')
    document.documentElement.style.setProperty('--white', '#000');

})