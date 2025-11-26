// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrollments', () => {
  // Prism tests are disabled
  test.skip('getEligiblePlans', async () => {
    const responsePromise = client.enrollments.getEligiblePlans('enrl__1k--w2KifJ1');
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
    const responsePromise = client.enrollments.reissue('enrl__1k--w2KifJ1', {
      qualifying_life_event_id: 'qle__1k--w2KifJ1',
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
  test.skip('reissue: required and optional params', async () => {
    const response = await client.enrollments.reissue('enrl__1k--w2KifJ1', {
      qualifying_life_event_id: 'qle__1k--w2KifJ1',
    });
  });
});
