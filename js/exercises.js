const exerciseTabs = document.querySelectorAll('.ex-tab');
const exercisePanels = document.querySelectorAll('.ex-panel');
const exerciseModal = document.getElementById('exerciseModal');
const modalContent = exerciseModal?.querySelector('.exercise-modal__content');

const exerciseData = {
  'art-1': {
    label: 'Арт-терапия',
    title: 'Нарисуй свою тревогу',
    meta: '15–20 мин · краски · с ребёнком',
    body: [
      'Спросите ребёнка: «Если у тревоги был цвет, какой бы он был? А размер? А форма?»',
      'Попросите нарисовать или слепить тревогу так, как она ощущается сейчас. Это не про «правильно» — это про дать эмоции безопасную форму.'
    ],
    steps: [
      'Попросите выбрать цвет и форму тревоги.',
      'Нарисуйте её вместе, не обсуждая результат вслух.',
      'После рисунка спросите: «Что тебе хочется ей сказать?»',
      'В конце можно добавить рядом маленький «маяк» или «защитника».'
    ],
    tip: 'Самое важное — не интерпретировать рисунок за ребёнка. Дайте ему право на собственный язык.'
  },
  'art-2': {
    label: 'Арт-терапия',
    title: 'Маяк',
    meta: '15–20 мин · бумага · безопасный образ',
    body: [
      'Это упражнение помогает ребёнку увидеть, что у него есть опора, даже когда тревога кажется большой и громкой.',
      'Попросите представить лодку, темноту и далёкий свет — и нарисовать его как источник помощи.'
    ],
    steps: [
      'Расскажите короткую историю про лодку и тёмное небо.',
      'Сделайте рисунок: море, ребёнок, маяк и люди/предметы поддержки.',
      'Обсудите: «Кто или что напоминает маяк для тебя?»',
      'Пусть ребёнок дорисует рядом то, что помогает ему чувствовать себя в безопасности.'
    ],
    tip: 'Здесь хорошо работает метафора: ребёнок может говорить о своей тревоге, не называя её напрямую.'
  },
  'art-3': {
    label: 'Арт-терапия',
    title: 'Дыхание-рисование',
    meta: '10–15 мин · фломастеры · спокойный ритм',
    body: [
      'Сначала делаем медленный вдох, затем на выдохе рисуем одну линию. Это объединяет тело и внимание.'
    ],
    steps: [
      'На вдохе — глубоко набираем воздух.',
      'На выдохе — рисуем плавную линию или круг.',
      'Повторяйте 6–10 раз, не торопясь.',
      'Потом спросите: «Какое настроение было у рисунка?»'
    ],
    tip: 'Это очень полезно, когда ребёнок перевозбуждён: движение руки помогает успокоить нервную систему.'
  },
  'breath-1': {
    label: 'Дыхательные',
    title: 'Дыхание животом',
    meta: '5–10 мин · без материалов',
    body: [
      'Это базовая техника: ребёнок дышит ровно и глубоко, а не быстро и поверхностно.',
      'Когда диафрагма работает, тело чаще успокаивается, а тревога становится менее яркой.'
    ],
    steps: [
      'Положите одну руку на живот, одну — на грудь.',
      'Вдох через нос на счёт 4.',
      'Выдох через рот на счёт 6.',
      'Повторите 5–8 циклов.'
    ],
    tip: 'Если ребёнку сложно, используйте образ: «понюхай цветок» и «задуй свечу».'
  },
  'breath-2': {
    label: 'Дыхательные',
    title: 'Квадратное дыхание',
    meta: '2–3 мин · очень простой формат',
    body: [
      'Квадратное дыхание помогает замедлить ум. Это особенно полезно, когда ребёнок слишком «залипает» в тревоге.'
    ],
    steps: [
      'Вдох 4 счёта.',
      'Задержка 4 счёта.',
      'Выдох 4 счёта.',
      'Задержка 4 счёта.',
      'Повторить 4–6 раз.'
    ],
    tip: 'Можно вести пальцем по воображаемому квадрату — это создаёт чувство контроля.'
  },
  'cog-1': {
    label: 'Когнитивные',
    title: 'Ложная пожарная сигнализация',
    meta: '5–10 мин · разговор',
    body: [
      'Тревога иногда срабатывает так же, как пожарная сигнализация: она предупреждает, но делает это слишком громко.',
      'Важный шаг — научить ребёнка видеть разницу между реальной опасностью и тревожным шумом в голове.'
    ],
    steps: [
      'Спросите: «Есть ли реальная опасность сейчас?»',
      'Поговорите о том, что тревога может быть полезной, но иногда она срабатывает слишком рано.',
      'Спросите: «Что бы ты сказал себе сейчас, если бы это был не страх, а обычная мысль?»',
      'Подчеркните: «Тревога — не враг, а сигнал, который можно услышать спокойнее».'
    ],
    tip: 'Здесь важно не спорить с ребёнком и не отмахиваться от тревоги. Нужно показать, что она понятна и управляемая.'
  },
  'cog-2': {
    label: 'Когнитивные',
    title: 'Шкала тревоги',
    meta: '3–5 мин · можно делать любое время',
    body: [
      'Шкала помогает ребёнку увидеть, что тревога меняется. Это снижает ощущение, будто «я всегда тревожусь».'
    ],
    steps: [
      'Спросите: «На сколько тревожно тебе сейчас — от 0 до 10?»',
      'Потом сделайте упражнение.',
      'Снова спросите: «На сколько теперь тревожно?»',
      'Сравните результаты и подведите короткий вывод: «Тревога уменьшилась».'
    ],
    tip: 'Это работает особенно хорошо, когда ребёнок начинает чувствовать, что его состояние можно отслеживать и менять.'
  }
};

exerciseTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    exerciseTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });

    exercisePanels.forEach((panel) => {
      const active = panel.dataset.panel === target;
      panel.classList.toggle('is-active', active);
    });
  });
});

function openExercise(key) {
  const data = exerciseData[key];
  if (!data || !exerciseModal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="exercise-modal__label">${data.label}</div>
    <h3 id="exerciseTitle" class="exercise-modal__title">${data.title}</h3>
    <p class="exercise-modal__meta">${data.meta}</p>
    <div class="exercise-modal__body">
      ${data.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      <ol class="exercise-modal__steps">
        ${data.steps.map((step, index) => `<li><span>${index + 1}</span>${step}</li>`).join('')}
      </ol>
      <div class="exercise-modal__tip"><strong>Совет:</strong> ${data.tip}</div>
    </div>
  `;

  exerciseModal.classList.add('is-open');
  exerciseModal.setAttribute('aria-hidden', 'false');
}

function closeExercise() {
  if (!exerciseModal) return;
  exerciseModal.classList.remove('is-open');
  exerciseModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.ex-head[data-open]').forEach((button) => {
  button.addEventListener('click', () => openExercise(button.dataset.open));
});

document.querySelectorAll('[data-close]').forEach((element) => {
  element.addEventListener('click', closeExercise);
});

document.querySelector('.exercise-modal__close')?.addEventListener('click', closeExercise);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && exerciseModal?.classList.contains('is-open')) {
    closeExercise();
  }
});
