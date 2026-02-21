const bg = document.querySelector('.bg');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    const rotateX = (-y / window.innerHeight) * 6; // 각도도 살짝 줄임
    const rotateY = (x / window.innerWidth) * 6;

    bg.style.transform = `
        perspective(1000px)
        scale(0.85)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;

    bg.style.filter =
        `drop-shadow(${ -rotateY * 2 }px ${ rotateX * 2 }px 50px rgba(0,0,0,0.7))`;
});

bg.addEventListener('mouseleave', () => {
    bg.style.transform = `
        perspective(1000px)
        scale(0.85)
        rotateX(0deg)
        rotateY(0deg)
    `;

    bg.style.filter =
        `drop-shadow(0 20px 40px rgba(0,0,0,0.6))`;
});

bg.addEventListener('click', () => {
    window.location.href = "https://chzzk.naver.com/64d76089fba26b180d9c9e48a32600d9";
});
