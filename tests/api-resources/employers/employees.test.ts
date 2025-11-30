// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnectAPI from 'vitable-connect-api';

const client = new VitableConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employees', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.employers.employees.create('empr_abc123def456', {
      date_of_birth: '2019-12-27',
      email: 'dev@stainless.com',
      first_name: 'x',
      last_name: 'x',
      sex: 'Male',
      ssn: 'xxxxxxxxx',
      start_date: '2019-12-27',
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
    const response = await client.employers.employees.create('empr_abc123def456', {
      date_of_birth: '2019-12-27',
      email: 'dev@stainless.com',
      first_name: 'x',
      last_name: 'x',
      sex: 'Male',
      ssn: 'xxxxxxxxx',
      start_date: '2019-12-27',
      address: {
        city: 'city',
        state: 'xx',
        street_1: 'street_1',
        zip_code: 'zip_code',
        country: 'country',
        street_2: 'street_2',
      },
      employee_class: 'Full Time',
      gender: 'gender',
      phone: 'phone',
      suffix: 'suffix',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employers.employees.list('empr_abc123def456');
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
      client.employers.employees.list(
        'empr_abc123def456',
        { active_in: true, employee_class: 'Full Time', limit: 20, page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitableConnectAPI.NotFoundError);
  });
});
