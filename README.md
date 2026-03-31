A modern, animated personal portfolio website for **Pranav P R** focused on AI/ML interests, project highlights, and contact details.

## Overview

This is a static portfolio website built with:

- `HTML` (`index.html`)
- `CSS` (`style.css`)
- `JavaScript` (`app.js`)

It includes a launch animation, section-based navigation, interactive project cards, and modal popups for project details.

## Features

- Launch/loading animation before app reveal
- Smooth single-page section navigation (`About`, `Projects`, `Contact`)
- Animated page transitions
- Interactive project flashcards
- Project detail modal overlay
- Responsive layout for desktop and mobile

## Project Structure

```text
PERSONALPORTFILIO/
├── index.html      # Main page structure
├── style.css       # Styling, animations, responsive design
├── app.js          # Navigation, loader timing, modal interactions
└── face.jpeg       # Profile image asset
```

## Run Locally

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use a local server (recommended)

From the project root:

```bash
python -m http.server 5500
```

Then visit:

`http://localhost:5500`

## Customization

### Update profile details

Edit text content in `index.html`:

- Name and headline
- About section
- Skills
- Contact links

### Update projects

You can edit:

- Project card content in `index.html`
- Modal data/content in `app.js` (`projectData` object)

### Update design

Edit `style.css` for:

- Colors (`:root` variables)
- Spacing and layout
- Animation timing and effects

## Deployment

This is a static site, so it can be deployed on:

- GitHub Pages
- Netlify
- Vercel (static)

Typical deploy setup:

1. Push this folder to a GitHub repository.
2. Connect the repository to your hosting provider.
3. Set publish root to repository root (`/`) and deploy.

## Author

**Pranav P R**

- GitHub: [@eddardstark687-rgb](https://github.com/eddardstark687-rgb)
- Email: [pranavpr687@gmail.com](mailto:pranavpr687@gmail.com)

