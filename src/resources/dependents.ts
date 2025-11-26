// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EmployeesAPI from './employees/employees';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Dependents extends APIResource {
  /**
   * Updates an existing Dependent for a specific Employee for an Employer.
   */
  update(id: string, body: DependentUpdateParams, options?: RequestOptions): APIPromise<Dependent> {
    return this._client.put(path`/dependents/${id}`, { body, ...options });
  }
}

export interface Dependent extends EmployeesAPI.Member {
  relationship: 'SPOUSE' | 'CHILD';
}

export interface UpdateDependentRequest {
  date_of_birth?: string;

  first_name?: string;

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND';

  last_name?: string;

  relationship?: 'SPOUSE' | 'CHILD';

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

  suffix?: string;
}

export interface DependentUpdateParams {
  date_of_birth?: string;

  first_name?: string;

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND';

  last_name?: string;

  relationship?: 'SPOUSE' | 'CHILD';

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

  suffix?: string;
}

export declare namespace Dependents {
  export {
    type Dependent as Dependent,
    type UpdateDependentRequest as UpdateDependentRequest,
    type DependentUpdateParams as DependentUpdateParams,
  };
}
