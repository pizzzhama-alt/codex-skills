---
name: figma-layer-classes
description: Use when implementing or reviewing local HTML/JSX blocks, components, or websites from Figma and exact transfer of layer names to CSS classes matters.
---

# Figma Layer Classes

Use Figma layer names as the source of truth for class names. Preserve each name exactly from the Figma layer to the HTML `class` or JSX `className` value and corresponding CSS selector.

## Workflow

1. **Read the design.** Before calling `get_design_context`, load the required `figma-design-to-code` skill and follow its screenshot and sparse-response requirements. Inspect the project structure and existing naming conventions before editing.
2. **Inventory the selected scope.** Get the selected node's full descendant structure from Figma MCP. Record every layer's exact name, node ID or path, and type. For a site, inventory every implemented section; for a block, inventory the selected frame. Do not infer missing descendants from a screenshot or existing code.
3. **Map meaningful layers.** Give each visible or interactive element represented in the DOM the exact name of its corresponding Figma layer as its class. Text layers are meaningful when they render visible text; apply their class to the corresponding text element. Use the same class for duplicate layer names; do not append numbers or invent disambiguators. A purely technical layer that has no separate rendered or interactive element may be omitted only with a reason in the audit. Do not omit a visible layer merely because its effect can be implemented with a parent style or pseudo-element; document that implementation as a technical omission only when it does not represent a distinct element.
4. **Implement and audit.** Check HTML `class` and JSX `className` values against the inventory. Check every CSS class selector against classes in the markup. Repair mismatches using the Figma name; never make a Figma layer conform to an existing code name without explicit user direction.
5. **Report.** Show a concise layer-to-element/class table and all omissions, mismatches, blockers, and unverified dynamic values in the response. Create or update `figma-class-audit.md` beside the implementation. Preserve unrelated content if the report already exists. For a whole site, make one report covering all implemented sections.

## Naming Rules

- Use no CSS class unless its exact token is a name from the inventoried Figma layers. Do not add BEM, utility, CSS Module, generated, or state classes. Use element selectors, IDs, or `data-*` attributes for behavior that does not have a corresponding Figma layer.
- Do not change spelling, capitalization, punctuation, spacing, or length. Do not normalize names or silently omit a meaningful layer because its name is inconvenient.
- HTML class attributes split tokens on whitespace. If a meaningful layer name contains whitespace, do not split, join, escape, or replace it and do not claim an exact mapping. Mark that layer blocked and report that its name must be resolved in Figma or by the user. Continue only with independent mappings, and mark the overall audit incomplete.
- Preserve punctuation and other non-whitespace characters in the literal class value. Escape the class identifier as required in CSS; escaping syntax in a selector does not authorize changing the HTML/JSX class token.
- For a dynamic `className`, enumerate and verify every possible class token from its expression. If the values cannot be determined, mark the affected mapping unverified and the audit incomplete.
- Treat an explicit request to rename or add classes as a possible change to the naming rule, not as proof that exact transfer still passes. If the request conflicts with exact transfer and does not clearly state that the user is waiving it, explain the conflict and ask whether to authorize the exception. If authorized, record the exception and mark exact-name compliance as waived for those mappings; never label them exact matches or report the exact-name audit as complete. Urgency or a request for readability alone is not confirmation.

## Required Audit

Before calling the audit complete, verify all of the following:

| Check | Pass condition |
|---|---|
| Figma → markup | Every meaningful layer in scope maps to an element with its exact class token, or has a documented technical omission. |
| Markup → Figma | Every literal or dynamic class token is present in the Figma inventory. |
| CSS → markup | Every CSS class selector resolves to a class token used by the markup; escaped selectors are compared by their decoded token. |
| Exceptions | No whitespace-invalid name, inaccessible Figma structure, or unresolved dynamic value is presented as verified. |

An unavailable Figma MCP response is not evidence of the layer structure. Ask for access or a complete layer inventory; do not invent layers or claim the audit passed. Existing code is useful for locating mismatches, not as authority for Figma names.

## Common Rationalizations

| Temptation | Required response |
|---|---|
| “The existing `cta` class is close enough to `CTA/button`.” | Replace it with the exact layer token and escape it in CSS as needed. |
| “The layer has spaces, so I can convert them to hyphens.” | Do not normalize; block that mapping and report it. |
| “The Figma MCP is unavailable, but the screenshot makes the names obvious.” | Request the actual structure or user-provided inventory; report the audit as incomplete. |
| “This helper/state class is only internal.” | Do not add a class without a Figma layer; use a non-class hook or an existing mapped class. |
| “The user wants convenient names, so the exact-name audit can still pass.” | Clarify whether the user is waiving exact transfer; if confirmed, record an exception and do not call that mapping exact. |

## Final Report Shape

Include scope and source node, then a table with `Figma layer`, `DOM element/class`, and `status`. Follow it with `Technical omissions`, `Mismatches fixed`, and `Blocked or unverified`. State **complete** only when every in-scope class is an exact match (or a documented technical omission) and no item remains blocked, waived, or unverified.
