// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from '@vitable-inc/vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  identityToken: 'My Identity Token',
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

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employers.update(
        'empr_abc123def456',
        {
          active: true,
          address: {
            address_line_1: 'address_line_1',
            city: 'city',
            state: 'xx',
            zipcode: 'zipcode',
            address_line_2: 'address_line_2',
          },
          legal_name: 'x',
          name: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
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
      client.employers.list(
        {
          benefit_family: ['mec'],
          benefit_lifecycle_stage: ['open_enrollment'],
          hris_provider: ['string'],
          hris_status: ['Pending'],
          include_cancelled: true,
          limit: 20,
          page: 1,
          search: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('ensurePayrollIntegrationEmail', async () => {
    const responsePromise = client.employers.ensurePayrollIntegrationEmail('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listBenefitPlanYearEnrollments: only required params', async () => {
    const responsePromise = client.employers.listBenefitPlanYearEnrollments('plyr_abc123def456', {
      employer_id: 'empr_abc123def456',
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
  test.skip('listBenefitPlanYearEnrollments: required and optional params', async () => {
    const response = await client.employers.listBenefitPlanYearEnrollments('plyr_abc123def456', {
      employer_id: 'empr_abc123def456',
      election_status: ['Enrolled'],
      limit: 20,
      page: 1,
      search: 'search',
    });
  });

  // Mock server tests are disabled
  test.skip('listBenefitPlanYears', async () => {
    const responsePromise = client.employers.listBenefitPlanYears('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
        {
          employment_status: 'active',
          limit: 20,
          page: 1,
          search: 'jane',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listHRISProviders', async () => {
    const responsePromise = client.employers.listHRISProviders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listInvoices', async () => {
    const responsePromise = client.employers.listInvoices('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listInvoices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employers.listInvoices(
        'empr_abc123def456',
        { limit: 20, offset: 'x' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listPayrollDeductionStatements', async () => {
    const responsePromise = client.employers.listPayrollDeductionStatements('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPayrollDeductionStatements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.employers.listPayrollDeductionStatements(
        'empr_abc123def456',
        { limit: 20, page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveBenefitPlanYear: only required params', async () => {
    const responsePromise = client.employers.retrieveBenefitPlanYear('plyr_abc123def456', {
      employer_id: 'empr_abc123def456',
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
  test.skip('retrieveBenefitPlanYear: required and optional params', async () => {
    const response = await client.employers.retrieveBenefitPlanYear('plyr_abc123def456', {
      employer_id: 'empr_abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveHRIS', async () => {
    const responsePromise = client.employers.retrieveHRIS('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveInvoicePdf: only required params', async () => {
    const responsePromise = client.employers.retrieveInvoicePdf('INV-00042', {
      employer_id: 'empr_abc123def456',
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
  test.skip('retrieveInvoicePdf: required and optional params', async () => {
    const response = await client.employers.retrieveInvoicePdf('INV-00042', {
      employer_id: 'empr_abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('retrievePayrollAccessSetup', async () => {
    const responsePromise = client.employers.retrievePayrollAccessSetup('empr_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
        },
        {
          date_of_birth: '1985-11-20',
          email: 'john.smith@acme.com',
          first_name: 'John',
          last_name: 'Smith',
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
          address: {
            address_line_1: '123 Main Street',
            city: 'San Francisco',
            state: 'CA',
            zipcode: '94102',
            address_line_2: 'Apt 4B',
          },
          compensation_type: 'Salary',
          employee_class: 'Full Time',
          phone: '4155550100',
          reference_id: 'EMP-001',
          start_date: '2024-01-15',
        },
        {
          date_of_birth: '1985-11-20',
          email: 'john.smith@acme.com',
          first_name: 'John',
          last_name: 'Smith',
          address: {
            address_line_1: 'address_line_1',
            city: 'city',
            state: 'AL',
            zipcode: 'zipcode',
            address_line_2: 'address_line_2',
          },
          compensation_type: 'Hourly',
          employee_class: 'Part Time',
          phone: '4155550101',
          reference_id: 'reference_id',
          start_date: '2024-03-01',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('submitPayrollAccessSetup: only required params', async () => {
    const responsePromise = client.employers.submitPayrollAccessSetup('empr_abc123def456', {
      access_method: 'SELF_SETUP',
      all_benefit_eligible_employees_present: true,
      classifications_accurate: true,
      employees_in_payroll_acknowledged: true,
      has_additional_payroll_system: true,
      is_controlled_group: true,
      payroll_data_impacts_eligibility_acknowledged: true,
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
  test.skip('submitPayrollAccessSetup: required and optional params', async () => {
    const response = await client.employers.submitPayrollAccessSetup('empr_abc123def456', {
      access_method: 'SELF_SETUP',
      all_benefit_eligible_employees_present: true,
      classifications_accurate: true,
      employees_in_payroll_acknowledged: true,
      has_additional_payroll_system: true,
      is_controlled_group: true,
      payroll_data_impacts_eligibility_acknowledged: true,
      additional_access_method: 'SELF_SETUP',
      additional_integration_confirmed: true,
      additional_login_url: 'additional_login_url',
      additional_password: 'additional_password',
      additional_phone: 'additional_phone',
      additional_username: 'additional_username',
      classification_correction_source: 'ENTER_NAMES',
      integration_confirmed: true,
      login_url: 'login_url',
      misclassified_employee_names: ['string'],
      missing_employee_resolution: 'EMAIL_CENSUS',
      password: 'password',
      phone: 'phone',
      remaining_employee_action: 'VITABLE_UPDATE',
      same_payroll_covers_other_eins: true,
      username: 'username',
    });
  });

  // Mock server tests are disabled
  test.skip('updateSettings: only required params', async () => {
    const responsePromise = client.employers.updateSettings('empr_abc123def456', {
      pay_frequency: 'bi_weekly',
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
  test.skip('updateSettings: required and optional params', async () => {
    const response = await client.employers.updateSettings('empr_abc123def456', {
      pay_frequency: 'bi_weekly',
    });
  });
});
