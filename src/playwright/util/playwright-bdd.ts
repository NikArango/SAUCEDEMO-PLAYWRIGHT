import { test as base, createBdd } from 'playwright-bdd';
import { config } from 'dotenv';
config({ path: 'playwright.env' });
import { TestInfo,PlaywrightTestArgs } from '@playwright/test';

export interface TestArgs extends PlaywrightTestArgs {
    testInfo: TestInfo;
}

export const test = base.extend<TestArgs & {
    _useTestInfo: TestInfo,
    }>({
     testInfo: [
        async ({  }, use,testInfo) => {
            await use(testInfo);
        },
        { auto: true },
     ],
     _useTestInfo: [
        async ({}, use, testInfo) => {
            await use(testInfo);
        },
        { option: true }
     ],
  });
  
  export const { Given, When, Then } = createBdd(test, {
  });


const currentEnv = process.env.STAGING || "INTE";
export const env = new Proxy({}, {
    get: (_, name: string) => {
        const value = process.env[`${currentEnv}_${name}`] || process.env[name] || undefined;
        if (!value) {
            throw new Error(`Environment variable ${currentEnv}_${name} is not defined`);
        }

        process.env[name] = value;
        return process.env[name];
    }
}) as Record<string, string>;
