const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/src/"],
  testPathIgnorePatterns: ["<rootDir>/src/cypress/"],
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);