// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from '@vitable-inc/vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employers', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
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
      phone_number: '2065550100',
      reference_id: 'partner-emp-001',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employers.list({ limit: 20, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createBenefitEligibilityPolicy: only required params', async () => {
    const responsePromise = client.employers.createBenefitEligibilityPolicy('empr_abc123def456', {
      classification: 'classification',
      waiting_period: 'waiting_period',
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
  test.skip('createBenefitEligibilityPolicy: required and optional params', async () => {
    const response = await client.employers.createBenefitEligibilityPolicy('empr_abc123def456', {
      classification: 'classification',
      waiting_period: 'waiting_period',
    });
  });

  // Mock server tests are disabled
  test.skip('listEmployees', async () => {
    const responsePromise = client.employers.listEmployees('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEmployees: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employers.listEmployees(
        'empr_abc123def456',
        { limit: 20, page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('submitCensusSync: only required params', async () => {
    const responsePromise = client.employers.submitCensusSync('empr_abc123def456', {
      employees: [
        {
          date_of_birth: '1990-05-15',
          email: 'jane.doe@acme.com',
          first_name: 'Jane',
          last_name: 'Doe',
          phone: '4155550100',
        },
        {
          date_of_birth: '1985-11-20',
          email: 'john.smith@acme.com',
          first_name: 'John',
          last_name: 'Smith',
          phone: '4155550101',
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

  // Mock server tests are disabled
  test.skip('submitCensusSync: required and optional params', async () => {
    const response = await client.employers.submitCensusSync('empr_abc123def456', {
      employees: [
        {
          date_of_birth: '1990-05-15',
          email: 'jane.doe@acme.com',
          first_name: 'Jane',
          last_name: 'Doe',
          phone: '4155550100',
          address: {
            address_line_1: '123 Main Street',
            city: 'San Francisco',
            state: 'CA',
            zipcode: '94102',
            address_line_2: 'Apt 4B',
          },
          compensation_type: 'Salary',
          employee_class: 'Full Time',
          reference_id: 'EMP-001',
          start_date: '2024-01-15',
        },
        {
          date_of_birth: '1985-11-20',
          email: 'john.smith@acme.com',
          first_name: 'John',
          last_name: 'Smith',
          phone: '4155550101',
          address: {
            address_line_1: 'address_line_1',
            city: 'city',
            state: 'AL',
            zipcode: 'zipcode',
            address_line_2: 'address_line_2',
          },
          compensation_type: 'Hourly',
          employee_class: 'Part Time',
          reference_id: 'reference_id',
          start_date: '2024-03-01',
        },
      ],
    });
  });
});
