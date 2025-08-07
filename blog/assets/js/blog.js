// Blog functionality
class BlogManager {
    constructor() {
        this.posts = [];
        this.currentFilter = 'all';
        this.init();
    }

    async init() {
        await this.loadPosts();
        this.setupEventListeners();
        this.renderPosts();
        this.renderRecentPosts();
    }

    async loadPosts() {
        try {
            const response = await fetch('posts/blog-posts.json');
            this.posts = await response.json();
            // Sort posts by date (newest first)
            this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } catch (error) {
            console.error('Error loading blog posts:', error);
            this.posts = [];
        }
    }

    setupEventListeners() {
        // Category filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterPosts(category);
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    filterPosts(category) {
        this.currentFilter = category;
        this.renderPosts();
    }

    getFilteredPosts() {
        if (this.currentFilter === 'all') {
            return this.posts;
        }
        return this.posts.filter(post => post.category === this.currentFilter);
    }

    renderPosts() {
        const postsGrid = document.getElementById('posts-grid');
        if (!postsGrid) return;

        const filteredPosts = this.getFilteredPosts();
        
        if (filteredPosts.length === 0) {
            postsGrid.innerHTML = '<p>No posts found for this category.</p>';
            return;
        }

        postsGrid.innerHTML = filteredPosts.map(post => this.createPostCard(post)).join('');
    }

    renderRecentPosts() {
        const recentPostsList = document.getElementById('recent-posts-list');
        if (!recentPostsList) return;

        const recentPosts = this.posts.slice(0, 5); // Show 5 most recent
        recentPostsList.innerHTML = recentPosts.map(post => `
            <li>
                <a href="posts/${post.file}" title="${post.title}">
                    ${this.truncateText(post.title, 50)}
                </a>
            </li>
        `).join('');
    }

    createPostCard(post) {
        const categoryDisplayNames = {
            'tech-ai': 'Tech & AI',
            'finance': 'Finance', 
            'fitness': 'Fitness'
        };

        const categoryDisplay = categoryDisplayNames[post.category] || post.category;
        const tagsHtml = post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('');

        return `
            <article class="post-card" onclick="window.location.href='posts/${post.file}'">
                <div class="post-meta">
                    <span class="post-category">${categoryDisplay}</span>
                    <span>${this.formatDate(post.date)}</span>
                    <span>${post.readTime}</span>
                </div>
                <h2>${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-tags">
                    ${tagsHtml}
                </div>
                <a href="posts/${post.file}" class="read-more">
                    Read more →
                </a>
            </article>
        `;
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
    }
}

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlogManager();
});

// Category color mapping for consistent styling
const categoryColors = {
    'tech-ai': '#3b82f6',
    'finance': '#10b981', 
    'fitness': '#f59e0b'
};

// Add dynamic category colors
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    let categoryCSS = '';
    
    Object.entries(categoryColors).forEach(([category, color]) => {
        categoryCSS += `
            .filter-btn[data-category="${category}"].active,
            .filter-btn[data-category="${category}"]:hover {
                background: ${color} !important;
                border-color: ${color} !important;
            }
            .post-card[data-category="${category}"] .post-category {
                background: ${color};
            }
        `;
    });
    
    style.textContent = categoryCSS;
    document.head.appendChild(style);
});