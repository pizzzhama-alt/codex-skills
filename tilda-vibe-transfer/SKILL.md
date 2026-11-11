---
name: tilda-vibe-transfer
description: Используй для переноса готового локального блока в Vibe Block Tilda через MCP с сохранением классов, внешнего вида, поведения и удобного редактирования контента.
---

# Transfer local layouts to a Tilda Vibe Block

Transfer the finished block; do not create a new design. Match the source as closely as possible and keep its content convenient to edit through Tilda's Content panel. The user creates the design and local implementation separately.

## Sources and rules

- Discover the available Tilda MCP tools. Before reading the source for transfer, call `website_import_instructions` and follow the current import rules. For subsequent changes to an existing Vibe Block, also call `vibe_block_generation_instructions`; for a form that submits data, call the relevant form instructions. Inspect the current tool schemas; do not invent parameters or capabilities.
- Apply import rules to a finished source. Instructions for generating a new design do not justify silently replacing source classes, fonts, or behavior. If MCP constraints conflict with the user's requirements, stop on the affected decision, explain the verified options, and agree on any deviation.
- Identify the source project, section, and target page from context and tools. If several candidates remain, ask specifically for the missing detail. Read project instructions, avoid unnecessary source edits, and leave unrelated blocks alone.
- Inventory the HTML/DOM, CSS, classes, fonts, images, breakpoints, states, and dependencies. For components and build-based projects, run the project as needed and inspect the rendered DOM and working states. Record behavior before changes, including animations, keyboard interaction, and mobile gestures. A screenshot alone does not establish behavior.

## Prepare the transfer

- Preserve all original classes and their roles. You may add an isolating root and scope CSS and JavaScript to the block without renaming source classes. Check selectors, IDs, keyframes, global rules, and dependencies for conflicts with Tilda and neighboring blocks. If an original class must be changed or removed, explain why and obtain agreement beforehand.
- Reproduce all states and effects. Inspect source libraries and versions, identify what is already loaded on the target page, and check version compatibility. Ensure each dependency is ready before initializing block code. Follow current import rules for finished sources: if they allow the required library from a public CDN with a pinned version, retain it; load shared dependencies once in the appropriate scope. Read and preserve existing head code before changing it; site-wide changes require appropriate authorization. Follow current MCP security and technical restrictions and license terms. Do not bypass restrictions with external scripts or load a dependency twice. If a library, loading method, or effect is unavailable, present options and obtain agreement before replacing or simplifying it. Do not assume a library is permitted merely because it exists in the source.
- Handle images and fonts according to current import instructions; use `upload_image` for supported resources and URLs returned by Tilda. Check other file types and report anything that cannot be transferred. Do not include secrets in public code or extract the user's keys from configuration.
- Map editable content: text, links, images, and repeated entities. For each repetition identify the container for the entire group and all its fields; see [references/editable-content.md](references/editable-content.md). Make minimal HTML structure changes for editability when needed, preserving classes, appearance, and behavior.
- Before writing, clarify only missing material decisions, including unavailable functionality and proposed class changes. Do not publish a page without the user's explicit request or permission. Sending test form submissions requires separate permission.

## Write and verify

1. Check the project, page, and block order. For an existing Vibe Block, read its current code immediately before changing it and preserve unrelated content. For a new block, use the current MCP workflow. Check every write response; read the saved code back and compare it to the prepared version to detect truncation or data loss.
2. Compare the original with the Tilda page or available preview at widths representing the source ranges, including narrow and wide screens. Check geometry, typography, images, states, animations, responsiveness, keyboard and touch interaction, resource loading, console errors, and effects on neighboring blocks. Account for `prefers-reduced-motion`. Fix and recheck within the agreed scope.
3. In the actual Tilda editor, check the Content panel: edit text, links, and images; add/duplicate and delete each kind of repeated group together with its fields. Check the added item's appearance and behavior in preview. Test in the draft. Before restoring only your own test changes, reread the current state and do not overwrite concurrent user edits. Inspecting the DOM or an MCP response alone does not prove the editor offers these operations.
4. Report the project, page and block, what was transferred, where to edit content, tested widths and actions, agreed differences, and precisely what could not be checked or transferred. Do not claim functionality or editability without actual verification. If the editor is unavailable, say so and do not present group editing as verified.
