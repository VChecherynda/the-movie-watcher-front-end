module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: ["**/?(*.)test.js"],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "@components/?(.*)": "<rootDir>/src/components/$1",
    "@tests/?(.*)": "<rootDir>/tests/$1",
    "@helpers/?(.*)": "<rootDir>/src/helpers/$1",
    "@validations/?(.*)": "<rootDir>/src/validations/$1",
    "@configs/?(.*)": "<rootDir>/src/configs/$1",
    "@hooks/?(.*)": "<rootDir>/src/hooks/$1",
    "@store/?(.*)": "<rootDir>/src/store/$1",
    "@api/?(.*)": "<rootDir>/src/api/$1"
  }
};
