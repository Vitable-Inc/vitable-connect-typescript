// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitableConnect from '@vitable-inc/vitable-connect';

const client = new VitableConnect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sync', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.groups.members.sync.retrieve('request_id', {
      group_id: 'grp_abc123def456',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.groups.members.sync.retrieve('request_id', {
      group_id: 'grp_abc123def456',
    });
  });

  // Mock server tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.groups.members.sync.submit('grp_abc123def456', {
      members: [
        {
          address: {
            address_line_1: 'x',
            city: 'x',
            state: 'xx',
            zipcode: 'x',
          },
          date_of_birth: '2019-12-27',
          first_name: 'first_name',
          last_name: 'last_name',
          phone: 'phone',
          plan_id: 'x',
          reference_id: 'x',
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.groups.members.sync.submit('grp_abc123def456', {
      members: [
        {
          address: {
            address_line_1: 'x',
            city: 'x',
            state: 'xx',
            zipcode: 'x',
            address_line_2: 'address_line_2',
          },
          date_of_birth: '2019-12-27',
          first_name: 'first_name',
          last_name: 'last_name',
          phone: 'phone',
          plan_id: 'x',
          reference_id: 'x',
          email: 'dev@stainless.com',
        },
      ],
    });
  });
});
