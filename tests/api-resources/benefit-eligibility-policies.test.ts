// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from '@vitable-inc/vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource benefitEligibilityPolicies', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.benefitEligibilityPolicies.retrieve('epol_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
