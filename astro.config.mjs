// import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	// compressHTML: false, // HTMLを圧縮する場合はこちらを変更
	site: "https://example.com",
	integrations: [sitemap(), react()],
	// output: "hybrid", // オンデマンドレンダリングを使用する場合は有効にしてください
	build: {
		inlineStylesheets: "never",
	},
	vite: {
		build: {
			rollupOptions: {
				output: {
					assetFileNames: (assetInfo) => {
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
					// additionalData: '@use "src/styles/setting" as *;',
					api: "modern-compiler",
				},
			},
		},
	},
	// adapter: cloudflare({ imageService: "cloudflare" }), // 任意のアダプターをセットしてください
});
