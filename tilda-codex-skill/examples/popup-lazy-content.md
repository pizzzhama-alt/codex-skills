# Попап: добавить контент после динамической отрисовки

**Куда вставить**

Вставьте JS в HTML перед `</body>` в настройках страницы. Для попапов это надежнее, потому что разметка часто появляется или меняется после действия пользователя.

**Что заменить**

- `.example-popup` - примерный селектор попапа.
- `.example-popup-content` - примерный селектор контейнера внутри попапа.

```html
<script>
(function () {
  'use strict';

  var popupSelector = '.example-popup';
  var contentSelector = '.example-popup-content';

  function enhance() {
    document.querySelectorAll(popupSelector).forEach(function (popup) {
      var content = popup.querySelector(contentSelector);
      if (!content) return;
      if (content.querySelector('[data-tilda-codex-popup-extra]')) return;

      var extra = document.createElement('div');
      extra.setAttribute('data-tilda-codex-popup-extra', '1');
      extra.textContent = 'Нужна помощь с выбором? Напишите нам в чат.';
      extra.style.marginTop = '16px';
      extra.style.fontSize = '14px';
      extra.style.lineHeight = '1.4';

      content.appendChild(extra);
    });
  }

  function init() {
    enhance();

    if (document.body.dataset.codexPopupObserverReady === '1') return;
    document.body.dataset.codexPopupObserverReady = '1';

    new MutationObserver(enhance).observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
</script>
```

