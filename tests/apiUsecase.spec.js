import { test, expect } from '@playwright/test';

test('Use Case 3: Validate Bots API using token', async ({ request }) => {

  const TOKEN = 'eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI4NzgwOTgiLCJjbGllbnRUeXBlIjoiV0VCIiwidGVuYW50VXVpZCI6IjMxY2E0OWZkLTBlODItNDljYy04MDdkLWQ0ZWZiMmE2ZTBjMyIsIm11bHRpcGxlTG9naW4iOmZhbHNlLCJpYXQiOjE3NjYwOTA0NzcsImV4cCI6MTc2NjA5MTY3NywiaXNzIjoiQXV0b21hdGlvbkFueXdoZXJlIiwibmFub1RpbWUiOjQyMTEyNTIzODc2ODA1OTZ9.VcATTF3KtwBbAsuGNeJ_a8uUn4YUXyVwsZIrCOtw08XXFYCnkjmPuJZ8FFNbkAb0K67otcShqtOE_hnR6Q5970qpL-StAO-TZXaQhdVQEQYkon1AZclouyVeMXkg0sosqP5rpuP5paxLqoGfQMGRe9aU2rjz3x-tRYNqDoOIccmpEL1af_yoxqFKlQQM2TmturXf747vW4ZqbOz3FqkWNFu8X4e92DK8Ifdopoo8ED5VttBRVCBVDutSuFUhQRnb0EBNTy6TmiP-mBh4bN8nDUtMuFJVCKk7wajv03Ubzgj3lgYPhzGFFwzrbG2n57TzTbBta35z0eZ3ZHaoTp1C-A';

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
