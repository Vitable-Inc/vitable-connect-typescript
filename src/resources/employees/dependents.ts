// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DependentsAPI from '../dependents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Dependents extends APIResource {
  /**
   * Creates a new Dependent for a specific Employee for an Employer.
   */
  create(
    id: string,
    body: DependentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DependentsAPI.Dependent> {
    return this._client.post(path`/employees/${id}/dependents`, { body, ...options });
  }

  /**
   * Lists all existing Dependents for a specific Employee for an Employer.
   */
  list(id: string, options?: RequestOptions): APIPromise<DependentListResponse> {
    return this._client.get(path`/employees/${id}/dependents`, options);
  }
}

export interface DependentListResponse {
  data?: Array<DependentsAPI.Dependent>;
}

export interface DependentCreateParams {
  date_of_birth: string;

  first_name: string;

  last_name: string;

  relationship: 'SPOUSE' | 'CHILD';

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND';

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

  suffix?: string;
}

export declare namespace Dependents {
  export {
    type DependentListResponse as DependentListResponse,
    type DependentCreateParams as DependentCreateParams,
  };
}
