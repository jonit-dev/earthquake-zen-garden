/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect", 
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: ["<rootDir>/src"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
};
