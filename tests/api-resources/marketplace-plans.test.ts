// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketplacePlans', () => {
  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.marketplacePlans.search({
      applicants: [{ age: 0, child: true, smoker: true }],
      zipcode: 'zipcode',
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
  test.skip('search: required and optional params', async () => {
    const response = await client.marketplacePlans.search({
      applicants: [{ age: 0, child: true, smoker: true }],
      zipcode: 'zipcode',
      enrollment_date: '2019-12-27',
      household: { household_income_in_cents: 0, household_size: 1 },
      providers: [{ id: 0, name: 'name', npis: [0], type: 'type', phone: 'phone' }],
    });
  });
});
