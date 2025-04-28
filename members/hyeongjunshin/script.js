document.addEventListener('DOMContentLoaded', function() {
    // 모든 요소에 페이드인 클래스 추가
    const fadeElements = document.querySelectorAll('.info-item, .gallery-item-1, .gallery-item-2, h2');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // 스크롤 애니메이션 효과
    function checkFade() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element, index) => {
            // 지연 시간을 통해 순차적으로 나타나는 효과
            setTimeout(() => {
                element.classList.add('active');
            }, index * 100);
        });
    }
    
    // 초기 로드 시 애니메이션 실행
    setTimeout(checkFade, 300);

    // 이미지 호버 효과 강화
    const galleryItems1 = document.querySelectorAll('.gallery-item-1');
    const galleryItems2 = document.querySelectorAll('.gallery-item-2');
    
    function addHoverEffect(items) {
        items.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                this.style.borderColor = '#ffcc00';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
                this.style.borderColor = '#8B4513';
            });
        });
    }
    
    addHoverEffect(galleryItems1);
    addHoverEffect(galleryItems2);
    
    // MBTI 설명 툴팁 기능
    const mbtiElement = document.querySelector('.info-item:nth-child(2) p');
    if (mbtiElement) {
        const mbtiDescriptions = {
            'ISTP': 'ISTP: "장인" - 논리적이고 실용적이며 현실적인 문제 해결에 능합니다. 호기심이 많고 자유를 소중히 여깁니다.'
        };
        
        mbtiElement.setAttribute('title', mbtiDescriptions['ISTP'] || '');
        
        // MBTI에 마우스 오버 시 효과
        mbtiElement.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });
        
        mbtiElement.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // "Just do it" 효과
    const justDoItElement = document.querySelector('.info-item:nth-child(6) p');
    if (justDoItElement) {
        justDoItElement.addEventListener('click', function() {
            this.style.color = '#ffcc00';
            this.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.3)';
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'all 0.3s';
            
            setTimeout(() => {
                this.style.color = '';
                this.style.textShadow = '';
                this.style.transform = '';
            }, 1000);
        });
    }
    
    // 노래 추천 효과
    const songElement = document.querySelector('.info-item:nth-child(7) p');
    if (songElement) {
        songElement.addEventListener('click', function() {
            // 새 요소 생성: 가상의 음악 플레이어
            const mockPlayer = document.createElement('div');
            mockPlayer.style.backgroundColor = '#f5f5f5';
            mockPlayer.style.padding = '10px';
            mockPlayer.style.borderRadius = '5px';
            mockPlayer.style.marginTop = '10px';
            mockPlayer.style.display = 'flex';
            mockPlayer.style.alignItems = 'center';
            mockPlayer.style.justifyContent = 'space-between';
                            mockPlayer.innerHTML = `
                <span>실리카겔 - Desert Eagle</span>
                <div>
                    <button id="play-button" style="background: #ffcc00; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; margin-right: 5px;">▶ 재생</button>
                    <button id="link-button" style="background: #eee; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">🔗 링크</button>
                </div>
            `;
            
            // 이미 추가된 플레이어가 없을 경우에만 추가
            if (!document.querySelector('.mock-player')) {
                mockPlayer.classList.add('mock-player');
                this.parentNode.appendChild(mockPlayer);
                
                // 재생 버튼 클릭 이벤트
                document.getElementById('play-button').addEventListener('click', function() {
                    alert('Desert Eagle - 이 기능은 실제로 음악을 재생하지 않습니다. 해당 곡은 유튜브나 음원 사이트에서 찾아보세요.');
                });
                
                // 링크 버튼 클릭 이벤트 - 유튜브로 이동
                document.getElementById('link-button').addEventListener('click', function() {
                    window.open('https://www.youtube.com/watch?v=IWYft_hOIgo', '_blank');
                });
                
                // 5초 후 자동으로 제거
                setTimeout(() => {
                    if (mockPlayer.parentNode) {
                        mockPlayer.parentNode.removeChild(mockPlayer);
                    }
                }, 5000);
            }
        });
    }
    
    // 이미지 슬라이더 효과 (강아지 갤러리)
    const petGallery = document.querySelector('.pet-gallery .gallery');
    if (petGallery) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        petGallery.addEventListener('mousedown', (e) => {
            isDown = true;
            petGallery.style.cursor = 'grabbing';
            startX = e.pageX - petGallery.offsetLeft;
            scrollLeft = petGallery.scrollLeft;
        });
        
        petGallery.addEventListener('mouseleave', () => {
            isDown = false;
            petGallery.style.cursor = 'grab';
        });
        
        petGallery.addEventListener('mouseup', () => {
            isDown = false;
            petGallery.style.cursor = 'grab';
        });
        
        petGallery.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - petGallery.offsetLeft;
            const walk = (x - startX) * 2;
            petGallery.scrollLeft = scrollLeft - walk;
        });
    }
    
    // 이스터 에그: 시크릿 코드
    let secretCode = '';
    const secretPattern = 'justdoit';
    
    document.addEventListener('keydown', function(e) {
        secretCode += e.key.toLowerCase();
        if (secretCode.length > secretPattern.length) {
            secretCode = secretCode.substring(1);
        }
        
        if (secretCode === secretPattern) {
            // 배경 효과 추가
            document.body.style.transition = 'background-color 1s';
            document.body.style.backgroundColor = '#fff6cc';
            
            // 다양한 요소에 애니메이션 효과
            const allElements = document.querySelectorAll('.info-item, .gallery-item-1, .gallery-item-2, h1, h2, h3');
            allElements.forEach(element => {
                element.style.transition = 'all 0.5s';
                element.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 500);
            });
            
            // 특별 메시지 표시
            const message = document.createElement('div');
            message.style.position = 'fixed';
            message.style.top = '50%';
            message.style.left = '50%';
            message.style.transform = 'translate(-50%, -50%)';
            message.style.backgroundColor = '#ffcc00';
            message.style.padding = '20px';
            message.style.borderRadius = '10px';
            message.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
            message.style.zIndex = '1000';
            message.style.textAlign = 'center';
            message.innerHTML = '<h3>✨ 축하합니다! ✨</h3><p>시크릿 메시지를 발견했습니다:<br>"꿈을 향해 도전하세요!"</p>';
            
            document.body.appendChild(message);
            
            // 3초 후 효과 제거
            setTimeout(() => {
                document.body.style.backgroundColor = '';
                document.body.removeChild(message);
            }, 3000);
        }
    });
    
    // 프로필 사진 효과
    const profilePhoto = document.getElementById('main-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        profilePhoto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});