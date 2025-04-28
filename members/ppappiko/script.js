// 페이지가 열리면 콘솔에 환영 메시지 출력
console.log('자기소개 페이지에 오신 걸 환영합니다!');

// 나중에 동적으로 내용을 바꾸고 싶을 때 사용
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name');
  const jobElement = document.getElementById('job');
  const introElement = document.getElementById('intro');

  // 필요하면 이 부분을 통해 값 변경 가능
  // nameElement.textContent = '너의 이름';
  // jobElement.textContent = '너의 직업';
  // introElement.innerHTML = '너의 간단한 소개';
});
