// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from 'vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Prism tests are disabled
  test.skip('issueAccessToken: only required params', async () => {
    const responsePromise = client.auth.issueAccessToken({ grant_type: 'client_credentials' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('issueAccessToken: required and optional params', async () => {
    const response = await client.auth.issueAccessToken({
      grant_type: 'client_credentials',
      bound_entity: { id: 'id', type: 'employer' },
    });
  });
});
