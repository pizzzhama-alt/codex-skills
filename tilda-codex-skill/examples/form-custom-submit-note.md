# Форма: добавить пояснение после отправки

**Куда вставить**

Вставьте код в блок T123 после блока с формой или в HTML перед `</body>` в настройках страницы.

**Что заменить**

- `#rec123456` - ID блока с формой.
- `form` - селектор формы, если в блоке несколько форм.
- Текст сообщения.

```html
<script>
(function () {
  'use strict';

  var rootSelector = '#rec123456';

  function init() {
    var root = document.querySelector(rootSelector);
    if (!root) return;

    root.querySelectorAll('form').forEach(function (form) {
      if (form.dataset.codexSubmitNoteReady === '1') return;
      form.dataset.codexSubmitNoteReady = '1';

      form.addEventListener('submit', function () {
        window.setTimeout(function () {
          if (form.querySelector('[data-tilda-codex-submit-note]')) return;

          var note = document.createElement('div');
          note.setAttribute('data-tilda-codex-submit-note', '1');
          note.textContent = 'Если письмо не пришло в течение 5 минут, проверьте папку "Спам".';
          note.style.marginTop = '12px';
          note.style.fontSize = '14px';
          note.style.lineHeight = '1.4';

          form.appendChild(note);
        }, 300);
      });
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

