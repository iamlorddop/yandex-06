let currentConfig = 'second';
const changeConfig = (config) => {
	currentConfig = config;
}
const configValue = (key) => {
	return `${currentConfig}:${key}`;
}

module.exports = {
	changeConfig,
	configValue,
}
