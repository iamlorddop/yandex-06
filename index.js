const fs = require('fs');

const example = require('./src/example');
const solution = require('./src/solution');

const { changeConfig, dynamicConfigValue } = require('./src/dynamic-configs');

const newFns = solution(dynamicConfigValue);

const result = example(newFns, changeConfig);

fs.writeFileSync('./output.json', JSON.stringify(result, null, 2));
