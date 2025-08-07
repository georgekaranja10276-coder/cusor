document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const navbar = document.getElementById('navbar');
    const mainContent = document.getElementById('mainContent');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const menuToggle = document.getElementById('menuToggle');
    const cards = document.querySelectorAll('.card');
    const systemSelect = document.getElementById('systemSelect');
    const formContainer = document.getElementById('formContainer');
    const systemForm = document.getElementById('systemForm');
    
    // Current page tracking
    let currentPage = 'home';
    
    // Initialize navbar state based on current page
    function updateNavbarState() {
        if (currentPage === 'home') {
            navbar.classList.remove('collapsed');
            mainContent.classList.remove('expanded');
        } else {
            navbar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        }
    }
    
    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target page
            const targetPage = this.getAttribute('data-page');
            currentPage = targetPage;
            
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            
            // Show target page
            const targetPageElement = document.getElementById(targetPage + 'Page');
            if (targetPageElement) {
                targetPageElement.classList.add('active');
            }
            
            // Update navbar state with smooth transition
            setTimeout(() => {
                updateNavbarState();
            }, 100);
        });
    });
    
    // Menu toggle functionality (for collapsed navbar)
    menuToggle.addEventListener('click', function() {
        if (navbar.classList.contains('collapsed')) {
            navbar.classList.remove('collapsed');
            mainContent.classList.remove('expanded');
            
            // Auto-collapse after 3 seconds if not on home page
            if (currentPage !== 'home') {
                setTimeout(() => {
                    navbar.classList.add('collapsed');
                    mainContent.classList.add('expanded');
                }, 3000);
            }
        }
    });
    
    // Card click functionality - navigate to form page
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const system = this.getAttribute('data-system');
            
            // Navigate to form page
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('[data-page="form"]').classList.add('active');
            
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById('formPage').classList.add('active');
            
            currentPage = 'form';
            
            // Update navbar state
            setTimeout(() => {
                updateNavbarState();
            }, 100);
            
            // Pre-select the system in the dropdown
            systemSelect.value = system;
            showForm();
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // System select functionality
    systemSelect.addEventListener('change', function() {
        if (this.value) {
            showForm();
        } else {
            formContainer.style.display = 'none';
        }
    });
    
    function showForm() {
        formContainer.style.display = 'block';
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'translateY(20px)';
        
        // Animate form appearance
        setTimeout(() => {
            formContainer.style.transition = 'all 0.4s ease-in-out';
            formContainer.style.opacity = '1';
            formContainer.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Form submission
    systemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            system: systemSelect.value,
            systemName: document.getElementById('systemName').value,
            description: document.getElementById('description').value,
            priority: document.getElementById('priority').value,
            deadline: document.getElementById('deadline').value
        };
        
        // Show success message (you can replace this with actual form submission)
        showNotification('Form submitted successfully!', 'success');
        
        // Reset form
        systemForm.reset();
        systemSelect.value = '';
        formContainer.style.display = 'none';
        
        // Navigate to overview page
        setTimeout(() => {
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('[data-page="overview"]').classList.add('active');
            
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById('overviewPage').classList.add('active');
            
            currentPage = 'overview';
            updateNavbarState();
        }, 1000);
    });
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--dark-green)' : 'var(--gray)'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // User avatar click functionality (placeholder)
    document.getElementById('userAvatar').addEventListener('click', function() {
        showNotification('User profile functionality coming soon!', 'info');
    });
    
    // Add hover effects to navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(4px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
            }
        });
    });
    
    // Initialize page
    updateNavbarState();
    
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-in-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key to collapse navbar if not on home page
        if (e.key === 'Escape' && currentPage !== 'home') {
            navbar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        }
        
        // Alt + H for home, Alt + F for form, Alt + O for overview
        if (e.altKey) {
            switch(e.key.toLowerCase()) {
                case 'h':
                    document.querySelector('[data-page="home"]').click();
                    break;
                case 'f':
                    document.querySelector('[data-page="form"]').click();
                    break;
                case 'o':
                    document.querySelector('[data-page="overview"]').click();
                    break;
            }
        }
    });
});