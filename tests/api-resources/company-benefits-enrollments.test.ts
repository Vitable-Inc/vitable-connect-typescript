// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VitablePartnerAPI from 'vitable-partner-api';

const client = new VitablePartnerAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companyBenefitsEnrollments', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.companyBenefitsEnrollments.list();
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
      client.companyBenefitsEnrollments.list(
        {
          answer_status: 'Unanswered',
          company_benefit_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          company_member_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VitablePartnerAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('elect: only required params', async () => {
    const responsePromise = client.companyBenefitsEnrollments.elect({
      dependents: [
        {
          date_of_birth: '2019-12-27',
          fake_id: 'fake_id',
          first_name: 'first_name',
          last_name: 'last_name',
          type: 'spouse',
        },
      ],
      elections: [{ enrollment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', waived_in: true }],
      signing: {
        e_sign_consent_in: true,
        full_name: 'full_name',
        signature: 'signature',
        signature_date: '2019-12-27',
      },
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
  test.skip('elect: required and optional params', async () => {
    const response = await client.companyBenefitsEnrollments.elect({
      dependents: [
        {
          date_of_birth: '2019-12-27',
          fake_id: 'fake_id',
          first_name: 'first_name',
          last_name: 'last_name',
          type: 'spouse',
          address: { city: 'city', state: 'state', street_address: 'street_address', zip_code: 'zip_code' },
          email: 'email',
          phone: 'phone',
          suffix: 'Jr.',
        },
      ],
      elections: [
        {
          enrollment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          waived_in: true,
          chosen_external_plan: { plan_id: 'plan_id', plan_name: 'plan_name', carrier: 'carrier' },
          chosen_item_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          waived_dependents_fake_ids: ['string'],
        },
      ],
      signing: {
        e_sign_consent_in: true,
        full_name: 'full_name',
        signature: 'signature',
        signature_date: '2019-12-27',
      },
    });
  });

  // Prism tests are disabled
  test.skip('reissue: only required params', async () => {
    const responsePromise = client.companyBenefitsEnrollments.reissue(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { admin_ticket_number: 'admin_ticket_number', evidence_notes: 'evidence_notes' },
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
  test.skip('reissue: required and optional params', async () => {
    const response = await client.companyBenefitsEnrollments.reissue('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      admin_ticket_number: 'admin_ticket_number',
      evidence_notes: 'evidence_notes',
      qualifying_life_event_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
