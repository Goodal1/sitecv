
//MENU MOBILE
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


//MOUVEMENT DU ROBOT
function moveRobot(){
    const main = document.querySelector('.main-banner');
    const robot = document.querySelector('#robot');

    main.addEventListener('mouseover', function(e){
    let walk = e.x/10;
    robot.style.transform=`translateX(${walk}px) translateY(20%) rotate(10deg)`
    })

    main.addEventListener('mouseout', function(e){
    robot.style.transform=`translateX(0px) translateY(25%) rotate(0deg)`
    })
}


//DARKMODE
function darkMode(){
    const darkmode = document.querySelector('#darkmode');
    let dark=true;
    
    darkmode.addEventListener('click',function(){
        const root = document.documentElement;
        dark = !dark;
 

        if (dark){
            root.style.setProperty('--dark1', '#26283B');
            root.style.setProperty('--dark2', '#0E0000')
            root.style.setProperty('--white', '#fff');
        } else{
            root.style.setProperty('--dark1', '#fff');
            root.style.setProperty('--dark2', '#F4F7F6')
            root.style.setProperty('--white', '#000');
        }
        
        })
}

//XPSLIDER

const sliderContainer = document.querySelector('.xp-slider-container');

for (var i = 0; i < xp.length; i++) {

    const date = `<p class="xp-date">${xp[i].date}</p>`;
    const titre = `<h3>${xp[i].titre}</h3>`;
    const boite = `<p class="xp-boite">${xp[i].boite}</p>`;
    const lien = `<p>${xp[i].lien}</p>`;
    const tagsList = Array.from(xp[i].tags.split(','));
    const tags = tagsList.map(tag => `<span>${tag}</span>`).join('');

    const textnode = document.createElement('div');
    textnode.innerHTML=`${date}${titre}${boite}${tags}${lien}`;
    sliderContainer.appendChild(textnode);

    

    


    }





/*deployMenu();
moveRobot();
darkMode();*/