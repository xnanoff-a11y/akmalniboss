// Tukar tarikh di bawah kepada tarikh korang mula couple: YYYY-MM-DD
const anniversary = new Date("2025-02-14T00:00:00"); // contoh sahaja

function updateCounter(){
  const now = new Date();
  const diff = now - anniversary;
  if (Number.isNaN(anniversary.getTime())) {
    document.getElementById("counter").textContent = "Set tarikh anniversary dalam script.js ♡";
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById("counter").textContent = `${days} days together ♡`;
}
updateCounter();
// BACKGROUND MUSIC

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const openBtn = document.getElementById("openBtn");
const letterLink = document.querySelector('a[href="#letter"]');

async function playMusic() {
    try {
        music.volume = 1;
        await music.play();
        musicBtn.textContent = "⏸ Pause Music";
        console.log("Music is playing!");
    } catch (error) {
        console.error("Music error:", error);
    }
}

// AUTOPLAY MUSIC
window.addEventListener("load", function() {
    music.play().catch(function() {
        console.log("Autoplay blocked by browser");
    });
});
// Klik Love Letter
letterLink.addEventListener("click", playMusic);

// Play / Pause
musicBtn.addEventListener("click", function() {
    if (music.paused) {
        playMusic();
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});