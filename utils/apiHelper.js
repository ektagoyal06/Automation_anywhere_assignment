import axios from 'axios';

const TOKEN = 'eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI4NzgwOTgiLCJjbGllbnRUeXBlIjoiV0VCIiwidGVuYW50VXVpZCI6IjMxY2E0OWZkLTBlODItNDljYy04MDdkLWQ0ZWZiMmE2ZTBjMyIsIm11bHRpcGxlTG9naW4iOmZhbHNlLCJpYXQiOjE3NjU5MTYzOTEsImV4cCI6MTc2NTkxNzU5MSwiaXNzIjoiQXV0b21hdGlvbkFueXdoZXJlIiwibmFub1RpbWUiOjM2MTIxMjA0Njg3NTA1NDB9.hpLydBxk5-bxofTfXi9xt9HD7WCExaFnxIDiCSDvG9l07PvxWSXnw3HIVOBvnpWV8ZCOrm6imHuavCXpIOxFKMSHv4EMtdTQDb8x2yC1K10SjstoSs-EqPjbDuimzHZiWblD5bJAE4FY45EJ0bnMJa1CcAVlyPXL6tJTDVWPjY2dEt5-mwCdlAIK6_Tiq2mfXltwU4YXg94ZAyV7cWC6LjR8uocyhUXwDM-aQIU4PKf0pK3k2D4YU8Rr5xEBr8W3v7z_Xs1n6qdWNM0raxQeSXGHTC07PBUgNkS08YnLKcNiTR05Cc7NP25yFM-c9xFEJdqIEt4Pz5z2Gh5uazkquQ';

export async function createLearningInstance() {
  return axios.post(
    'https://community.cloud.automationanywhere.digital/cognitive/v3/learninginstances',
    {
      name: 'TestLearningInstance',
      description: 'Invoice extraction',
      documentType: 'Invoices',
      language: 'en',
      locale: 'en-US',
      provider: 'AUTOMATION_ANYWHERE',
      fields: [
        { fieldName: 'invoice_number', dataType: 'TEXT' },
        { fieldName: 'invoice_date', dataType: 'DATE' },
        { fieldName: 'po_number', dataType: 'TEXT' },
        { fieldName: 'receiver_address', dataType: 'ADDRESS' },
        { fieldName: 'ship_to_address', dataType: 'ADDRESS' },
        { fieldName: 'total_amount', dataType: 'NUMBER' }
      ]
    },
    {
      headers: {
        'X-Authorization': TOKEN,
        'Content-Type': 'application/json'
      }
    }
  );
}
