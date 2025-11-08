// === PRIVATE ACCESS CHECK ===
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token'); // ?token=your-secret
const SECRET_TOKEN = "sheetal123"; // change this to your secret token

if (token === SECRET_TOKEN) {
  document.getElementById('private-check').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
} else {
  document.getElementById('private-check').classList.remove('hidden');
  document.getElementById('main-content').classList.add('hidden');
}

// === COUNTDOWN TIMER ===
const countdownDate = new Date("Nov 9, 2025 00:00:00").getTime(); // Sheetal's birthday
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    daysEl.innerText = hoursEl.innerText = minutesEl.innerText = secondsEl.innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  daysEl.innerText = days.toString().padStart(2,'0');
  hoursEl.innerText = hours.toString().padStart(2,'0');
  minutesEl.innerText = minutes.toString().padStart(2,'0');
  secondsEl.innerText = seconds.toString().padStart(2,'0');
}
setInterval(updateCountdown, 1000);

// === MUSIC TOGGLE ===
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "Pause Music";
  } else {
    music.pause();
    musicBtn.innerText = "Play Music";
  }
});

// === HEART RAIN EFFECT ===
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '💖';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (20 + Math.random()*30) + 'px';
  heart.style.animationDuration = (4 + Math.random()*3) + 's';
  document.querySelector('.hearts').appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 300);
