import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to Automation Anywhere', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('Your_email');


  await expect(page).toHaveURL(/automationanywhere/);
});

