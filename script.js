// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // THEME TOGGLE FUNCTIONALITY
    // Check if user has a saved theme preference, default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
    
    // Add click event listener to theme toggle button
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update the theme and save to localStorage
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(newTheme);
    });
    
    // Function to update the theme toggle button icon
    function updateThemeToggle(theme) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // SKILLS SECTION FUNCTIONALITY
    // Handle skill category switching
    const categoryItems = document.querySelectorAll('.category-item');
    const skillGroups = document.querySelectorAll('.skill-group');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all categories and skill groups
            categoryItems.forEach(cat => cat.classList.remove('active'));
            skillGroups.forEach(group => group.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // Show corresponding skill group
            const targetGroup = document.querySelector(`.skill-group[data-category="${category}"]`);
            if (targetGroup) {
                targetGroup.classList.add('active');
                
                // Animate progress bars in the active group
                setTimeout(() => {
                    animateProgressBars(targetGroup);
                }, 100);
            }
        });
    });
    
    // Function to animate progress bars
    function animateProgressBars(container) {
        const progressBars = container.querySelectorAll('.progress-bar');
        progressBars.forEach((bar, index) => {
            // Reset animation
            bar.style.width = '0%';
            bar.classList.remove('animate');
            
            setTimeout(() => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth + '%';
                bar.classList.add('animate');
            }, index * 200); // Stagger animations
        });
    }
    
    // Skills section intersection observer for initial animation
    const skillsSection = document.getElementById('skills');
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the currently active skill group
                const activeGroup = document.querySelector('.skill-group.active');
                if (activeGroup) {
                    animateProgressBars(activeGroup);
                }
                skillsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // Add skills section to existing fade-in animation
    const skillItems = document.querySelectorAll('.skill-item, .category-item');
    skillItems.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Update existing fade elements to include skills elements
    const fadeElements = document.querySelectorAll('.project-card, .skill-category, .contact-link, .skill-item, .category-item');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    const navObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveNavLink(id);
            }
        });
    }, {
        threshold: 0.3
    });
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        navObserver.observe(section);
    });
    
    function updateActiveNavLink(activeId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = body.getAttribute('data-theme') === 'dark' 
                ? 'rgba(17, 24, 39, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.backgroundColor = body.getAttribute('data-theme') === 'dark' 
                ? 'rgba(17, 24, 39, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});