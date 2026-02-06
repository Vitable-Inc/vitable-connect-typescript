// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from 'vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.employers.create({
      address: {
        address_line_1: '789 Business Blvd',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98101',
      },
      ein: '12-3456789',
      email: 'hr@newco.com',
      legal_name: 'NewCo Industries LLC',
      name: 'NewCo Industries',
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
    const response = await client.employers.create({
      address: {
        address_line_1: '789 Business Blvd',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98101',
        address_line_2: 'Floor 5',
      },
      ein: '12-3456789',
      email: 'hr@newco.com',
      legal_name: 'NewCo Industries LLC',
      name: 'NewCo Industries',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.employers.retrieve('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.employers.update('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employers.update(
        'empr_abc123def456',
        {
          active: true,
          address: {
            address_line_1: '456 New Address Ave',
            city: 'San Francisco',
            state: 'CA',
            zipcode: '94103',
            address_line_2: 'Suite 200',
          },
          legal_name: 'x',
          name: 'Acme Corp (Updated)',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employers.list();
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
      client.employers.list(
        {
          active_in: true,
          limit: 20,
          name: 'Acme',
          page: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createEligibilityPolicy: only required params', async () => {
    const responsePromise = client.employers.createEligibilityPolicy('empr_abc123def456', {
      effective_date: '2025-01-01',
      name: 'Standard Full-Time Eligibility',
      rules: [
        {
          operator: 'in',
          rule_type: 'employment_status',
          value: 'full_time,part_time_30_plus',
        },
        {
          operator: 'greater_than_or_equal',
          rule_type: 'waiting_period_days',
          value: '30',
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
  test.skip('createEligibilityPolicy: required and optional params', async () => {
    const response = await client.employers.createEligibilityPolicy('empr_abc123def456', {
      effective_date: '2025-01-01',
      name: 'Standard Full-Time Eligibility',
      rules: [
        {
          operator: 'in',
          rule_type: 'employment_status',
          value: 'full_time,part_time_30_plus',
        },
        {
          operator: 'greater_than_or_equal',
          rule_type: 'waiting_period_days',
          value: '30',
        },
      ],
      policy_to_replace_id: 'epol_abc123def456',
      description: 'Eligibility policy for full-time employees working 30+ hours per week',
    });
  });
});
