// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnectAPI from 'vitable-connect-api';

const client = new VitableConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dependents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.employees.dependents.create('empl__1k--w2KifJ1', {
      date_of_birth: '2019-12-27',
      first_name: 'first_name',
      last_name: 'last_name',
      relationship: 'SPOUSE',
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
    const response = await client.employees.dependents.create('empl__1k--w2KifJ1', {
      date_of_birth: '2019-12-27',
      first_name: 'first_name',
      last_name: 'last_name',
      relationship: 'SPOUSE',
      gender: 'MALE',
      sex: 'MALE',
      suffix: 'suffix',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.employees.dependents.list('empl__1k--w2KifJ1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
