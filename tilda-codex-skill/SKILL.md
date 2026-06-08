---
name: tilda-codex-skill
description: Build safe HTML, CSS, and vanilla JavaScript modifications for Tilda websites. Use when Codex needs to customize standard Tilda blocks, Zero Block, product catalogs, product cards, product popups, forms, menus, popups, animations, scoped CSS, dynamic DOM updates, MutationObserver behavior, or explain exactly where to paste code in Tilda.
---

# Tilda Modification Skill

Use this skill to create practical, paste-ready HTML/CSS/JS customizations for Tilda sites while keeping changes scoped, reversible, and resilient to Tilda's dynamic rendering.

## Core Workflow

1. Identify the target: standard block, Zero Block, catalog/card, product popup, form, menu, popup, or animation.
2. Ask for the page URL, block ID, or exported HTML only if selectors cannot be inferred safely.
3. Never invent exact Tilda selectors. Use exact selectors only from user-provided HTML or known page context.
4. Mark block-dependent selectors as examples with comments such as `/* replace with your block id */`.
5. Scope every CSS and JS change to one page area, preferably `#recXXXXXX`, `.t-rec[data-record-type="..."]`, or a custom wrapper.
6. Prefer vanilla JS. Do not add jQuery, libraries, build tools, or external dependencies unless the user explicitly asks.
7. Account for dynamic loading: initialize on `DOMContentLoaded`, `window.load`, Tilda events when available, and use `MutationObserver` for catalogs, popups, and asynchronously rendered elements.
8. Prevent duplicate injected elements with `data-*` markers and existence checks.
9. Explain where to paste code in Tilda: page settings, site settings, HTML block, Zero Block custom code, or specific element settings.
10. Finish with a desktop/tablet/mobile check plan.

## Output Rules

- Write final guidance in Russian unless the user requests another language.
- Provide code ready to paste into Tilda.
- Separate CSS and JS when the insertion place differs.
- Include a short "Куда вставить" section before or after code.
- Include assumptions and selector notes when selectors are approximate.
- Do not promise that a selector works for every Tilda block.

## Resource Map

Load only the files needed for the task:

- `references/tilda-insertion-points.md`: where to paste code in Tilda.
- `references/selector-safety.md`: selector rules and scoped CSS guidance.
- `references/dynamic-dom.md`: initialization, MutationObserver, and duplicate prevention.
- `snippets/`: paste-ready reusable CSS/JS patterns.
- `examples/`: complete applied examples for common Tilda modifications.
- `checklists/responsive-qa.md`: desktop/tablet/mobile verification checklist.

## Default Response Shape

Use this structure for implementation answers:

```markdown
**Что меняем**
Коротко описать цель и область действия.

**Куда вставить**
Указать точное место в Tilda.

**Код**
[готовый код]

**Что заменить**
Перечислить block ID, классы, тексты, ссылки, цвета.

**Проверка**
Краткий чеклист desktop/tablet/mobile.
```

## Safety Defaults

- Use IIFEs for JS to avoid global variables.
- Use `data-tilda-codex-*` attributes for injected nodes and init markers.
- Use `CSS.escape` when building selectors from IDs or dynamic values, with a fallback if needed.
- Avoid broad selectors such as `.t-card`, `.t-btn`, `.t-input`, `.t-popup` unless scoped to a specific block.
- Avoid editing generated inline styles unless there is no safer target.
- Avoid `setInterval`; prefer event hooks and observers. If polling is unavoidable, stop it after a short timeout.
- Keep animations respectful: honor `prefers-reduced-motion`.

