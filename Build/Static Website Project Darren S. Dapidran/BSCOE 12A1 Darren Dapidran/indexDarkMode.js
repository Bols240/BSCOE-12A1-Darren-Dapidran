document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const abt = document.getElementById('abt');
    const fav = document.getElementById('fav');
    const resu = document.getElementById('resu');
    const navBg = document.getElementById('navDesign');
    
    //Used for changes/edits in the color of the text and background color.
    toggle.addEventListener('click', function(event){
        event.preventDefault();
        this.classList.toggle('bi-moon');
        if(this.classList.toggle('bi-brightness-high-fill')){
            body.style.color = 'black';
            abt.style.color = 'black';
            fav.style.color = 'black';
            resu.style.color = 'black';
            body.style.background = 'white';
            body.style.transition = '2s';
            localStorage.setItem('backgroundColor', 'white')
        } else {
            body.style.background = '#121212';
            body.style.color = 'white';
            abt.style.color = 'white';
            fav.style.color = 'white';
            resu.style.color = 'white';
            body.style.transition = '2s';
            localStorage.setItem('backgroundColor', '#121212')
        }
    });

    // Always use this if you are changing, adding or editing every color to save it.
    const storedColor = localStorage.getItem('backgroundColor');
    if (storedColor) {
        body.style.background = storedColor;
        if (storedColor === '#121212') {
            body.style.color = 'white';
            abt.style.color = 'white';
            fav.style.color = 'white';
            resu.style.color = 'white';
            toggle.classList.add('bi-moon');
            toggle.classList.remove('bi-brightness-high-fill');
        } else if (storedColor === 'white') {
            body.style.color = 'black';
            abt.style.color = 'black';
            fav.style.color = 'black';
            resu.style.color = 'black';
            toggle.classList.add('bi-brightness-high-fill');
            toggle.classList.remove('bi-moon');
        }
    }
}); 