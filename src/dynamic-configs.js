let currentConfig = 'first';
const changeConfig = (config) => {
    currentConfig = config;
}

const dynamicConfigValue = (key) => {
    return `${currentConfig}:${key}`;
}

module.exports = {
    changeConfig,
    dynamicConfigValue,
}
