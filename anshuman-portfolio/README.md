# 🌐 Anshuman Kharbade — Portfolio

A fast, responsive developer portfolio with a **liquid-glass design**: a floating "fluid cloud" header, a widget-style dashboard, springy micro-interactions, and a light/dark theme with a light-and-shadow ray transition.

🔗 **Live:** https://anshumankharbade.netlify.app/

![Portfolio preview](public/og-image.jpg)

## ✨ Highlights

- 🫧 **Liquid glass** surfaces: 20px backdrop blur, translucent fills and light borders over softly drifting ambient light
- ☁️ **Floating cloud header** with a sliding highlight that follows the section you are reading, a live availability pill and a theme switch
- 🧩 **Control-center dashboard**: About, Education, Experience, Strengths and Skills as interactive widgets
- 🖱️ Cards lift on hover with an **inner light that follows the cursor**
- 🌗 **Light / dark theme** that follows the OS, remembers the visitor's choice and never flashes on load
- 🎬 One shared spring (`stiffness: 300, damping: 20`) for every press, hover and scroll reveal
- 🗂️ Project grid (newest first) with a **More projects** button for older work, and a details dialog (frosted glass, Escape to close, focus trap)
- 📬 Contact widget with a working form (Netlify Forms), copy-email and WhatsApp shortcuts
- ♿ Keyboard friendly, WCAG AA contrast in both themes, honours "reduce motion"

## 📈 Performance

Lighthouse, lab test: desktop **100**; mobile from the high 80s to the high 90s, depending on the test machine; accessibility, best practices and SEO are **100** on both.

How it stays fast:

- The hero text is in the first paint (no loading screen, no remote images); everything below the fold is code-split
- Framer Motion loads through `LazyMotion`, so the animation engine arrives after first paint
- The font (Plus Jakarta Sans, 27 KB) is self-hosted and preloaded
- Screenshots are small WebP files (about 10 to 15 KB each)
- Hashed assets are cached for a year (`public/_headers`)

> Scores vary by machine. Measure the **deployed** site in an incognito window, never `npm run dev` (the dev server serves unbundled files and scores far lower).

## 🛠️ Tech stack

| Area | Tools |
|------|-------|
| Framework | React 19, Vite 7 |
| Styling | Tailwind CSS 4 (design tokens in `src/index.css`) |
| Animation | Framer Motion 12 (`LazyMotion`) |
| Icons | React Icons |
| Font | Plus Jakarta Sans (self-hosted) |
| Hosting | Netlify (static site + Netlify Forms) |

## 🚀 Getting started

**Requires Node 20.19+ or 22.12+** (a Vite 7 requirement).

```bash
npm install
npm run dev
```

| Script | What it does |
|--------|--------------|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run analyze` | Production build plus a bundle-size report |
| `npm run lint` | ESLint |

## 📂 Project structure

```
public/
 ┣ _headers              Netlify caching rules
 ┣ fonts/                Plus Jakarta Sans (woff2) and its licence
 ┣ images/               project screenshots (WebP, up to 800px wide)
 ┣ og-image.jpg          link preview card (1200×630)
 ┗ favicon.png, apple-touch-icon.png
src/
 ┣ components/
 ┃ ┣ Navbar.jsx          floating cloud header + mobile menu
 ┃ ┣ Hero.jsx            hero + widget cluster
 ┃ ┣ ControlCenter.jsx   bento grid of widgets
 ┃ ┣ widgets/            About, Education, Experience, Strengths, Skills
 ┃ ┣ Projects.jsx        project grid
 ┃ ┣ ProjectCard.jsx     one project card
 ┃ ┣ ProjectModal.jsx    project details dialog
 ┃ ┣ Contact.jsx         contact widget and form
 ┃ ┣ Footer.jsx
 ┃ ┗ ui/                 GlassCard, StatusPill, ThemeToggle, AmbientBackground, ...
 ┣ constants/            site.js, resume.js, projects.jsx, skills.jsx, social.jsx, navigation.jsx
 ┣ theme/                ThemeProvider (theme + ray transition), ThemeContext
 ┣ hooks/                useActiveSection, useClock
 ┣ lib/motion.js         the shared spring settings
 ┣ App.jsx
 ┣ main.jsx
 ┣ motionFeatures.js     animation engine, loaded after first paint
 ┗ index.css             design tokens and glass utilities
