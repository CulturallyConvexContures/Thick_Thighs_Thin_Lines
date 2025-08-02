# 🎨 Moxie’s CSS Cheat Sheet – *Style Order, Tips, and Layout Wisdom*

Use this scroll as your **style structure reference** — so every box, button, and bone is placed with intention.

---

## ✅ CSS Style Flow (Recommended Order)

| 🔢 Order | 🎯 Purpose                     | 🧩 What You Put Here                         |
|---------|-------------------------------|----------------------------------------------|
| 1️⃣     | **Reset + Base Styles**       | `* { box-sizing: border-box; }`, `body {}`   |
| 2️⃣     | **Typography**                | Headings, paragraphs: `.title`, `h1`, `p`    |
| 3️⃣     | **Layout Containers**         | Boxes, wrappers, sections: `.box`, `.main`   |
| 4️⃣     | **Interactive Elements**      | Buttons, inputs: `button`, `.btn-secondary`  |
| 5️⃣     | **Display / Output Elements** | Result areas, outputs: `#resultText`, `.log` |
| 6️⃣     | **Utility / Theme Classes**   | Flavor & rarity: `.common`, `.epic`, `.glow` |
| 7️⃣     | **Responsive Tweaks**         | `@media` queries for screens/tablets         |

---

## 🧠 "Where Do I Put This?" Guide

| If you're styling...      | Use class like...     | Put it in section...        |
|---------------------------|------------------------|------------------------------|
| A wrapper or background box | `.box`, `.container`   | Layout Containers            |
| A new heading             | `.subtitle`, `h2`      | Typography                   |
| A new button              | `.secondary-button`    | Interactive Elements         |
| A result display area     | `.output`, `#resultBox`| Display / Output Elements    |
| Rarity or effect flavor   | `.epic`, `.bounce`     | Utility / Theme Classes      |

---

## 📌 Naming Conventions

- `.box-thing` → general layout
- `.btn-thing` → buttons
- `.text-thing` → typography
- `.theme-thing` → color, rarity, effect
- `#thing` → uniquely targeted element (1 per page)

---

## ✨ CSS Tips from the Dojo

- ✅ **Last rule wins** if selectors are equal
- ✅ **More specific selector wins** (`#id` > `.class` > `tag`)
- ✅ `vw` = viewport width (great for mobile font sizes)
- ✅ `clamp(min, preferred, max)` = fluid, safe scaling
- ✅ Use `transition:` for smooth hover/tap effects
- ✅ Use comments to section your CSS (`/* 🔠 Typography */`)

---

## 🧱 Sample Section Labels for Your Stylesheet

```css
/* 🌌 Reset & Base Styles */
body { ... }

/* 🔠 Typography */
.title { ... }

/* 📦 Layout Containers */
.box { ... }

/* 🎯 Interactive Elements */
button { ... }

/* 🎲 Output Elements */
#resultText { ... }

/* 🧬 Theme / Flavor Classes */
.common { ... }

/* 📱 Responsive Tweaks */
@media (min-width: 600px) { ... }
```

---

## 🧘 Flow Reminder

When you add something new:
- ✍️ **Text/Title?** → Typography
- 📦 **Box/Wrapper?** → Layout Containers
- 🌀 **Effect/Rank?** → Utility / Theme
- 🎯 **Clickable?** → Interactive Elements
- 💡 **Responsive rule?** → Bottom of scroll (media query section)

---

**Scroll certified by Moxie. Adjust, remix, and chew wisely.**
