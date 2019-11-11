// jest.config.js
const {defaults} = require(`jest-config`);

module.exports = {
  modulePaths: [
    `node_modules`,
    `<rootDir>/src/`
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, `js`, `jsx`],
};