```

## 🎨 Customising

| To change | Edit |
|-----------|------|
| Colours, glass blur and strength, ambient lights, light/dark tokens | top of `src/index.css` |
| Name, role, tagline, email, WhatsApp, time zone, stack chips, header status pill | `src/constants/site.js` |
| Experience, education, strengths and availability | `src/constants/resume.js` |
| About text and the four stat tiles | `src/components/widgets/AboutWidget.jsx` |
| Skills (groups, name, icon, colour, one-line description) | `src/constants/skills.jsx` |
| GitHub / LinkedIn links | `src/constants/social.jsx` |
| Header links (keep the order of the page, top to bottom) | `src/constants/navigation.jsx` |
| Spring feel | `src/lib/motion.js` |

### Keeping the site in sync with your resume

| Resume section | Where it lives |
|----------------|----------------|
| Summary | hero tagline in `src/constants/site.js`, and the About text and stat tiles in `widgets/AboutWidget.jsx` |
| Technical skills | `src/constants/skills.jsx` (one entry per skill group) |
| Professional experience, education, strengths | `src/constants/resume.js` |
| Projects | `src/constants/projects.jsx` |
| Contact details and availability | `src/constants/site.js` and `src/constants/social.jsx` |

### Adding a project

1. Export the screenshot as WebP, about 800px wide and roughly 16:9, and put it in `public/images/`.
2. Add the project at the **top** of the list in `src/constants/projects.jsx` (the list is newest first). It reads these fields:

   `title`, `period` (optional, e.g. `"Jan 2026 - Mar 2026"`), `desc` (card text), `longDesc` (dialog text), `tags`, `live`, `github`, `screenshots` (the first image is used), `highlights` (bullet list), `challenges` (optional second list)
3. That is all. The newest `VISIBLE_PROJECTS` projects (5, set at the top of `src/components/Projects.jsx`) are shown, and older ones move under the **More projects** button automatically, with a count on the button.
4. Wide and narrow cards are chosen automatically so every row of the grid is filled, whatever the number of projects.

## 📬 Contact form

The form posts to **Netlify Forms**. `index.html` contains a hidden copy of the form so Netlify can detect it at deploy time. Its field names must match `Contact.jsx`: `topic`, `name`, `email`, `message` and `bot-field` (a spam trap).

- Submissions appear in the Netlify dashboard under **Forms**
- It does not send anything under `npm run dev`, because there is no Netlify backend locally

## 🌍 Deploying to Netlify

**From Git (recommended):** connect the repository, then use

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |

Do not commit `node_modules/` or `dist/` (`.gitignore` already excludes them). Netlify builds the site itself. If a build fails with a Node version error, add the environment variable `NODE_VERSION=22` in Site settings.

**Drag and drop:** run `npm run build`, then drop the `dist` folder into the Netlify deploy panel.

### ✅ Before you deploy

- [ ] Add your resume as `public/resume.pdf` (the Resume buttons link to `/resume.pdf`)
- [ ] Check the header status texts in `src/constants/site.js` are accurate
- [ ] On a custom domain, update `canonical`, `og:url` and `og:image` in `index.html` (they currently use `anshumankharbade.netlify.app`)

### ✅ After you deploy

- [ ] Submit the contact form once and check the **Forms** tab (if nothing arrives, enable form detection in Site settings)
- [ ] Refresh the cached link preview on [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) or the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Run Lighthouse on the live URL in an incognito window

## 🔧 Troubleshooting

| Problem | Cause and fix |
|---------|---------------|
| `npm warn install-scripts ... esbuild` during install | Harmless. The project installs and builds fine without that optional step. |
| Resume button gives a 404 | `public/resume.pdf` has not been added yet. |
| Contact form does nothing locally | Expected: Netlify Forms only works once deployed. |
| Low Lighthouse score | Make sure you are testing the deployed site (or `npm run preview`), not `npm run dev`, and without browser extensions. |

## ♿ Accessibility and browser support

- Real links for navigation, a skip link, sequential headings, labelled icon buttons
- Dialog, tabs, accordion and menus follow WAI-ARIA patterns; **Escape** closes panels
- Visitors with "reduce motion" turned on get no transform animations
- The theme switch uses the View Transitions API for a circular reveal where available; other browsers switch instantly and still get the ray effect

## 🙏 Credits

- Font: [Plus Jakarta Sans](https://github.com/tokotype/PlusJakartaSans), licensed under the SIL Open Font License (see `public/fonts/OFL-LICENSE.txt`)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)

## 📫 Contact

📩 Email: **anshumankharbade28@gmail.com**  
🐙 GitHub: **https://github.com/anshumankharbade**  
💼 LinkedIn: **https://www.linkedin.com/in/anshuman-kharbade/**
