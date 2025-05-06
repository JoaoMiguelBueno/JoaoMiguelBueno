document.querySelector('.prev-btn').addEventListener('click', function() {
  moveCarousel(-1);
});

document.querySelector('.next-btn').addEventListener('click', function() {
  moveCarousel(1);
});

let currentIndex = 0;

function moveCarousel(direction) {
  const videos = document.querySelectorAll('.video-container iframe');
  const totalVideos = videos.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalVideos - 1; // Vai para o último vídeo
  } else if (currentIndex >= totalVideos) {
    currentIndex = 0; // Vai para o primeiro vídeo
  }

  const offset = -currentIndex * 100; // Cada vídeo ocupa 100% da largura
  document.querySelector('.video-container').style.transform = `translateX(${offset}%)`;
}
