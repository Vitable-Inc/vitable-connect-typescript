// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnrollmentsAPI from '../enrollments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * Gets the Enrollments (pending, enrolled, or inactive) for a specific Employee
   * with additional filters.
   */
  list(
    id: string,
    query: EnrollmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnrollmentListResponse> {
    return this._client.get(path`/employees/${id}/enrollments`, { query, ...options });
  }

  /**
   * Benefits election process of all pending enrollments. Consists of all pending
   * enrollments, whether enrolled/waived, and IDs of the dependents.
   */
  elect(
    id: string,
    body: EnrollmentElectParams,
    options?: RequestOptions,
  ): APIPromise<EnrollmentElectResponse> {
    return this._client.post(path`/employees/${id}/enrollments/elect`, { body, ...options });
  }
}

export interface EnrollmentListResponse {
  data?: Array<EnrollmentsAPI.Enrollment>;
}

export interface EnrollmentElectResponse {
  data?: Array<EnrollmentsAPI.Enrollment>;
}

export interface EnrollmentListParams {
  status?: 'pending' | 'enrolled' | 'waived' | 'inactive';
}

export interface EnrollmentElectParams {
  elections: Array<EnrollmentElectParams.Election>;
}

export namespace EnrollmentElectParams {
  export interface Election {
    decision: 'enrolled' | 'waived';

    enrollment_id: string;

    dependent_ids?: Array<string>;

    /**
     * Required if decision is enrolled
     */
    plan_id?: string;
  }
}

export declare namespace Enrollments {
  export {
    type EnrollmentListResponse as EnrollmentListResponse,
    type EnrollmentElectResponse as EnrollmentElectResponse,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentElectParams as EnrollmentElectParams,
  };
}
