
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
            root.style.setProperty('--white', '#26283B');
        }
        
        })
}

//XPSLIDER




const xp=[];
const form=[];



function fetchSliderData(url){
    const endpoint = url;
    fetch(endpoint).then(blob => blob.json())
                   .then(data => {
                        xp.push(...data.experience)
                        form.push(...data.formation)
                                }
                            )
                   .then(()=>{
                        buildSlider('xp',xp);
                        buildSlider('form',form);
                        animateSlider('xp');
                        animateSlider('form');
                        yearsHighlight('xp');
                        yearsHighlight('form');
                   })
    
}



              




function buildSlider(id,bdd){
    const sliderContainer = document.querySelector(`.${id}-slider-container`);
    for (var i = 0; i < xp.length; i++) {
        const date = `<p class=".${id}-date">${bdd[i].date}</p>`;
        const titre = `<h3>${bdd[i].titre}</h3>`;
        const boite = `<p class=".${id}-boite">${bdd[i].boite}</p>`;
        const lien = `<p class=".${id}-lien"><a href="${bdd[i].lien}">En savoir plus</a></p>`;
        const tagsList = Array.from(bdd[i].tags.split(','));
        const tags = tagsList.map(tag => `<span class=".${id}-tag">${tag}</span>`).join('');
    
        const textnode = document.createElement('div');
        textnode.innerHTML=`${date}${titre}${boite}${tags}${lien}`;
        sliderContainer.appendChild(textnode);
        textnode.dataset.experience = `${id}${i+1}`;
        }
}




function animateSlider(id){
        const sliderContainer = document.querySelector(`.${id}-slider-container`);
        const sliderElements = document.querySelectorAll(`.${id}-slider-container div`);
        let startSlide;
        let scrollLeft;
        let drag = false;
        
        sliderContainer.addEventListener('mousedown', function(e){
            drag=true;
            startSlide = e.x-sliderContainer.offsetLeft;
            scrollLeft = sliderContainer.scrollLeft;
            sliderContainer.classList.add('active');
            this.style.cursor='grabbing';
        });

        sliderContainer.addEventListener('mouseup', function(e){
            e.preventDefault();
            drag=false;
            sliderContainer.classList.remove('active');
            this.style.cursor='';
        });

        sliderContainer.addEventListener('mouseleave', function(){
            drag=false;
            this.style.cursor='';
        });

        sliderContainer.addEventListener('mousemove',function(e){
            if(drag){
                let walk = e.x-sliderContainer.offsetLeft;
                const scroll=startSlide-walk;
                sliderContainer.scrollLeft=scrollLeft+scroll;
            } else{return}
        
            
        })
    }

function yearsHighlight(id){
    const xps = document.querySelectorAll(`.${id}-slider-container div`);

        xps.forEach(ele=>ele.addEventListener('mouseover',function(e){
            const cible = this.dataset.experience;
            const targets = document.querySelectorAll(`.${cible}`);
            targets.forEach(ele => {
                ele.classList.add('active');
            })

        }))

        xps.forEach(ele=>ele.addEventListener('mouseout',function(e){
            const cible = this.dataset.experience;
            const targets = document.querySelectorAll(`.${cible}`);
            targets.forEach(ele => {
                ele.classList.remove('active');
            })

        }))
}





console.log(xp);
console.log(form);

fetchSliderData('https://raw.githubusercontent.com/Goodal1/sitecv/main/js/data2.json');
  
       
  










    




deployMenu();
moveRobot();
darkMode();