const cards = document.querySelectorAll('.card');
const centerImg = document.querySelector('.center-rotating');

cards.forEach(card => {

    // 카드 마우스 오버 3D 회전
    card.addEventListener('mousemove', (e) => {
        if(card.classList.contains('center-card')) return; // 중앙 카드는 회전 제외

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

    card.addEventListener('click', (e) => {
        if(e.target.classList.contains('center-rotating')) return; // 중앙 이미지 클릭 시 무시
        const link = card.dataset.link;
        if(link) window.location.href = link;
    });
});

// 중앙 이미지 클릭 이벤트
centerImg.addEventListener('click', () => {
    window.open('https://chzzk.naver.com/b5ed5db484d04faf4d150aedd362f34b','_blank');
});
