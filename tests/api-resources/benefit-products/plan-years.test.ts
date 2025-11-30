// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnectAPI from 'vitable-connect-api';

const client = new VitableConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource planYears', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.benefitProducts.planYears.create('bprd_abc123def456', {
      contribution_classes: [
        {
          employee_contribution_cents: 0,
          employer_contribution_cents: 0,
          employment: 'employment',
          family_status: 'Unspecified',
        },
      ],
      coverage_end: '2019-12-27',
      coverage_start: '2019-12-27',
      employer_id: 'employer_id',
      open_enrollment_end: '2019-12-27',
      open_enrollment_start: '2019-12-27',
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
    const response = await client.benefitProducts.planYears.create('bprd_abc123def456', {
      contribution_classes: [
        {
          employee_contribution_cents: 0,
          employer_contribution_cents: 0,
          employment: 'employment',
          family_status: 'Unspecified',
        },
      ],
      coverage_end: '2019-12-27',
      coverage_start: '2019-12-27',
      employer_id: 'employer_id',
      open_enrollment_end: '2019-12-27',
      open_enrollment_start: '2019-12-27',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.benefitProducts.planYears.list('bprd_abc123def456');
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
      client.benefitProducts.planYears.list(
        'bprd_abc123def456',
        { employer_id: 'empr_abc123def456', limit: 20, page: 1, status: 'draft' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnectAPI.NotFoundError);
  });
});
