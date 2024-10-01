# Astro Boiler Template

```sh
npm create astro@latest -- --template rik9228/astro_boiler_template
```

Features:

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ MicroCMS surpported
  - `microcms` branche

![100/100 Lighthouse performance](/image.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```zsh
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── styles/
│   ├── utils/
│   ├── libs/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploy

- Deployment is done using cloud flare
- Deployment is done using SSR in the preview function
- Automatic deployment is enabled.

## Other

- Make sure you have a `.env` file on hand based on the `.env.example` file
  - `microcms` branche
