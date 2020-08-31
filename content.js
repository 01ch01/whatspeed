// _1QUKR

const interval = setInterval(() => {
  const header = document.querySelector('._1QUKR');
  if (header) {
    clearInterval(interval);

    const button = document.createElement('button');
    button.innerHTML = '2x';
    button.classList.add('speedButton');

    button.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio');
      audios.forEach((audio) => {
        audio.playbackRate = 2;
      });
    });

    header.appendChild(button);
  }

  // prevents tab to close unintentionally
  window.onbeforeunload = function () {
    return 'Quit window?';
  };
}, 1000);
