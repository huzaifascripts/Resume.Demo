# Resume Website

A one-page resume built with plain HTML, CSS and JavaScript. No frameworks, no build step, no dependencies to install. I wanted something that loads instantly, looks decent in a browser, and still prints cleanly on a sheet of paper.

## Why I built it

A PDF resume is fine, but it can't be updated in one click, it doesn't adapt to a phone screen, and it's not much of a showcase for someone learning web development. So I turned my resume into a small website and kept it simple on purpose.

## What's in it

- A single page with sections for profile, skills, experience, projects, certifications, tools and interests
- A warm, paper-like colour palette built on CSS custom properties, so changing the look means editing a handful of variables at the top of `style.css`
- Skill tags in a few colour styles to group related skills
- A soft fade-in when the page loads, written in a few lines of vanilla JavaScript
- A responsive layout that shrinks down for small screens
- A print stylesheet, so printing the page (or saving it as a PDF from the browser) gives you a clean US Letter resume without the card shadow and background

## Project structure

```
.
├── index.html   # the content
├── style.css    # all the styling, including responsive + print rules
└── script.js    # the load-in animation
```

## Running it locally

There's nothing to build. Pick whichever of these suits you:

1. **Just open it.** Double-click `index.html` and it opens in your browser.
2. **Use a local server.** From the project folder, run:

   ```bash
   python -m http.server 8000
   ```

   Then go to `http://localhost:8000`.

The Google Fonts (Caprasimo and Figtree) load from the internet, so you'll need a connection to see them. Without one, the page falls back to your system fonts.

## Making it yours

If you want to use this as a starting point:

1. Replace the text in `index.html` with your own details.
2. Tweak the colours in the `:root` block at the top of `style.css`.
3. Swap the fonts in the Google Fonts link in `index.html` and in the `--font-heading` / `--font-body` variables.

## Printing or saving as PDF

Open the page, press `Ctrl + P` (or `Cmd + P` on Mac), choose "Save as PDF" and you're done. The print styles take care of margins and page breaks.

## Deploying

Since it's a static site, it works on any static host: GitHub Pages, Vercel, Netlify, or a regular web host. Just point it at the folder containing `index.html`.

## Credits

- Fonts: [Caprasimo](https://fonts.google.com/specimen/Caprasimo) and [Figtree](https://fonts.google.com/specimen/Figtree) from Google Fonts

## Use of this repo

You're welcome to borrow the layout and styles for your own site. The text content is my own resume, so please don't copy that over as yours.
