import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // test suite level
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,

  // nested
  expect: {
    timeout: 3000
  },

  use: {
    
    trace: 'on-first-retry',
    timezoneId: 'Africa/Lagos', // applied to all tests, except those that override it
    baseURL: 'http://localhost:3000/',
    screenshot: 'only-on-failure',
    headless: false,
    launchOptions: { slowMo: 1000 }
  },

  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000/',
    reuseExistingServer:true
  },

  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] }
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] }
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    //   testDir: './tests/mobile'
    // },

    // by purpose
    {
      name: 'Smoke',
      testMatch: /.*smoke.test.ts/,
      retries: 0
    },

    {
      name: 'Regular',
      testIgnore: /.*smoke.test.ts/,
      retries: 2,
      use: {
        // ...
      }
    },

    {
      name: 'setup-cleanup-demo',
      testMatch: '_4global-config.test.ts',
      dependencies: ['setup', 'admin-auth', 'populate-db'],
    },

    {
      name: 'cleanup',
      testMatch: '**/global.teardown.ts'
    },

    {
      name: 'setup',
      testMatch: '**/global.setup.ts',
      teardown: 'cleanup'
    },

    {
      name: 'admin-auth',
      testMatch: '**/admin-auth.setup.ts',
    },

    {
      name: 'populate-db',
      testMatch: '**/populate-db.setup.ts',
    }
    
  ]
});
