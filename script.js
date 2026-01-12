document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 메뉴 토글 (공통)
    const menuOpen = document.querySelector('.menu-open-btn');
    const menuClose = document.querySelector('.menu-close-btn');
    const overlay = document.querySelector('.menu-overlay');

    if(menuOpen) {
        menuOpen.addEventListener('click', () => overlay.classList.add('active'));
    }
    if(menuClose) {
        menuClose.addEventListener('click', () => overlay.classList.remove('active'));
    }

    // 2. 자동 슬라이더 (상세 페이지용)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentIndex = 0;
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            slides[currentIndex].classList.add('prev');
            
            currentIndex = (currentIndex + 1) % slides.length;
            
            slides[currentIndex].classList.remove('prev');
            slides[currentIndex].classList.add('active');
            
            setTimeout(() => {
                slides.forEach((s, i) => { if(i !== currentIndex) s.classList.remove('prev'); });
            }, 1000);
        }, 2000); // 속도가 너무 빠르면 2000(2초)으로 조절하세요.
    }

    // 3. 스크롤 애니메이션 (공통)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});


// script.js (메뉴 관련 부분 확인)
document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.querySelector('.menu-open-btn');
    const menuClose = document.querySelector('.menu-close-btn');
    const overlay = document.querySelector('.menu-overlay');

    if(menuOpen && overlay) {
        menuOpen.addEventListener('click', () => {
            overlay.classList.add('active');
        });
    }

    if(menuClose && overlay) {
        menuClose.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }
});

// 스크롤 업 함수
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}





// work.02
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 공통 메뉴 로직 (기존 유지)
    const menuOpen = document.querySelector('.menu-open-btn');
    const menuClose = document.querySelector('.menu-close-btn');
    const overlay = document.querySelector('.menu-overlay');

    if(menuOpen) menuOpen.addEventListener('click', () => overlay.classList.add('active'));
    if(menuClose) menuClose.addEventListener('click', () => overlay.classList.remove('active'));

    // 2. 중앙 감지 스크롤 인터랙션 (Work 02 전용)
    const interactionGallery = document.querySelector('.interaction-gallery');
    
    if (interactionGallery) {
        const scrollItems = document.querySelectorAll('.scroll-item');

        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const centerPoint = viewportHeight / 2;

            scrollItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + (rect.height / 2);

                // 아이템의 중앙이 화면의 중앙 근처(오차범위 150px)에 오면 활성화
                if (Math.abs(centerPoint - itemCenter) < 150) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 실행
    }

    // 3. 기존 페이드인 애니메이션 (공통)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});