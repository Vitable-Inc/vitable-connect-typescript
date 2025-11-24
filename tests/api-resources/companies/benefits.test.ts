// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource benefits', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.companies.benefits.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('configure: only required params', async () => {
    const responsePromise = client.companies.benefits.configure('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      configured_eligibility_rules: [
        { compensation: 'Unspecified', employment: 'Unspecified', location: 'Unspecified' },
      ],
      configured_tier_costs: [
        {
          cost_in_cents: 0,
          cost_per_dependent_in_cents: 0,
          pepm_in_cents: 0,
          pepm_per_dependent_in_cents: 0,
          tier_cost_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      min_monthly_premium_in_cents: 0,
      open_enrollment_start_date: '2019-12-27',
      selected_eligible_expense_categories_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
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
  test.skip('configure: required and optional params', async () => {
    const response = await client.companies.benefits.configure('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      configured_eligibility_rules: [
        {
          compensation: 'Unspecified',
          employment: 'Unspecified',
          location: 'Unspecified',
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          location_value: 'location_value',
        },
      ],
      configured_tier_costs: [
        {
          cost_in_cents: 0,
          cost_per_dependent_in_cents: 0,
          pepm_in_cents: 0,
          pepm_per_dependent_in_cents: 0,
          tier_cost_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      min_monthly_premium_in_cents: 0,
      open_enrollment_start_date: '2019-12-27',
      selected_eligible_expense_categories_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      agency_of_record_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      open_enrollment_end_date: '2019-12-27',
    });
  });

  // Prism tests are disabled
  test.skip('listActive', async () => {
    const responsePromise = client.companies.benefits.listActive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEligibleExpenseCategories', async () => {
    const responsePromise = client.companies.benefits.listEligibleExpenseCategories(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEnrollments', async () => {
    const responsePromise = client.companies.benefits.listEnrollments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEnrollments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companies.benefits.listEnrollments(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 0, page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitablePartnerAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listUpcoming', async () => {
    const responsePromise = client.companies.benefits.listUpcoming('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
