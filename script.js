const openBtn = document.getElementById('openBtn');
const intro = document.getElementById('inicio');
const content = document.getElementById('conteudo');
const heartsLayer = document.getElementById('hearts');
const backTop = document.getElementById('backTop');

openBtn.addEventListener('click', () => {
  intro.classList.add('hidden');
  content.classList.remove('hidden');
  backTop.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  createHeartBurst();
});

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > 0.25 ? '♥' : '♡';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 24}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;
  heartsLayer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}

function createHeartBurst() {
  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 110);
  }
}

setInterval(createHeart, 650);

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
