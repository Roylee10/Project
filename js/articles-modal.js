const articleModal = document.getElementById('articleModal');
const articleScroll = document.getElementById('articleModalScroll');
const articleKicker = document.getElementById('articleModalKicker');

function openArticle(articleId, kicker) {
  if (!articleModal) return;

  document.querySelectorAll('.modal-article').forEach((article) => {
    article.classList.remove('active');
  });

  const article = document.getElementById(articleId);
  if (!article) return;

  article.classList.add('active');
  if (articleKicker) articleKicker.textContent = kicker || '';
  articleModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (articleScroll) articleScroll.scrollTop = 0;
}

function closeArticle() {
  if (!articleModal || !articleModal.classList.contains('active')) return;
  articleModal.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.article-card[data-article]').forEach((card) => {
  card.addEventListener('click', () => {
    const tag = card.querySelector('.article-tag');
    openArticle(card.dataset.article, tag ? tag.textContent.trim() : '');
  });
});

document.querySelectorAll('[data-close-article]').forEach((el) => {
  el.addEventListener('click', closeArticle);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeArticle();
});
