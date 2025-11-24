// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companies', () => {
  // Prism tests are disabled
  test.skip('createBenefitEligibilityPolicy: only required params', async () => {
    const responsePromise = client.companies.createBenefitEligibilityPolicy(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { classification: 'Full time', waiting_period: '1st of the following month' },
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
  test.skip('createBenefitEligibilityPolicy: required and optional params', async () => {
    const response = await client.companies.createBenefitEligibilityPolicy(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { classification: 'Full time', waiting_period: '1st of the following month' },
    );
  });

  // Prism tests are disabled
  test.skip('createEmployee: only required params', async () => {
    const responsePromise = client.companies.createEmployee('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      address: { address_line_1: 'address_line_1', city: 'city', state: 'state', zipcode: 'zipcode' },
      date_of_birth: '2019-12-27',
      email: 'dev@stainless.com',
      employee_class: 'Full Time',
      employee_compensation_type: 'Salary',
      employee_start_date: '2019-12-27',
      first_name: 'first_name',
      grant_benefit_eligibility_in: true,
      last_name: 'last_name',
      phone: 'phone',
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
  test.skip('createEmployee: required and optional params', async () => {
    const response = await client.companies.createEmployee('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      address: {
        address_line_1: 'address_line_1',
        city: 'city',
        state: 'state',
        zipcode: 'zipcode',
        address_line_2: 'address_line_2',
      },
      date_of_birth: '2019-12-27',
      email: 'dev@stainless.com',
      employee_class: 'Full Time',
      employee_compensation_type: 'Salary',
      employee_start_date: '2019-12-27',
      first_name: 'first_name',
      grant_benefit_eligibility_in: true,
      last_name: 'last_name',
      phone: 'phone',
      middle_name: 'middle_name',
      preferred_language: 'en',
      sex: 'Male',
      suffix: 'Sr',
    });
  });

  // Prism tests are disabled
  test.skip('listBenefitEligibilities', async () => {
    const responsePromise = client.companies.listBenefitEligibilities('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listBenefitEligibilities: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companies.listBenefitEligibilities(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { employee_name: 'employee_name', limit: 0, page: 0, terminated_in: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitablePartnerAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPayrollDeductionStatements', async () => {
    const responsePromise = client.companies.listPayrollDeductionStatements(
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
  test.skip('listPayrollDeductionStatements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companies.listPayrollDeductionStatements(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 0, page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitablePartnerAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('searchBenefits', async () => {
    const responsePromise = client.companies.searchBenefits('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchBenefits: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companies.searchBenefits(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { active_in: true, configured_in: true, non_expired_coverage_and_subscription_in: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitablePartnerAPI.NotFoundError);
  });
});
