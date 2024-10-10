// import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";
import { SITE_COMPRESSED } from "./src/scripts/consts";

// https://astro.build/config
export default defineConfig({
	compressHTML: SITE_COMPRESSED && true, // HTMLを圧縮する場合はこちらを変更
	site: "https://example.com",
	integrations: [sitemap(), react()],
	// output: "hybrid", // オンデマンドレンダリングを使用する場合は有効にしてください
	build: {
		inlineStylesheets: "never",
	},
	vite: {
		build: {
			minify: SITE_COMPRESSED && true,
			rollupOptions: {
				output: {
					entryFileNames: (entryInfo) => {
						// .astroファイルのパスを抽出
						const astroPath = entryInfo.moduleIds.find((id) =>
							id.includes(".astro"),
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
						return "assets/js/[name].js";
					},
					// biome-ignore lint:
					assetFileNames: (assetInfo: any) => {
						const extType = assetInfo.name.split(".").at(-1);
						if (/css/i.test(extType)) {
							//assetInfo.sourceの中から文字列を探して値を取得する
							let firstLine = assetInfo.source
								.split("\n")
								.find((line) => line.includes("buildOutputFile:"));
							if (firstLine) {
								firstLine = firstLine.split("buildOutputFile:")[1].trim();
								//ダブルクォーテーションとセミコロンを削除
								firstLine = firstLine.replace(/['";]/g, "");
								return `assets/[ext]/${firstLine}[extname]`;
							} else {
								//「-index」を削除したファイル名を取得
								const fileName = assetInfo.name.replace("-index", "");
								return `assets/[ext]/${fileName}`;
							}
						} else {
							return "assets/[ext]/[name][extname]";
						}
					},
				},
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "src/styles/setting" as *;',
					api: "modern-compiler",
				},
			},
		},
	},
	// adapter: cloudflare({ imageService: "cloudflare" }), // 任意のアダプターをセットしてください
});
