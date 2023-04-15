module.exports = function ({ makeDynamicConfig, dynamicConfigValue }, changeConfig) {
	const object = makeDynamicConfig({
		key: dynamicConfigValue('key'),
		key2: dynamicConfigValue('key2'),
	});

	changeConfig('ru');
	const objectRu = JSON.stringify(object);

	changeConfig('en');
	const objectEn = JSON.stringify(object);

	const test = String(makeDynamicConfig({ key: dynamicConfigValue('key') }).key);

	return {
		ru: JSON.parse(objectRu),
		en: JSON.parse(objectEn),
		test,
	};
}