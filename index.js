function updateCountdown() {
  const targetDate = new Date('2025-01-01T00:00:00'); // Target date
  const now = new Date();
  const timeDiff = targetDate - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('day').textContent = days;
  document.getElementById('hour').textContent = hours;
  document.getElementById('minute').textContent = minutes;
  document.getElementById('second').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();