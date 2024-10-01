/** @type {import("prettier").Config} */

export default {
	semi: true, // ステートメントの最後にセミコロンを付ける
	singleQuote: true, // シングルクオートを使用する
	trailingComma: "all", // 可能な限り末尾のカンマを付ける
	useTabs: false, // インデントにタブではなくスペースを使用する
	tabWidth: 2, // インデントのスペース数を2に設定
	printWidth: 100, // 1行の最大文字数を100に設定

	plugins: ["prettier-plugin-astro"], // Astroファイル用のPrettierプラグインを使用する
	overrides: [
		{
			files: "*.astro", // .astroファイルに対して
			options: {
				parser: "astro", // Astroパーサーを使用する
			},
		},
	],
};
