// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from '@vitable-inc/vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  identityToken: 'My Identity Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plans', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.plans.list();
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
      client.plans.list({ limit: 20, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });
});
