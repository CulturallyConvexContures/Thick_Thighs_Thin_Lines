# 🧱 Moxie’s HTML Cheat Sheet – *Structure, Tags, and Layout Flow*

This scroll keeps your structure clean, logical, and mobile-ready.  
Think of it as your **element map** — every tag with a place and purpose.

---

## ✅ HTML Element Order (Recommended Structure)

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- 1️⃣ Metadata & Setup -->
    <meta charset="UTF-8">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
  </head>

  <body>
    <!-- 2️⃣ Visible Content in Intentional Order -->
    <header>...</header>         <!-- Optional: page top bar / branding -->
    <main>...</main>             <!-- Core content (your game, text, etc.) -->
    <section>...</section>       <!-- Subsections, like results/logs -->
    <footer>...</footer>         <!-- Copyright, links, etc. -->
  </body>
</html>
```

---

## 🔠 Commonly Used Tags (And What They Do)

| Tag          | Purpose                          | Notes                                |
|--------------|----------------------------------|--------------------------------------|
| `<!DOCTYPE>` | Declares HTML5 mode              | Always first line                    |
| `<html>`     | Wraps the entire document        | One per page                         |
| `<head>`     | Meta, styles, scripts            | Not visible to users                 |
| `<body>`     | All visible content              | Everything users see                 |
| `<h1>`–`<h6>`| Headings (largest to smallest)   | Use 1 `<h1>` per page max            |
| `<p>`        | Paragraph text                   | Standard block text                  |
| `<button>`   | Clickable button                 | Can use `onclick=""` for JS          |
| `<div>`      | Generic block container          | Great for layout                     |
| `<span>`     | Inline container for styling     | Use inside text                      |
| `<main>`     | Core page content                | Semantic + layout bonus              |
| `<section>`  | Sub-group of content             | Useful for organization              |
| `<footer>`   | Page bottom info                 | Copy, links, credits                 |

---

## 🧩 Layout Tips (Visual Flow)

- 🔽 **Top → Bottom flow** in `<body>`
- 🎯 Start with `h1`, then button or core interactive elements
- 🧱 Wrap groups in `<div>` or `<section>` to style/contain them
- 🪪 Add `id` if you need to target something once (`#resultText`)
- 🎽 Add `class` for reusable styles (`.box`, `.rare`)

---

## 🧠 Naming Conventions

| Element Type      | Example ID/Class Name     |
|-------------------|---------------------------|
| Main Title        | `class="title"`           |
| Result Box        | `id="resultText"`         |
| Click Button      | `class="roll-button"`     |
| Layout Wrapper    | `class="box"` or `"main"` |
| Themed Style      | `class="epic"`            |

---

## ✨ Best Practices

- ✅ Use semantic tags where possible (`<main>`, `<section>`, `<footer>`)
- ✅ Only **one `<h1>`** per page — it's the scroll title
- ✅ Keep your tag nesting clean — indent 2 spaces per level
- ✅ Keep `<script>` and `<link>` inside `<head>` unless it must load last
- ✅ Separate layout (`<div>`, `<section>`) from logic (`<script>`) and style (`<link rel="stylesheet">`)

---

## 📄 Optional Section Labels in HTML

```html
<!-- 🔠 Title & Header -->
<h1 class="title">Moxies 🦴 Bones™</h1>

<!-- 🎯 Button -->
<button onclick="tossBones()">Toss 'em</button>

<!-- 🎲 Result Display -->
<p id="resultText">🎲</p>
```

---

**This is your structure scroll — reference it as you add new sections, features, or polish.**  
Semantic. Intentional. Moxie-approved.
