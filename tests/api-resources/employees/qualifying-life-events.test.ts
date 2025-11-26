// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource qualifyingLifeEvents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.employees.qualifyingLifeEvents.create('empl__1k--w2KifJ1', {
      event_date: '2019-12-27',
      event_type: 'MARRIAGE',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.employees.qualifyingLifeEvents.create('empl__1k--w2KifJ1', {
      event_date: '2019-12-27',
      event_type: 'MARRIAGE',
      description: 'description',
      proof_document_url: 'https://example.com',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employees.qualifyingLifeEvents.list('empl__1k--w2KifJ1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
