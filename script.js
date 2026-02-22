const cards = document.querySelectorAll('.card');
const centerImg = document.querySelector('.center-rotating');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {
        // top-card는 회전 제외 가능, 원하면 아래 주석 처리
        if(card.classList.contains('top-card')) return;

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
        card.style.transform = `perspective(800px) scale(0.9) rotateX(0deg) rotateY(0deg)`;
        card.style.filter = `drop-shadow(0 15px 30px rgba(0,0,0,0.6))`;
    });

    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if(link) window.location.href = link;
    });
});

// 중앙 이미지 클릭
centerImg.addEventListener('click', () => {
    window.open('https://chzzk.naver.com/b5ed5db484d04faf4d150aedd362f34b','_blank');
});
