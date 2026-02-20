// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from 'vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employees', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.employees.retrieve('empl_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.employees.update('empl_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employees.update(
        'empl_abc123def456',
        {
          address: {
            city: 'Los Angeles',
            state: 'CA',
            street_1: '123 New Street',
            zip_code: '90001',
            country: 'US',
            street_2: 'street_2',
          },
          email: 'john.doe.updated@example.com',
          employee_class: 'Part Time',
          gender: 'gender',
          phone: '+1-555-999-8888',
          termination_date: '2019-12-27',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('terminate', async () => {
    const responsePromise = client.employees.terminate('empl_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
