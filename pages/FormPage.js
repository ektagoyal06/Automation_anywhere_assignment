export class FormPage {
  constructor(page) {
    this.page = page;

    this.formNameInput = page.locator('input[name="name"]');
    this.uploadInput = page.locator('input[type="file"]');
    this.saveButton = page.getByRole('button', { name: /save/i });
  }

  async createForm(formName) {
    await this.formNameInput.waitFor({ state: 'visible', timeout: 60000 });
    await this.formNameInput.fill(formName);
  }

  async uploadFile(filePath) {
    await this.uploadInput.setInputFiles(filePath);
  }

  async saveForm() {
    await this.saveButton.waitFor({ state: 'visible', timeout: 60000 });
    await this.saveButton.click();
  }
}
