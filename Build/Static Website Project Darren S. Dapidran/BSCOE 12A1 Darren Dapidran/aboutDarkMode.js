document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const navBg = document.getElementById('navDesign');
    const aboutCards = document.querySelectorAll('.about-card');
    const aboutTitle = document.querySelector('.about-title');
    const aboutDescription = document.querySelector('.about-description');

    // Search functionality elements
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

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
        textColor: '#ecf0f1',
        cardBg: 'rgba(45, 52, 54, 0.9)',
        cardShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        navBg: 'rgba(26, 26, 26, 0.9)',
        borderColor: '#00b894'
        
    };

    

    // Apply theme function
    function applyTheme(theme) {
        body.style.background = theme.background;
        body.style.color = theme.textColor;
        navBg.style.background = theme.navBg;
        navBg.style.backdropFilter = 'blur(10px)';
        navBg.style.boxShadow = theme.cardShadow;
        

        aboutCards.forEach(card => {
            card.style.background = theme.cardBg;
            card.style.boxShadow = theme.cardShadow;
            card.style.borderColor = theme.borderColor;
        });

        if (aboutTitle) aboutTitle.style.color = theme.textColor;
        if (aboutDescription) aboutDescription.style.color = theme.textColor;
    }

    // Toggle theme event listener
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('bi-moon');
        
        if (this.classList.contains('bi-moon')) {
            applyTheme(darkTheme);
            localStorage.setItem('backgroundColor', '#121212');
        } else {
            applyTheme(lightTheme);
            localStorage.setItem('backgroundColor', 'white');
        }
    });

    // Load saved theme preference from indexDarkMode.js
    const storedColor = localStorage.getItem('backgroundColor');
    if (storedColor) {
        if (storedColor === '#121212') {
            applyTheme(darkTheme);
            toggle.classList.add('bi-moon');
            toggle.classList.remove('bi-brightness-high-fill');
        } else if (storedColor === 'white') {
            applyTheme(lightTheme);
            toggle.classList.add('bi-brightness-high-fill');
            toggle.classList.remove('bi-moon');
        }
    }

    // Search functionality
    function highlightText(text, searchTerm) {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        if (!searchTerm) {
            searchResults.innerHTML = '<div class="search-result-item">Start typing to search...</div>';
            return;
        }

        let hasResults = false;

        aboutCards.forEach(card => {
            const title = card.querySelector('.about-name').textContent;
            const content = card.querySelector('.about-details').textContent;
            
            if (title.toLowerCase().includes(searchTerm) || content.toLowerCase().includes(searchTerm)) {
                hasResults = true;
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h3>${highlightText(title, searchTerm)}</h3>
                    <p>${highlightText(content, searchTerm)}</p>
                `;
                
                resultItem.addEventListener('click', () => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.animation = 'none';
                    card.offsetHeight; // Trigger reflow
                    card.style.animation = 'fadeInUp 0.8s ease forwards';
                    searchModal.style.display = 'none';
                });
                
                searchResults.appendChild(resultItem);
            }
        });

        if (!hasResults) {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        }
    }

    // Search event listeners
    searchBtn.addEventListener('click', () => {
        searchModal.style.display = 'block';
        searchInput.focus();
    });

    closeSearch.addEventListener('click', () => {
        searchModal.style.display = 'none';
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    searchInput.addEventListener('input', performSearch);

    // Close search modal when clicking outside
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.style.display = 'none';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // Close search modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.style.display === 'block') {
            searchModal.style.display = 'none';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // Scroll animation for about cards
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

    // Observe all about cards
    aboutCards.forEach(card => {
        observer.observe(card);
    });
}); 