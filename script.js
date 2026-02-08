document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('reveal-btn');
    const info = document.getElementById('contact-info');

    if (btn && info) {
        btn.addEventListener('click', () => {
            const isHidden = info.classList.toggle('hidden');
            btn.textContent = isHidden ? 'Contact Me' : 'Hide Details';
        });
    }
});