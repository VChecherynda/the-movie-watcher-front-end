module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: ["**/?(*.)test.js"],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "@store/?(.*)": "<rootDir>/src/store/$1",
    "@api/?(.*)": "<rootDir>/src/api/$1"
  }
};
