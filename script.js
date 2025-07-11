const input = document.getElementById('age');
const cake = document.getElementById('cake');
const birthdayMessage = document.getElementById('birthdayMessage');
const quote = document.querySelector('.quote');
const codeInput = document.getElementById('code');
const codeScreen = document.getElementById('codeScreen');
const mainContent = document.getElementById('mainContent');
const codeError = document.getElementById('codeError');

const secretCode =  'A8-2001!';

codeInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const enteredCode = codeInput.value.trim();
    if (enteredCode === secretCode) {
      codeScreen.style.display = 'none';
      mainContent.style.display = 'block';
      codeError.style.display = 'none';
    } else {
      codeError.style.display = 'block';
      codeError.textContent = ' Wrong code. Try again.';
    }
  }
});

function createConfetti() {
  const colors = ['#ff5722', '#ff9800', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${-20 + Math.random() * -100}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.width = `${6 + Math.random() * 4}px`;
    confetti.style.height = `${6 + Math.random() * 4}px`;
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

input.addEventListener('input', () => {
  const age = parseInt(input.value) || 0;
  cake.innerHTML = '';
  const cakeWidth = cake.offsetWidth;
  const margin = 12;
  const spacing = (cakeWidth - 2 * margin) / Math.max(1, age - 1);

  birthdayMessage.style.display = 'none';
  quote.style.display = 'none';

  for (let i = 0; i < age && i < 100; i++) {
    const candle = document.createElement('div');
    candle.className = 'candle';
    const x = margin + spacing * i;
    candle.style.left = `${x}px`;
    candle.style.transform = 'translateX(-50%)';

    const heightVariation = Math.random() * 4 - 2;
    candle.style.height = `${14 + heightVariation}px`;
    candle.style.bottom = '100%';

    const flame = document.createElement('div');
    flame.className = 'flame';
    const flameSize = 0.9 + Math.random() * 0.3;
    flame.style.transform = `translateX(-50%) scale(${flameSize})`;

    if (Math.random() > 0.6) {
      const drip = document.createElement('div');
      drip.className = 'wax-drip';
      drip.style.width = `${2 + Math.random() * 2}px`;
      drip.style.left = `${1 + Math.random() * 2}px`;
      drip.style.top = '0';
      drip.style.animationDelay = `${Math.random() * 2}s`;
      candle.appendChild(drip);
    }

    candle.appendChild(flame);
    cake.appendChild(candle);

    setInterval(() => {
      candle.style.transform = `translateX(-50%) rotate(${Math.random() * 3 - 1.5}deg)`;
    }, 2000 + Math.random() * 3000);
  }

  if (age > 0) {
    setTimeout(() => {
      birthdayMessage.style.display = 'block';
    }, 1000);

    setTimeout(() => {
      quote.style.display = 'block';
      createConfetti();
    }, 2500);
  }
});
