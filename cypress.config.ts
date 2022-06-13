import { defineConfig } from "cypress";

// TODO adicionar projectID
export default defineConfig({
  projectId: "",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
