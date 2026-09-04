// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { VitableConnect } from '../client';

export abstract class APIResource {
  protected _client: VitableConnect;

  constructor(client: VitableConnect) {
    this._client = client;
  }
}
