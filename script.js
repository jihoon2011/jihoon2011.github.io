const bg = document.querySelector('.bg');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;

    const x = e.clientX - innerWidth / 2;
    const y = e.clientY - innerHeight / 2;

    const rotateX = (-y / innerHeight) * 10; // 위아래
    const rotateY = (x / innerWidth) * 10;   // 좌우

    bg.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;
});

document.addEventListener('mouseleave', () => {
    bg.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
    `;
});
