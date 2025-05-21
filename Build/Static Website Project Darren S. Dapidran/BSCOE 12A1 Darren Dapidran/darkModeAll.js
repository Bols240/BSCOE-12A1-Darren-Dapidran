document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const abt = document.getElementById('abt');
    const fav = document.getElementById('fav');
    const resu = document.getElementById('resu');
    const navBg = document.getElementById('navDesign');
    const headClr = document.getElementById('headClr');
    const detailDesign = document.getElementById('detailDesign');
    
    // Used for changes/edits in the color of the text and background color.
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('bi-moon');
    
        if(this.classList.toggle('bi-brightness-high-fill')) {
            // Enhanced light mode colors
            body.style.color = '#2c3e50';  // Modern dark blue-gray for text
            abt.style.color = '#2c3e50';
            fav.style.color = '#2c3e50';
            resu.style.color = '#2c3e50';
            headClr.style.border = '1px solid #3498db';  // Modern blue border
            detailDesign.style.border = '1px solid #3498db';
            
            // Modern gradient background
            body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)';
            body.style.transition = '2s';
            
            // Modern semi-transparent navigation background
            navBg.style.background = 'rgba(255, 255, 255, 0.9)';
            navBg.style.backdropFilter = 'blur(10px)';
            navBg.style.transition = '2s';
            
            // Add subtle shadow to navigation
            navBg.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            
            localStorage.setItem('backgroundColor', 'light');
        } else {
            // Dark mode remains the same
            body.style.background = '#121212';
            body.style.color = 'white';
            abt.style.color = 'white';
            fav.style.color = 'white';
            resu.style.color = 'white';
            headClr.style.border = '1px solid #ffffff';
            detailDesign.style.border = '1px solid #ffffff';
            body.style.transition = '2s';
            navBg.style.background = 'hsla(0, 0%, 0%, 0.267)';
            navBg.style.transition = '2s';
            navBg.style.boxShadow = 'none';
            localStorage.setItem('backgroundColor', 'dark');
        }
    });
    
    // Load saved theme preference
    const storedColor = localStorage.getItem('backgroundColor');
    if (storedColor) {
        if (storedColor === 'dark') {
            body.style.background = '#121212';
            body.style.color = 'white';
            abt.style.color = 'white';
            fav.style.color = 'white';
            resu.style.color = 'white';
            detailDesign.style.border = '1px solid #ffffff';
            headClr.style.border = '1px solid #ffffff';
            navBg.style.background = 'hsla(0, 0%, 0%, 0.267)';
            navBg.style.transition = '2s';
            navBg.style.boxShadow = 'none';
            toggle.classList.add('bi-moon');
            toggle.classList.remove('bi-brightness-high-fill');
        } else if (storedColor === 'light') {
            body.style.color = '#2c3e50';
            abt.style.color = '#2c3e50';
            fav.style.color = '#2c3e50';
            resu.style.color = '#2c3e50';
            detailDesign.style.border = '1px solid #3498db';
            headClr.style.border = '1px solid #3498db';
            body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)';
            navBg.style.background = 'rgba(255, 255, 255, 0.9)';
            navBg.style.backdropFilter = 'blur(10px)';
            navBg.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navBg.style.transition = '2s';
            toggle.classList.add('bi-brightness-high-fill');
            toggle.classList.remove('bi-moon');
        }
    }
});