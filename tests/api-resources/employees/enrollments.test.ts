// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnectAPI from 'vitable-connect-api';

const client = new VitableConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrollments', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employees.enrollments.list('empl_abc123def456');
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
        'empl_abc123def456',
        { coverage_effective_start_year: 2025, limit: 20, page: 1, plan_year: 2025, status: 'pending' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('submitElections: only required params', async () => {
    const responsePromise = client.employees.enrollments.submitElections('empl_abc123def456', {
      elections: [{ decision: 'Enrolled', enrollment_id: 'enrollment_id' }],
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
  test.skip('submitElections: required and optional params', async () => {
    const response = await client.employees.enrollments.submitElections('empl_abc123def456', {
      elections: [
        {
          decision: 'Enrolled',
          enrollment_id: 'enrollment_id',
          coverage_tier: 'Unspecified',
          dependent_ids: ['string'],
          selected_plan_id: 'selected_plan_id',
        },
      ],
    });
  });
});
