# Каталог: добавить бейдж в карточки товаров

**Куда вставить**

Вставьте код в блок T123 после блока каталога или в HTML перед `</body>` в настройках страницы.

**Что заменить**

- `#rec123456` - ID блока каталога.
- `.t-store__card` - примерный селектор карточки, проверьте его в HTML конкретного блока.
- `Хит` - текст бейджа.

```html
<style>
  #rec123456 .t-store__card {
    position: relative;
  }

  #rec123456 [data-tilda-codex-badge] {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 3;
    padding: 6px 10px;
    border-radius: 4px;
    background: #111;
    color: #fff;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 600;
  }
</style>

<script>
(function () {
  'use strict';

  var rootSelector = '#rec123456';
  var cardSelector = '.t-store__card'; // Примерный селектор.

  function enhance(root) {
    root.querySelectorAll(cardSelector).forEach(function (card) {
      if (card.querySelector('[data-tilda-codex-badge]')) return;

      var badge = document.createElement('div');
      badge.dataset.tildaCodexBadge = '1';
      badge.textContent = 'Хит';
      card.appendChild(badge);
    });
  }

  function init() {
    var root = document.querySelector(rootSelector);
    if (!root) return;

    enhance(root);

    if (root.dataset.codexObserverReady === '1') return;
    root.dataset.codexObserverReady = '1';

    new MutationObserver(function () {
      enhance(root);
    }).observe(root, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
  window.addEventListener('load', init, { once: true });
})();
</script>
```

