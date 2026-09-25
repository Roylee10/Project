document.querySelectorAll('.ex-card').forEach((card) => {
  card.addEventListener('toggle', () => {
    if (!card.open) return;
    document.querySelectorAll('.ex-card[open]').forEach((other) => {
      if (other !== card) other.open = false;
    });
  });
});
