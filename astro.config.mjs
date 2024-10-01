// import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [sitemap(), react()],
	// output: "hybrid", // オンデマンドレンダリングを使用する場合は有効にしてください
	vite: {
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
