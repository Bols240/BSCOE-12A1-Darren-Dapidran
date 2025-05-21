    document.addEventListener('DOMContentLoaded', () => {

    const searchLabel = document.getElementById('searchLabel');
    const searchBtn = document.getElementById('search-btn');
    const hiddenBar = document.getElementById('search');
    const xButton = document.getElementById('x-btn')
const icon = document.getElementById('icon');
   

    icon.addEventListener('click', event => {
        event.preventDefault();


if(hiddenBar.classList.contains('hideInput') && searchBtn.classList.contains('hideInput')){
hiddenBar.classList.remove('hideInput');
searchBtn.classList.remove('hideInput');
xButton.classList.remove('hideInput');
icon.classList.remove('bibi-search')
if(!icon.classList.contains('hideInput')){
    icon.classList.add('hideInput');
    hiddenBar.style.animation = 'grow 0.8s ease-in-out';
    searchLabel.style.padding = '12px 50px'
    searchLabel.style.transition = '0.8s';
    console.log(`true`)

}
        
}
        
    });

    xButton.addEventListener('click', event => {event.preventDefault();

        if(!hiddenBar.classList.contains('hideInput') && !searchBtn.classList.contains('hideInput')){
            hiddenBar.classList.add('hideInput');
        searchBtn.classList.add('hideInput');
        xButton.classList.add('hideInput');
        if(!icon.classList.contains('bibi-search')){
            icon.classList.add('bibi-search')
            icon.classList.remove('hideInput');
            searchLabel.style.padding = '12px 12px'

            searchLabel.style.transition = ' all 0.8s';
        }
          
        }
       
    
    
    })
     
    
    

    
        
      
    });

    // Slide Move =============================
    
let click = 0;


function nextSlide(){
    
    const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
    click++;
    const fvrt = document.getElementById('fvrt');
    const myP = document.getElementById('myP')

    
document.getElementById('crossButton').style.display="block";
    console.log(click);
    
    if(click === 1|| click === -1){
        img1.classList.remove('hidden')
        img2.classList.add('hidden');
        img3.classList.add('hidden');
        document.getElementById('img0').style.display="none";
        console.log(click);
fvrt.textContent = `Games`;
myP.classList.remove('hiddenP');
myP.textContent = `Games are my favorite things to do to relieve or to gain stress. My favorite games include Minecraft, Mobile Legends Bang Bang, Clash of Clans, Roblox (sometimes), and lastly, horror games.`
document.getElementById('headClr').style.background="hsla(263, 64.40%, 32.00%, 0.66)";
myP.style.animation="slideR 0.5s ease-in-out";

    }
     else if(click === 2 || click === -2  || click === 0){
       img2.classList.remove('hidden');
       img1.classList.add('hidden');
       img3.classList.add('hidden');

       console.log(click);
       fvrt.textContent = `Music`
       myP.textContent = `One of my favorite things is music, especially while I'm working on assessments since it keeps me motivated and stimulates my creative thinking. Here are some musical examples for you to enjoy!`
       document.getElementById('headClr').style.background="hsla(330, 64.40%, 32.00%, 0.66)";
   myP.style.animation="slideR 0.5s ease-in-out";



     }
     else if(click === 3){
        img3.classList.remove('hidden')
        img1.classList.add('hidden');
        img2.classList.add('hidden');
      click = 0;
        console.log(click);
        fvrt.textContent = `Food`
        myP.textContent = `Food is one of everyone's favorite things on any list; whether it's hot or cold, as long as it fills their stomach, they will keep coming back for more. Soups, particularly sinigang, sopas, lugaw, and others, are foods that I truly enjoy. In terms of fast food, I enjoy pizza, lasagna, spaghetti, and other dishes.`;
        document.getElementById('headClr').style.background="hsla(22, 91.20%, 44.70%, 0.66)";
       myP.style.animation="slideR 0.5s ease-in-out";


     
    } 
    
   
    }
    
    function prevSlide(){
    click--;



    const fvrt = document.getElementById('fvrt');
    const myP = document.getElementById('myP');

    document.getElementById('headClr').style.display="block";


    if(click === -1 || click === 1){
        img1.classList.remove('hidden')
        img2.classList.add('hidden');
        img3.classList.add('hidden');
console.log(click);
document.getElementById('img0').style.display="none";
fvrt.textContent = `Games`
myP.textContent = `Games are my favorite things to do to relieve or to gain stress. My favorite games include Minecraft, Mobile Legends Bang Bang, Clash of Clans, Roblox (sometimes), and lastly, horror games.`
document.getElementById('headClr').style.background="hsla(263, 64.40%, 32.00%, 0.66)";
myP.style.animation="slideR 0.5s ease-in-out";


    }
    else if(click === -2 || click === 2 || click === 0 ){
       img2.classList.remove('hidden');
       img1.classList.add('hidden');
       img3.classList.add('hidden');
       console.log(click);
       fvrt.textContent = `Music`
       myP.textContent = `One of my favorite things is music, especially while I'm working on assessments since it keeps me motivated and stimulates my creative thinking. Here are some musical examples for you to enjoy!.`
       document.getElementById('headClr').style.background="hsla(330, 64.40%, 32.00%, 0.66)";
       myP.style.animation="slideR 0.5s ease-in-out";


    }
     else if(click === -3){
        img3.classList.remove('hidden')
        img1.classList.add('hidden');
        img2.classList.add('hidden');
        click = 0;
        console.log(click);
        fvrt.textContent = `Food`
        myP.textContent = `Food is one of everyone's favorite things on any list; whether it's hot or cold, as long as it fills their stomach, they will keep coming back for more. Soups, particularly sinigang, sopas, lugaw, and others, are foods that I truly enjoy. In terms of fast food, I enjoy pizza, lasagna, spaghetti, and other dishes.`;
        document.getElementById('headClr').style.background=" hsla(22, 91.20%, 44.70%, 0.66)";
myP.style.animation="slideR 0.5s ease-in-out";


    } 

    }
    
