import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TaskBotPage } from '../pages/TaskBotPage';

test('Create Message Box Task Bot', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const taskBot = new TaskBotPage(page);

  await login.goto();
  await login.login('ektagoyal6904@gmail.com', 'Ekta#694');

  await dashboard.goToAutomation();
  await dashboard.clickCreateBot();
  await dashboard.selectTaskBot();

  await taskBot.createTaskBot('MessageBoxBot');
});
