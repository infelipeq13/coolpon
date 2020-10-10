const { fontFamily, fontSize } = require("./tailwind/theme");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
	experimental: {
		applyComplexClasses: true,
	},
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	},
	plugins: [require("@tailwindcss/ui")],
	purge: {
		content: ["src/**/*.tsx"],
		enabled: IS_PRODUCTION,
	},
	theme: {
		extend: {
			fontFamily,
			fontSize,
		},
	},
};
