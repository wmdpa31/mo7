window.onload = () => {
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("bgm");

  // 초기 상태는 play_start.png
  playButton.src = "img/play_start.png";

  playButton.addEventListener("click", function () {
    if (audio) {
      // 현재 오디오가 재생 중인지 여부를 확인
      if (audio.paused) {
        // 오디오가 멈춰있으면 재생
        audio.play().catch((error) => {
          console.error("오디오 재생 중 오류 발생:", error);
        });
        playButton.src = "img/play_stop.png"; // 버튼 이미지를 play_stop.png로 변경
      } else {
        // 오디오가 재생 중이면 정지
        audio.pause();
        audio.currentTime = 0; // 재생 위치를 처음으로 설정
        playButton.src = "img/play_start.png"; // 버튼 이미지를 play_start.png로 변경
      }
    } else {
      console.error("Audio element not found.");
    }
  });
};
