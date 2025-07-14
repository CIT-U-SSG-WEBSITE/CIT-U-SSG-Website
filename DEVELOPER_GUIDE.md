# 🛠 Developer Guide: Design Consistency and Workflow

Welcome! This guide outlines how we build and design **consistently** across the project. It covers **colors, fonts, text sizes, components**, and **workflow practices**.


> 📌 **Primary Reference**:  
Always refer to the [Figma Design System](https://your-figma-link-here.com) — this is the **source of truth** for how components and pages should look. All color variables listed below are based on the **Figma design tokens**.

# 🛠 Developer Guide: Design Consistency and Workflow

Welcome! This guide outlines how we build and design **consistently** across the project. It covers **colors, fonts, text sizes, components**, and **workflow practices**.

---

## 🔃 Git Workflow

- **Always checkout the `dev` branch** before starting work:
    ```bash
    git checkout dev
    ```

- Commit and push only to the **dev** branch:
    ```bash
    git add .
    git commit -m "Your commit message"
    git push origin dev
    ```

---

## 🔑 Environment Setup

- Create a .env.local file within `/ssg-app`.
- Ask the project leader for the environment variables to be placed inside the .env.local file.

---

## 🎨 Colors

**Use ONLY these CSS variables for colors (defined in Figma and Tailwind config):**

```
--color-maroon: var(--maroon);
--color-maroon-light: var(--maroon-light);
--color-light-neutral: var(--light-neutral);
--color-dark-neutral: var(--dark-neutral);
--color-gold: var(--gold);
--color-gold-dark: var(--gold-dark);
--color-near-white: var(--near-white);
```

### ✅ Text Colors
- Use `--color-dark-neutral for most body text.`
- On dark backgrounds, use `--color-light-neutral.`

### ✅ Background Colors
- Use `--color-light-neutral` for the main background.
- Use `--color-near-white` for cards and secondary buttons.

### ✅ Background Gradients
```css
.bg-maroon_gradient {
  @apply bg-gradient-to-tr from-maroon to-maroon-light;
}

.bg-gold_gradient {
  @apply bg-gradient-to-tr from-gold-dark to-gold;
}
```

---
## 🅰️ Fonts

**Use ONLY these CSS variables for fonts (defined in Figma and Tailwind config):**

```css
--font-sans: var(--font-open-sans);
--font-serif: var(--font-merriweather);
```

- Use `--font-serif for headings`.
- Use `--font-sans for body text`.

---
## 🔤 Text Sizes
**Use ONLY these Tailwind CSS text size classes:**
- `text-xs`
- `text-sm`
- `text-base`
- `text-lg`
- `text-xl`
- `text-2xl`
- `text-3xl`
- `text-4xl`

Visit the [Tailwind Typography documentation](https://tailwindcss.com/docs/font-size) for more details.

---
## 📐 Components

**Always use Tailwind CSS for styling.**
This project uses shadcn/ui components stored in
```
/components/ui
```
**But**: Not all components are provided by shadcn or may need to be extended or redesigned. In such cases:

### 🧠 Component Decision Flow
```pgsql
Do you need a component? → Yes
└── Is it already in /components? → Yes → Use it
    └── No → Is it available in ShadCN?
        └── Yes → Use it
        └── No → Build it using Tailwind CSS (follow the Figma design)
```
🔁 **Figma** remains the design guide when modifying or creating components.

---
## 🗂 Page-Specific Components
For every route in `app/`, if a page needs its own component(s), create a local component directory under /components.

Example:
- Route: `/actions/sessions`
- Needs: `SessionCard.tsx`
- Create: `components/Sessions/SessionCard.tsx`

---
## 🔃 Git Workflow
- Always commit to the `dev` branch.
- When done with a feature, open a pull request.
- Do not open a PR for every commit. A feature may (and often should) have multiple commits.
- Write clear, descriptive commit messages (e.g., feat: add session card for session overview page).

---
## 🙌 Communication & Ownership
- Trust your instincts. If something feels off — ask, clarify, or propose a solution.
- Initiatives are welcome — just inform the team when pushing changes.
- Clarity and communication are part of the process, not exceptions.

---

## Let’s build with consistency, clarity, and care.
