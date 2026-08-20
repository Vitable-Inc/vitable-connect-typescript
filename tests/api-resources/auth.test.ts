// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from '@vitable-inc/vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  identityToken: 'My Identity Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Mock server tests are disabled
  test.skip('completeProfile: only required params', async () => {
    const responsePromise = client.auth.completeProfile({
      first_name: 'first_name',
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

  // Mock server tests are disabled
  test.skip('completeProfile: required and optional params', async () => {
    const response = await client.auth.completeProfile({
      first_name: 'first_name',
      last_name: 'last_name',
      phone: 'phone',
      user_type: 'Member',
    });
  });

  // Mock server tests are disabled
  test.skip('issueAccessToken: only required params', async () => {
    const responsePromise = client.auth.issueAccessToken({ grant_type: 'client_credentials' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('issueAccessToken: required and optional params', async () => {
    const response = await client.auth.issueAccessToken({
      grant_type: 'client_credentials',
      bound_entity: { id: 'id', type: 'employer' },
    });
  });

  // Mock server tests are disabled
  test.skip('listPersonas', async () => {
    const responsePromise = client.auth.listPersonas();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.auth.login({ email_or_phone: 'email_or_phone', user_type: 'Member' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.auth.login({
      email_or_phone: 'email_or_phone',
      user_type: 'Member',
      app_name: 'app_name',
      app_version: 'app_version',
      password: 'password',
      two_factor_token: 'two_factor_token',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveMe', async () => {
    const responsePromise = client.auth.retrieveMe();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('signUp', async () => {
    const responsePromise = client.auth.signUp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('signUp: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.signUp({ user_type: 'Member' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(VitableConnect.NotFoundError);
  });
});
