export class DashboardPage {
  constructor(page) {
    this.page = page;

    // Sidebar
    this.automationMenu = page.getByText('Automation', { exact: true });

    // Home card button
    this.createBotButton = page.getByRole('button', {
      name: /create a bot/i
    });

    this.taskBotOption = page.getByText('Task Bot', { exact: true });
  }

  async goToAutomation() {
    await this.automationMenu.waitFor({ state: 'visible', timeout: 100000 });
    await this.automationMenu.click();
  }

  async clickCreateBot() {
    await this.createBotButton.waitFor({ state: 'visible', timeout: 100000 });
    await this.createBotButton.click();
  }

  async selectTaskBot() {
    await this.taskBotOption.waitFor({ state: 'visible', timeout: 100000 });
    await this.taskBotOption.click();
  }

  async selectForm() {
  await this.page.getByText('Form').waitFor({ state: 'visible', timeout: 60000 });
  await this.page.getByText('Form').click();
}

}
