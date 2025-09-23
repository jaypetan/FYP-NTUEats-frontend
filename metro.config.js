const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const baseConfig = getDefaultConfig(__dirname);

const { transformer, resolver } = baseConfig;

const config = {
	...baseConfig,
	transformer: {
		...transformer,
		babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
	},
	resolver: {
		...resolver,
		assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
		sourceExts: [...resolver.sourceExts, "svg"],
	},
};

module.exports = withNativeWind(config, { input: "./app/global.css" });
