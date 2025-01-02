module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/support/setupTests.js"
 ],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
  };