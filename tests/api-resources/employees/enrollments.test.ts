// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from 'vitable-connect';

const client = new VitableConnect({
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
        {
          coverage_effective_start_year: 2025,
          limit: 20,
          page: 1,
          plan_year: 2025,
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('submitElections: only required params', async () => {
    const responsePromise = client.employees.enrollments.submitElections('empl_abc123def456', {
      elections: [
        {
          coverage_tier: 'EF',
          decision: 'Enrolled',
          enrollment_id: 'enrl_pending123abc',
        },
        {
          coverage_tier: 'Unspecified',
          decision: 'Waived',
          enrollment_id: 'enrl_pending456def',
        },
      ],
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
          coverage_tier: 'EF',
          decision: 'Enrolled',
          enrollment_id: 'enrl_pending123abc',
          dependent_ids: ['dpnd_spouse123abc', 'dpnd_child456def'],
          selected_plan_id: 'plan_gold123abc',
        },
        {
          coverage_tier: 'Unspecified',
          decision: 'Waived',
          enrollment_id: 'enrl_pending456def',
          dependent_ids: ['string'],
          selected_plan_id: 'selected_plan_id',
        },
      ],
    });
  });
});
