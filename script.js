// Logo rotation on scroll
window.addEventListener('scroll', () => {
    const logo = document.getElementById('logo');
    logo.style.transform = `rotate(${window.scrollY / 10}deg)`;
});

// Parallax effect for donut
window.addEventListener('scroll', () => {
    const parallaxDonut = document.querySelector('.parallax-donut');
    parallaxDonut.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});

// Explosive donut effect
window.addEventListener('scroll', () => {
    const donuts = document.querySelectorAll('.flavor-item img');
    donuts.forEach((donut, index) => {
        if (window.scrollY > donut.offsetTop - window.innerHeight + 200) {
            donut.classList.add('explode');
        }
    });
});
// Rotierendes Logo beim Scrollen
window.addEventListener('scroll', () => {
    const logo = document.getElementById('logo');
    logo.style.transform = `rotate(${window.scrollY / 10}deg)`;
    
});
