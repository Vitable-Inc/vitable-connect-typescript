// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource planYears', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.benefitProducts.planYears.create('bprd__1k--w2KifJ1', {
      coverage_end_date: '2019-12-27',
      coverage_start_date: '2019-12-27',
      employer_id: 'empr__1k--w2KifJ1',
      open_enrollment_end_date: '2019-12-27',
      open_enrollment_start_date: '2019-12-27',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.benefitProducts.planYears.create('bprd__1k--w2KifJ1', {
      coverage_end_date: '2019-12-27',
      coverage_start_date: '2019-12-27',
      employer_id: 'empr__1k--w2KifJ1',
      open_enrollment_end_date: '2019-12-27',
      open_enrollment_start_date: '2019-12-27',
      contribution_classes: [
        {
          compensation: 'UNSPECIFIED',
          employer_contribution_in_cents: 0,
          employment: 'UNSPECIFIED',
          family_status: 'UNSPECIFIED',
          location: 'UNSPECIFIED',
          location_value: 'location_value',
          max_age: 0,
          min_age: 0,
          plan_id: 'plan_id',
        },
      ],
      plan_costs: [{ dependent_cost_in_cents: 0, employee_cost_in_cents: 0, plan_id: 'plan_id' }],
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.benefitProducts.planYears.list('bprd__1k--w2KifJ1', {
      employer_id: 'employer_id',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.benefitProducts.planYears.list('bprd__1k--w2KifJ1', {
      employer_id: 'employer_id',
    });
  });
});
