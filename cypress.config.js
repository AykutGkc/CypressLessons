const { defineConfig } = require("cypress");
const { removeDirectory } = require("cypress-delete-downloads-folder");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { removeDirectory });

      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalStudio: true,
  },
});
