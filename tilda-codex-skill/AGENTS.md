# Repository Instructions

This repository contains a Codex skill for safe Tilda HTML/CSS/JS customization.

## Editing Rules

- Keep `SKILL.md` concise and procedural.
- Put detailed guidance in `references/`.
- Put paste-ready code in `snippets/`.
- Put full scenario implementations in `examples/`.
- Put verification flows in `checklists/`.
- Do not add generic README files or process notes unless explicitly requested.

## Tilda-Specific Rules

- Do not invent exact Tilda selectors.
- Mark block-dependent selectors as approximate.
- Scope CSS and JS to a block, page area, or custom wrapper.
- Prefer vanilla JS and no external dependencies.
- Include insertion instructions for every example.
- Account for Tilda's dynamic DOM rendering, especially catalogs, product popups, forms, and menus.
- Prevent duplicated injected elements.
- Include responsive QA for desktop, tablet, and mobile.

## Language

Write user-facing instructions and examples in Russian by default. Keep code comments concise and practical.

