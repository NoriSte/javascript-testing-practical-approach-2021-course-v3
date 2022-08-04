const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/vite-dev-server");
const reactPlugin = require("@vitejs/plugin-react");
const cypressReplay = require("@replayio/cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    baseUrl: "http://localhost:4100",
    specPattern: "cypress/e2e/**/*spec.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      cypressReplay.default(on, config);
      return config;
    },
  },
  component: {
    specPattern: "**/*spec.{js,jsx,ts,tsx}",
    devServer,
    devServerConfig: {
      plugins: [reactPlugin()],
    },
  },
});
