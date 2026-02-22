const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {
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

        card.style.filter =
            `drop-shadow(${ -rotateY * 2 }px ${ rotateX * 2 }px 40px rgba(0,0,0,0.7))`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `
            perspective(800px)
            scale(0.9)
            rotateX(0deg)
            rotateY(0deg)
        `;
        card.style.filter =
            `drop-shadow(0 15px 30px rgba(0,0,0,0.6))`;
    });

    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if (link) window.location.href = link;
    });

});
