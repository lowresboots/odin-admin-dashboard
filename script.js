document.addEventListener('DOMContentLoaded', function() {
    const notificationContainer = document.querySelector('.notification-container');
    const notificationBadge = document.querySelector('.notification-badge');
    const notificationMenu = document.querySelector('.notification-menu');
    
    notificationContainer.addEventListener('click', function(e) {
        notificationMenu.classList.toggle('active');
        if (notificationBadge) {
            notificationBadge.style.display = 'none';
        }
        e.stopPropagation();
    });

    document.addEventListener('click', function(e) {
        if (!notificationContainer.contains(e.target)) {
            notificationMenu.classList.remove('active');
        }
    });
});

const theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}