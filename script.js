function playSound(note) {
  const audio = new Audio();
  audio.src = `audio/${note}.mp3`;
  audio.play();
}
