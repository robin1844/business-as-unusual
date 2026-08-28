# Business as Unusual

Workplace one-liners for strategic deployment.

Business as Unusual is a small, dependency-free web app that presents 195 workplace comedy directives in a randomised, non-repeating sequence. Each directive has a unique faux-official heading and stable internal ID.

## Features

- Randomised directives with Previous navigation
- Favourites saved in the current browser
- Hide and restore controls
- Submission form powered by Formspree
- Responsive light and dark themes
- Keyboard-accessible tabs and controls
- Reduced-motion support
- Focused ARIA live announcements containing only the directive heading and body

## Run locally

Serve the folder with any static web server, for example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The site is designed for GitHub Pages and requires no build step.

## Heading editorial standard

Every directive must have a unique faux-official heading. For new additions:

- Prefer two to four words; fewer words are better when meaning survives.
- Reinterpret the situation through dry corporate language rather than summarising it.
- Avoid repeating prominent words or phrases from the directive itself.
- Keep the connection inferable with a little thought; that delayed recognition is part of the joke.
- Do not reveal or paraphrase the punchline.
- Read the heading aloud with the directive because screen readers announce both.
