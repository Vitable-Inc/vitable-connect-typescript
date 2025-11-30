// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnectAPI from 'vitable-connect-api';

const client = new VitableConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrollments', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.enrollments.retrieve('enrl_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPlans', async () => {
    const responsePromise = client.enrollments.listPlans('enrl_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reissue: only required params', async () => {
    const responsePromise = client.enrollments.reissue('enrl_abc123def456', { qle_id: 'qle_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reissue: required and optional params', async () => {
    const response = await client.enrollments.reissue('enrl_abc123def456', {
      qle_id: 'qle_id',
      reason: 'reason',
    });
  });
});
