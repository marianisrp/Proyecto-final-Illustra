---
description: "Use when editing HTML, CSS, or frontend components in this project. Enforce SUIT CSS naming conventions and avoid BEM class names."
applyTo: ["**/*.html", "**/*.css", "**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"]
---

# SUIT CSS Style Guidelines

- Follow SUIT CSS naming conventions for classes in this project.
- Use component names in PascalCase, such as .Header, .Grid, .Artist-card, .Timeline-shell.
- Use component-element names with a single hyphen, such as .Header-nav, .Grid-item, .Era-p, .Footer-copy.
- Use state classes with the .is-state pattern, such as .Timeline-item.is-active or .Header-button.is-active.
- Do not use BEM syntax such as .block__element or .block--modifier.
- For simple content elements, prefer a name based on the HTML tag when it is clear and useful, for example .Era-p, .Grid-h2, .Footer-li.
- Avoid abstract or visual-role names such as .Era-kicker when a tag-based name is more consistent.
- Keep HTML and CSS selectors aligned. If a class is renamed in markup, update the matching selector in the stylesheet.
- Prefer simple, component-based classes over deeply nested selectors.
- Avoid tag selectors for component styling when a class is already available.
- Use a structure like this:

```html
<header class="Header">
    <h1 class="Header-h1">
        <a class="Header-a" href="index.html">Ilustradas</a>
    </h1>
    <nav class="Header-nav">
        <ul class="Nav-ul">
            <li class="Nav-li">
                <a class="Nav-a" href="artistas.html">Artistas</a>
            </li>
        </ul>
    </nav>
    <button class="Header-button is-active">Acción</button>
</header>
```

