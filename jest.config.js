module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: ["**/__test__/?(*.)test.js"],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "@store(.*)$": "<rootDir>/src/store",
    "@helpers(.*)$": "<rootDir>/src/helpers",
    "@(.*)$": "<rootDir>/src/"
  }
};
