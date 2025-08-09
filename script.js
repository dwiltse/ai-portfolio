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
    
    const fadeElements = document.querySelectorAll('.project-card, .skill-category, .contact-link');
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

    // SKILLS SECTION FUNCTIONALITY
    initializeSkillsSection();

    function initializeSkillsSection() {
        // Setup skill category filtering
        const skillFilterButtons = document.querySelectorAll('.skill-filter-btn');
        const skillItems = document.querySelectorAll('.skill-item');

        // Add click event listeners to filter buttons
        skillFilterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button
                skillFilterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter skill items
                filterSkills(category, skillItems);
            });
        });

        // Setup intersection observer for skills animation
        const skillsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress bars when skills section comes into view
                    animateProgressBars();
                    // Only trigger once
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });

        // Observe the skills section
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }

        // Add hover effects to skill items
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    function filterSkills(category, skillItems) {
        skillItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.classList.remove('hidden');
                // Add a small delay for smoother animation
                setTimeout(() => {
                    item.style.display = 'block';
                }, 50);
            } else {
                item.classList.add('hidden');
                // Hide after animation completes
                setTimeout(() => {
                    if (item.classList.contains('hidden')) {
                        item.style.display = 'none';
                    }
                }, 300);
            }
        });
    }

    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach((bar, index) => {
            const progress = bar.getAttribute('data-progress');
            
            // Add a staggered delay for each progress bar
            setTimeout(() => {
                bar.style.width = progress + '%';
                
                // Add shimmer effect after progress bar fills
                setTimeout(() => {
                    bar.classList.add('shimmer');
                }, 1500);
            }, index * 150); // 150ms delay between each bar
        });
    }

    // Add skill items to the fade-in observer for entrance animations
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});