// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { VitablePartnerAPI } from '../client';

export abstract class APIResource {
  protected _client: VitablePartnerAPI;

  constructor(client: VitablePartnerAPI) {
    this._client = client;
  }
}
