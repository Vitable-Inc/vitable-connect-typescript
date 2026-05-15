// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SyncAPI from './sync';
import { Sync, SyncRetrieveParams, SyncRetrieveResponse, SyncSubmitParams, SyncSubmitResponse } from './sync';

export class Members extends APIResource {
  sync: SyncAPI.Sync = new SyncAPI.Sync(this._client);
}

Members.Sync = Sync;

export declare namespace Members {
  export {
    Sync as Sync,
    type SyncRetrieveResponse as SyncRetrieveResponse,
    type SyncSubmitResponse as SyncSubmitResponse,
    type SyncRetrieveParams as SyncRetrieveParams,
    type SyncSubmitParams as SyncSubmitParams,
  };
}
