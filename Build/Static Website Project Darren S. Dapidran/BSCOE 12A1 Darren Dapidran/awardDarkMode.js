document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const navBg = document.getElementById('navDesign');
    const awardCards = document.querySelectorAll('.award-card');
    const awardTitle = document.querySelector('.award-title');
    const awardDescription = document.querySelector('.award-description');
    // Theme colors


    const lightTheme = {
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        textColor: '#2c3e50',
        cardBg: 'rgba(255, 255, 255, 0.9)',
        cardShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        navBg: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#3498db'
    };


    const darkTheme = {
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)',
        textColor: '#ffffff',
        cardBg: 'rgba(255, 255, 255, 0.9)',
        cardShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        navBg: 'rgba(26, 26, 26, 0.9)',
        borderColor: '#00b894'
        , buttonBg: '#222f3e',
        buttonText: '#00cec9',
        highlight: '#636e72',
        navDesign: '#2d3436',
        linkColor: '#00b894',
    };

    // Apply theme function
    function applyTheme(theme) {
        body.style.background = theme.background;
        body.style.color = theme.textColor;
        navBg.style.background = theme.navBg;
        navBg.style.backdropFilter = 'blur(10px)';
        navBg.style.boxShadow = theme.cardShadow;

        awardCards.forEach(card => {
            card.style.background = theme.cardBg;
            card.style.boxShadow = theme.cardShadow;
            card.style.borderColor = theme.borderColor;
        });

        if (awardTitle) awardTitle.style.color = theme.textColor;
        if (awardDescription) awardDescription.style.color = theme.textColor;
    }

    // Toggle theme event listener
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (this.classList.contains('bi-brightness-high-fill')) {
            // Switching to dark mode
            this.classList.remove('bi-brightness-high-fill');
            this.classList.add('bi-moon');
            applyTheme(darkTheme);
            localStorage.setItem('backgroundColor', '#121212');
        } else {
            // Switching to light mode
            this.classList.remove('bi-moon');
            this.classList.add('bi-brightness-high-fill');
            applyTheme(lightTheme);
            localStorage.setItem('backgroundColor', 'white');
        }
    });

    // Load saved theme preference from indexDarkMode.js
    const storedColor = localStorage.getItem('backgroundColor');
    if (storedColor) {
        if (storedColor === '#121212') {
            applyTheme(darkTheme);
            toggle.classList.remove('bi-brightness-high-fill');
            toggle.classList.add('bi-moon');
        } else if (storedColor === 'white') {
            applyTheme(lightTheme);
            toggle.classList.remove('bi-moon');
            toggle.classList.add('bi-brightness-high-fill');
        }
    }

    // Scroll animation for award cards
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all award cards
    awardCards.forEach(card => {
        observer.observe(card);
    });
}); 