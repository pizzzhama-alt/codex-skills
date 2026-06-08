# Zero Block: hover-эффект для кнопки

**Куда вставить**

1. В Zero Block добавьте кнопке CSS class: `codex-hero-button`.
2. Вставьте CSS в настройки страницы -> Дополнительный CSS или в блок T123 на этой странице.
3. Замените `#rec123456` на ID Zero Block.

```html
<style>
  #rec123456 .codex-hero-button {
    transition: transform 180ms ease, box-shadow 180ms ease;
    will-change: transform;
  }

  #rec123456 .codex-hero-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }

  @media (prefers-reduced-motion: reduce) {
    #rec123456 .codex-hero-button {
      transition: none;
    }

    #rec123456 .codex-hero-button:hover {
      transform: none;
    }
  }
</style>
```

**Примечание**

Класс `codex-hero-button` задается вручную в Zero Block. Не привязывайтесь к автогенерируемым классам элемента, если можно добавить свой.

