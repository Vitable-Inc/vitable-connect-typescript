// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sync extends APIResource {
  /**
   * Retrieves a previously-submitted group member sync request by its `grpmsr_` ID.
   * Returns the acceptance timestamp, completion timestamp (if processing has
   * finished), and the per-member `results` once available. While processing is in
   * flight, `completed_at` and `results` are `null`.
   *
   * @example
   * ```ts
   * const sync = await client.groups.members.sync.retrieve(
   *   'request_id',
   *   { group_id: 'grp_abc123def456' },
   * );
   * ```
   */
  retrieve(
    requestID: string,
    params: SyncRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SyncRetrieveResponse> {
    const { group_id } = params;
    return this._client.get(path`/v1/groups/${group_id}/members/sync/${requestID}`, options);
  }

  /**
   * Submits a member sync payload for the specified group. Members in the payload
   * will be queued for processing asynchronously. Returns HTTP 202 with the batch ID
   * and acceptance timestamp.
   *
   * @example
   * ```ts
   * const response = await client.groups.members.sync.submit(
   *   'grp_abc123def456',
   *   {
   *     members: [
   *       {
   *         reference_id: 'EMP-001',
   *         first_name: 'Jane',
   *         last_name: 'Doe',
   *         date_of_birth: '1990-05-15',
   *         email: 'jane.doe@acme.com',
   *         phone: '4155550100',
   *         plan_id: 'pln_abc123def456',
   *         address: {
   *           address_line_1: '123 Main Street',
   *           address_line_2: 'Apt 4B',
   *           city: 'San Francisco',
   *           state: 'CA',
   *           zipcode: '94102',
   *         },
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  submit(groupID: string, body: SyncSubmitParams, options?: RequestOptions): APIPromise<SyncSubmitResponse> {
    return this._client.post(path`/v1/groups/${groupID}/members/sync`, { body, ...options });
  }
}

/**
 * Response containing a single group member sync request detail resource.
 */
export interface SyncRetrieveResponse {
  data: SyncRetrieveResponse.Data;
}

export namespace SyncRetrieveResponse {
  export interface Data {
    accepted_at: string;

    completed_at: string | null;

    group_id: string;

    request_id: string;

    results: Data.Results | null;
  }

  export namespace Data {
    export interface Results {
      added_group_member_ids: Array<string>;

      failures: Array<Results.Failure>;

      removed_group_member_ids: Array<string>;
    }

    export namespace Results {
      export interface Failure {
        /**
         * - `add` - add
         * - `remove` - remove
         */
        operation: 'add' | 'remove';

        reason: string;

        reference_id: string;
      }
    }
  }
}

/**
 * Response containing a single group member sync detail resource.
 */
export interface SyncSubmitResponse {
  data: SyncSubmitResponse.Data;
}

export namespace SyncSubmitResponse {
  export interface Data {
    accepted_at: string;

    group_id: string;

    request_id: string;
  }
}

export interface SyncRetrieveParams {
  /**
   * Unique group identifier (grp\_\*)
   */
  group_id: string;
}

export interface SyncSubmitParams {
  members: Array<SyncSubmitParams.Member>;
}

export namespace SyncSubmitParams {
  export interface Member {
    address: Member.Address;

    date_of_birth: string;

    first_name: string;

    last_name: string;

    phone: string;

    plan_id: string;

    reference_id: string;

    email?: string | null;
  }

  export namespace Member {
    export interface Address {
      address_line_1: string;

      city: string;

      state: string;

      zipcode: string;

      address_line_2?: string | null;
    }
  }
}

export declare namespace Sync {
  export {
    type SyncRetrieveResponse as SyncRetrieveResponse,
    type SyncSubmitResponse as SyncSubmitResponse,
    type SyncRetrieveParams as SyncRetrieveParams,
    type SyncSubmitParams as SyncSubmitParams,
  };
}
