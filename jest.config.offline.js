/**
 * @format
 * @type {import('ts-jest').JestConfigWithTsJest}
 * */

const baseConfig = require("./jest.config");

module.exports = {
    ...baseConfig,
    modulePathIgnorePatterns: ["<rootDir>/test/unit/db/MysqlService.test.ts"],
};
