const { test } = require('@playwright/test');
const fs = require('fs');

test('Save Automation Anywhere session', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('➡ Opening login page');
  await page.goto('https://community.cloud.automationanywhere.digital/');

  // LOGIN
  await page.fill('input[type="email"]', 'YOUR_EMAIL');
  await page.click('button:has-text("Next")');

  await page.fill('input[type="password"]', 'YOUR_PASSWORD');
  await page.click('button:has-text("Sign in")');

  // 🔴 CRITICAL: wait for something that proves login is DONE
  console.log('⏳ Waiting for Home page element');

  await page.waitForSelector('text=Create a bot', {
    timeout: 60000
  });

  console.log('✅ Logged in successfully');

  // 🔴 FORCE SAVE SESSION
  await context.storageState({ path: 'auth.json' });

  // 🔴 VERIFY FILE WAS CREATED
  if (fs.existsSync('auth.json')) {
    console.log('✅ auth.json CREATED');
  } else {
    throw new Error('❌ auth.json NOT created');
  }

  await context.close();
});
