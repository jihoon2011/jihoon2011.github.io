const bg = document.querySelector('.bg');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    const rotateX = (-y / window.innerHeight) * 8; // 기울기 조금 줄임
    const rotateY = (x / window.innerWidth) * 8;

    bg.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;

    bg.style.filter =
        `drop-shadow(${ -rotateY * 2 }px ${ rotateX * 2 }px 50px rgba(0,0,0,0.7))`;
});

document.addEventListener('mouseleave', () => {
    bg.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
    `;

    bg.style.filter =
        `drop-shadow(0 20px 40px rgba(0,0,0,0.6))`;
});
