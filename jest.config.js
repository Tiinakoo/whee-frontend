module.exports = {
  verbose: true,
  transform: {
    "^.+\\.css$": ["react-scripts/config/jest/cssTransform.js"],
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": [
      "react-scripts/config/jest/fileTransform.js",
    ],
  },
  transformIgnorePatterns: [".*(node_modules)"],
  setupFilesAfterEnv: ["./setUpUnitTests"],
  watchPathIgnorePatterns: [
    "/node_modules/",
    "/coverage/",
    "/build/",
    "/cdk.out/",
  ],
};
