// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from 'vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource qualifyingLifeEvents', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.members.qualifyingLifeEvents.retrieve('qle_abc123def456', {
      member_id: 'mbr_abc123def456',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.members.qualifyingLifeEvents.retrieve('qle_abc123def456', {
      member_id: 'mbr_abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.members.qualifyingLifeEvents.list('mbr_abc123def456');
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
      client.members.qualifyingLifeEvents.list(
        'mbr_abc123def456',
        {
          event_type: 'Marriage',
          limit: 20,
          page: 1,
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('record: only required params', async () => {
    const responsePromise = client.members.qualifyingLifeEvents.record('mbr_abc123def456', {
      event_date: '2024-11-15',
      event_type: 'Marriage',
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
  test.skip('record: required and optional params', async () => {
    const response = await client.members.qualifyingLifeEvents.record('mbr_abc123def456', {
      event_date: '2024-11-15',
      event_type: 'Marriage',
      notes: 'Employee got married, adding spouse to coverage',
    });
  });
});
