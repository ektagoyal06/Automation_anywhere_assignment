import { test, expect } from '@playwright/test';

test('Use Case 3: Validate Bots API using token', async ({ request }) => {

  const TOKEN = 'PASTE_YOUR_AUTHORITY_TOKEN';

  const response = await request.get(
    'https://community.cloud.automationanywhere.digital/v3/automations',
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  );

  console.log('Status:', response.status());
  const body = await response.json();
  console.log(body);

  expect(response.status()).toBe(400);
});

