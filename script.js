//your JS code here. If required.
   let currentAudio = null;

    function playSound(fileName) {
      // stop currently playing
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio('sounds/' + fileName);
      currentAudio.play();
    }

    function stopSound() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }

    document.getElementById('buttons').addEventListener('click', function(event) {
      const target = event.target;
      if (target.classList.contains('btn')) {
        const soundFile = target.getAttribute('data-sound');
        if (soundFile) {
          playSound(soundFile);
        }
      }
      else if (target.classList.contains('stop')) {
        stopSound();
      }
    });