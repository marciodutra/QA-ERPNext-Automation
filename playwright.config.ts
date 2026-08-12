import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error(
    'BASE_URL não foi definida. Verifique o arquivo .env.'
  );
}

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results',
      },
    ],
  ],

  use: {
    baseURL,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});