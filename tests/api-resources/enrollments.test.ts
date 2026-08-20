// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from '@vitable-inc/vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  identityToken: 'My Identity Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrollments', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.enrollments.retrieve('enrl_AAAAAAAAAAAAAAAAAAAAAQ');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reissue', async () => {
    const responsePromise = client.enrollments.reissue('enrl_AAAAAAAAAAAAAAAAAAAAAQ');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reissue: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enrollments.reissue(
        'enrl_AAAAAAAAAAAAAAAAAAAAAQ',
        {
          qualifying_life_event_id: 'qle_AAAAAAAAAAAAAAAAAAAAAQ',
          reason: 'Member needs a new election after a qualifying event.',
          ticket_number: 'BPT-1234',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('terminate', async () => {
    const responsePromise = client.enrollments.terminate('enrl_AAAAAAAAAAAAAAAAAAAAAQ');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('terminate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enrollments.terminate(
        'enrl_AAAAAAAAAAAAAAAAAAAAAQ',
        {
          qualifying_life_event_id: 'qle_AAAAAAAAAAAAAAAAAAAAAQ',
          reason: 'Member requested coverage termination after a qualifying event.',
          ticket_number: 'BPT-1234',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });
});
