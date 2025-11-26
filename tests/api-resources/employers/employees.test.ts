// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employees', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.employers.employees.create('empr__1k--w2KifJ1', {
      date_of_birth: '2019-12-27',
      first_name: 'first_name',
      last_name: 'last_name',
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
    const response = await client.employers.employees.create('empr__1k--w2KifJ1', {
      date_of_birth: '2019-12-27',
      first_name: 'first_name',
      last_name: 'last_name',
      start_date: '2019-12-27',
      gender: 'MALE',
      sex: 'MALE',
      ssn: 'ssn',
      suffix: 'suffix',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employers.employees.list('empr__1k--w2KifJ1');
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
        'empr__1k--w2KifJ1',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitablePartnerAPI.NotFoundError);
  });
});
