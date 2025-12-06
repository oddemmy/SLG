document.addEventListener('DOMContentLoaded', () => {
    // Snowfall effect
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = ['❄️', '❅', '❆'][Math.floor(Math.random() * 3)];
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 3 + 5) + 's';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowflake.style.fontSize = (Math.random() * 1 + 0.5) + 'em';

        const container = document.getElementById('snowfall-container');
        if (container) {
            container.appendChild(snowflake);
            setTimeout(() => {
                snowflake.remove();
            }, 8000);
        }
    }

    // Create snowflakes at interval
    setInterval(createSnowflake, 300);

    // Mobile Menu Toggle (Existing Logic)
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll for Anchor Links and Reveal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (menu) menu.classList.add('hidden');
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    });

    document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});
