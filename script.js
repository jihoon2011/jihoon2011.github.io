const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / rect.height) * 6;
        const rotateY = (x / rect.width) * 6;

        card.style.transform = `
            perspective(800px)
            scale(0.9)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });

    card.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 768) return;

        card.style.transform = 'scale(0.9)';
    });

    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if (link) window.open(link, '_blank');
    });
});
