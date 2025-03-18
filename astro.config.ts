// import cloudflare from "@astrojs/cloudflare";
// import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import basicSsl from "@vitejs/plugin-basic-ssl";
// @ts-check
import { defineConfig } from 'astro/config';
import { MODE, SITE_CONFIG } from './site';

const { SITE_URL, MINIFY, SITE_MAP, HTTPS_SERVER, BASE_DIR, OUT_DIR } = SITE_CONFIG;

// https://astro.build/config
export default defineConfig({
	compressHTML: MINIFY,
	site: MODE === "production" ? SITE_URL.PROD : MODE === "staging" ? SITE_URL.STG : SITE_URL.DEV,
	base: BASE_DIR,
	outDir: OUT_DIR,
	integrations: [SITE_MAP ? sitemap() : null],
	server: {
		host: true,
		open: true,
	},
	// output: "hybrid", // オンデマンドレンダリングを使用する場合は有効にしてください
	build: {
		inlineStylesheets: 'never',
		// assets: "assets/js",
	},
	vite: {
		plugins: [HTTPS_SERVER && basicSsl()],
		build: {
			minify: MINIFY,
			rollupOptions: {
				output: {
					// 複数のエントリがあるファイルに対しての指定（astro.config.js ではエラーが出る -> https://github.com/withastro/astro/issues/5976）
					chunkFileNames(chunkInfo) {
						// console.log('chunkInfo', chunkInfo);
						return 'assets/js/[name].mjs';
					},
					entryFileNames: (entryInfo) => {
						// console.log('entryInfo', entryInfo);
						// .astroファイルのパスを抽出
						const astroPath = entryInfo.moduleIds.find((id) =>
							id.includes('.astro'),
						);
						if (astroPath) {
							const match = astroPath.match(/([^/?]+)\.astro/);
							let result = match ? match[1] : null;
							if (result) {
								// ファイル名の先頭を小文字に変換
								result = result.charAt(0).toLowerCase() + result.slice(1);
								return `assets/js/${result}.js`;
							}
						}
						// .astroファイルでない場合はデフォルトの命名規則を使用
						return 'assets/js/[name].js';
					},
					assetFileNames: (assetInfo: any) => {
						const extType = assetInfo.name.split('.').at(-1);
						if (/css/i.test(extType)) {
							//assetInfo.sourceの中から文字列を探して値を取得する
							let firstLine = assetInfo.source
								.split('\n')
								.find((line: string) => line.includes('buildOutputFile:'));
							if (firstLine) {
								firstLine = firstLine.split('buildOutputFile:')[1].trim();
								//ダブルクォーテーションとセミコロンを削除
								firstLine = firstLine.replace(/['";]/g, '');
								return `assets/[ext]/${firstLine}[extname]`;
							} else {
								//「-index」を削除したファイル名を取得
								const fileName = assetInfo.name.replace('-index', '');
								return `assets/[ext]/${fileName}`;
							}
						} else if (
							/\.(jpg|jpeg|png|gif|bmp|svg|webp|ico|tiff)$/.test(assetInfo.name)
						) {
							// 画像ファイルの場合の処理
							return `assets/images/[name]`;
						} else {
							return 'assets/[ext]/[name][ext]';
						}
					},
				},
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "src/styles/setting" as *;',
					api: 'modern-compiler',
				},
			},
		},
	},
	// adapter: cloudflare({ imageService: "cloudflare" }), // 任意のアダプターをセットしてください
});
