export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.loginButton = page.getByRole('button', { name: /log in|continue|next/i });
  }

  async goto() {
    await this.page.goto(
      'https://community.cloud.automationanywhere.digital/',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async login(email, password) {
    // If already logged in, email field will NOT exist
    if (await this.emailInput.count() === 0) {
      console.log('Already logged in, skipping login');
      return;
    }

    console.log('Performing login...');

    await this.emailInput.waitFor({ state: 'visible', timeout: 30000 });
    await this.emailInput.fill(email);

    if (await this.loginButton.isVisible()) {
      await this.loginButton.click();
    }

    await this.passwordInput.waitFor({ state: 'visible', timeout: 30000 });
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }
}
