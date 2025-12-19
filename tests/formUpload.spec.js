import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { FormPage } from '../pages/FormPage';

test('Create Form and Upload File', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const form = new FormPage(page);

  await login.goto();
  await login.login('ektagoyal6904@gmail.com', 'Ekta#694');

  await dashboard.goToAutomation();
  await dashboard.clickCreateBot();
  await dashboard.selectForm();

  await form.createForm('InvoiceUploadForm');

  await form.uploadFile(
    'C:/Users/Ekta/Downloads/Automation_Assignment_UI_API.docx'
  );

  await form.saveForm();
});
