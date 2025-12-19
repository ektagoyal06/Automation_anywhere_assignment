export class TaskBotPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.createButton = page.getByRole('button', { name: /create/i });
    this.searchAction = page.getByPlaceholder('Search actions');
    this.messageBoxAction = page.getByText('Message Box');
    this.saveButton = page.getByRole('button', { name: /save/i });
  }

  async createTaskBot(name) {
    await this.nameInput.waitFor({ state: 'visible', timeout: 100000 });
    await this.nameInput.fill(name);
    await this.createButton.click();
  }

  async addMessageBox() {
    await this.searchAction.fill('Message Box');
    await this.messageBoxAction.dblclick();
  }

  async saveTask() {
    await this.saveButton.click();
  }
}
