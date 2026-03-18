// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from 'vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employers', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.employers.create({
      address: {
        address_line_1: '789 Business Blvd',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98101',
      },
      ein: '12-3456789',
      email: 'hr@newco.com',
      legal_name: 'NewCo Industries LLC',
      name: 'NewCo Industries',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.employers.create({
      address: {
        address_line_1: '789 Business Blvd',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98101',
        address_line_2: 'Floor 5',
      },
      ein: '12-3456789',
      email: 'hr@newco.com',
      legal_name: 'NewCo Industries LLC',
      name: 'NewCo Industries',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.employers.retrieve('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employers.list({ limit: 20, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createEligibilityPolicy: only required params', async () => {
    const responsePromise = client.employers.createEligibilityPolicy('empr_abc123def456', {
      classification: 'classification',
      waiting_period: 'waiting_period',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createEligibilityPolicy: required and optional params', async () => {
    const response = await client.employers.createEligibilityPolicy('empr_abc123def456', {
      classification: 'classification',
      waiting_period: 'waiting_period',
    });
  });
});
