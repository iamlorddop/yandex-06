module.exports = function(configValue) {
	const makeDynamicConfig = e => e;
	const dynamicConfigValue = configValue;

	makeDynamicConfig({configValue: `${dynamicConfigValue}`})

	return {
		makeDynamicConfig,
		dynamicConfigValue,
	};
}
