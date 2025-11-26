// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnectAPI from 'vitable-connect-api';

const client = new VitableConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrollments', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employees.enrollments.list('empl__1k--w2KifJ1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employees.enrollments.list(
        'empl__1k--w2KifJ1',
        { status: 'pending' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('elect: only required params', async () => {
    const responsePromise = client.employees.enrollments.elect('empl__1k--w2KifJ1', {
      elections: [{ decision: 'enrolled', enrollment_id: 'enrl__1k--w2KifJ1' }],
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
  test.skip('elect: required and optional params', async () => {
    const response = await client.employees.enrollments.elect('empl__1k--w2KifJ1', {
      elections: [
        {
          decision: 'enrolled',
          enrollment_id: 'enrl__1k--w2KifJ1',
          dependent_ids: ['dpnd__1k--w2KifJ1'],
          plan_id: 'plan_id',
        },
      ],
    });
  });
});
