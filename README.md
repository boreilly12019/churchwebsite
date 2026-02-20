# West Boca Baptist Church Website

A modern, responsive website for West Boca Baptist Church, built with HTML, Tailwind CSS, and vanilla JavaScript.

## Project Structure

- `index.html`: Main HTML structure.
- `src/style.css`: Stylesheet using Tailwind CSS.
- `src/script.js`: Vanilla JavaScript for interactions (mobile menu, lightbox).
- `public/images/`: Placeholder images (SVGs).

## How to Run Locally

1.  **Install Dependencies** (required for Tailwind CSS processing):
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open the URL shown in the terminal (usually `http://localhost:3000`).

## How to Deploy

### GitHub Pages

1.  **Build the project**:
    ```bash
    npm run build
    ```
    This will generate a `dist` folder with the optimized HTML, CSS, and JS.

2.  **Push to GitHub**:
    Push the contents of the `dist` folder to a `gh-pages` branch, or configure GitHub Pages to serve from the `dist` folder (if using a workflow).

    *Simpler method for this specific setup:*
    Since this project uses Vite to build Tailwind, you must commit the *source* code and use a GitHub Action to build and deploy.

    **GitHub Action Example (.github/workflows/deploy.yml):**
    ```yaml
    name: Deploy to GitHub Pages
    on:
      push:
        branches: [main]
    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v3
          - uses: actions/setup-node@v3
            with:
              node-version: 18
          - run: npm install
          - run: npm run build
          - uses: JamesIves/github-pages-deploy-action@v4
            with:
              folder: dist
    ```

### Netlify

1.  **Connect to Git**: Link your GitHub repository to Netlify.
2.  **Build Settings**:
    -   **Build Command**: `npm run build`
    -   **Publish Directory**: `dist`
3.  **Deploy**: Netlify will automatically build and deploy the site.

## Customization

-   **Images**: Replace the SVG files in `public/images/` with your actual `.jpg` or `.png` files.
-   **Content**: Edit `index.html` to update text and links.
-   **Colors**: Update `src/style.css` or Tailwind classes in `index.html`.
