# Динамический DOM в Tilda

Tilda может перерисовывать части страницы после загрузки: каталог, карточки товаров, попапы, формы, меню, lazy-load элементы и Zero Block анимации.

## Базовая инициализация

Использовать несколько безопасных запусков:

```js
function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
  window.addEventListener('load', fn, { once: true });
}
```

Каждая функция должна быть идемпотентной: повторный запуск не должен добавлять дубликаты.

## Защита от дублей

Использовать маркеры:

```js
if (card.dataset.codexBadgeReady === '1') return;
card.dataset.codexBadgeReady = '1';
```

Для вставленных элементов:

```js
if (card.querySelector('[data-tilda-codex-badge]')) return;
```

## MutationObserver

Использовать, когда элементы появляются после загрузки или Tilda перерисовывает список:

```js
const observer = new MutationObserver(() => {
  enhance();
});

observer.observe(root, {
  childList: true,
  subtree: true
});
```

Наблюдать за ближайшим стабильным контейнером, а не всегда за `document.body`. Если стабильного контейнера нет, допустимо наблюдать `document.body`, но обработчик должен быть легким и scoped.

## События

Можно использовать стандартные события браузера. Tilda-specific события использовать только если они подтверждены в проекте или документации, предоставленной пользователем. Не выдумывать названия событий.

