// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { VitableConnectAPI } from '../client';

export abstract class APIResource {
  protected _client: VitableConnectAPI;

  constructor(client: VitableConnectAPI) {
    this._client = client;
  }
}
