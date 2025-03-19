# Astro Boiler Template

```sh
npm create astro@latest -- --template rik9228/astro_boiler_template
```

Features：

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Support for client delivery
  - CSS and JS file names can be changed after output.
- ✅ MicroCMS surpported
  - `microcms` branch

![100/100 Lighthouse performance](/image.png)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Project on development build to `./dist/`        |
| `npm run release`         | Project on production build to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `gen:component`           | Create Component by scaffdog                     |

## Other

- Make sure you have a `.env` file on hand based on the `.env.example` file
  - `microcms` branch

## How to use

- [Docs](https://docs.astro.build/ja/getting-started/)
- [Images](https://docs.astro.build/ja/guides/images/)
- [Fonts](https://docs.astro.build/ja/guides/fonts/)

## 画像の使用について

可能な限り、[Imagesコンポーネント](https://docs.astro.build/ja/guides/images/)を使用すること。

```tsx

---
import { Image } from 'astro:assets';
import sample from '@/assets/images/sample.jpg';
---

<Image src={sample} alt="" />
```

また背景画像は、[image.ts](./src/scripts/util/images.ts)内側で使用する画像をimportすること。

-> 吐き出し後は画像に対してハッシュ名が付与される。

[参考](https://zenn.dev/takkyun/articles/cc33c1425cc3b4)

## フォントやその他のファイルについて

`/public/assets` 配下にそれぞれ格納すること
