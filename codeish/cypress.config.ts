import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.cy.ts'
  },
  e2e: {
    baseUrl: 'https://localhost:4444',
  },
  env: {
    production: false,
  },
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  supportFolder: 'cypress/support',
  videosFolder: 'cypress/videos',
  defaultCommandTimeout: 5000,
  slowTestThreshold: 10000,
  pageLoadTimeout: 60000,
  responseTimeout: 30000,
  requestTimeout: 5000,
  execTimeout: 60000,
  taskTimeout: 60000,
  experimentalWebKitSupport: true,
  watchForFileChanges: true,
  video: true,
  videoCompression: 16,
  retries: 3,
});
