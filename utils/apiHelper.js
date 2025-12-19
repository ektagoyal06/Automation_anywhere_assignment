import axios from 'axios';

const TOKEN = 'PASTE_YOUR_AUTHORITY_TOKEN';

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

