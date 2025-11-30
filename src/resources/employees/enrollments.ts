// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnrollmentsAPI from '../enrollments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * Retrieves a paginated list of benefit enrollments for an employee. Enrollments
   * have statuses: 'pending' (in enrollment period), 'enrolled' (active coverage),
   * or 'inactive' (terminated, expired, or unanswered). Filter by status, plan year,
   * or coverage year.
   */
  list(
    employeeID: string,
    query: EnrollmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnrollmentListResponse> {
    return this._client.get(path`/v1/employees/${employeeID}/enrollments`, { query, ...options });
  }

  /**
   * Completes the benefits election process for all pending enrollments for an
   * employee. Processes enrollment decisions: which benefits to enroll/waive, plan
   * selections, and dependent coverage. Pending enrollments transition to enrolled
   * or waived status based on elections.
   */
  submitElections(
    employeeID: string,
    body: EnrollmentSubmitElectionsParams,
    options?: RequestOptions,
  ): APIPromise<EnrollmentSubmitElectionsResponse> {
    return this._client.post(path`/v1/employees/${employeeID}/enrollments/elect`, { body, ...options });
  }
}

/**
 * - `pending` - Pending
 * - `enrolled` - Enrolled
 * - `waived` - Waived
 * - `inactive` - Inactive
 */
export type EnrollmentStatus = 'pending' | 'enrolled' | 'waived' | 'inactive';

export type EnrollmentListResponse = Array<EnrollmentsAPI.Enrollment>;

export type EnrollmentSubmitElectionsResponse = Array<EnrollmentsAPI.Enrollment>;

export interface EnrollmentListParams {
  /**
   * Filter by coverage year
   */
  coverage_effective_start_year?: number;

  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Filter by plan year start (YYYY)
   */
  plan_year?: number;

  /**
   * Filter by enrollment status
   */
  status?: EnrollmentStatus;
}

export interface EnrollmentSubmitElectionsParams {
  /**
   * List of enrollment elections
   */
  elections: Array<EnrollmentSubmitElectionsParams.Election>;
}

export namespace EnrollmentSubmitElectionsParams {
  export interface Election {
    /**
     * - `Enrolled` - Enrolled
     * - `Waived` - Waived
     */
    decision: 'Enrolled' | 'Waived';

    /**
     * ID of the enrollment (enrl\_\*)
     */
    enrollment_id: string;

    /**
     * - `Unspecified` - Unspecified
     * - `EE` - Ee
     * - `ES` - Es
     * - `EC` - Ec
     * - `EF` - Ef
     */
    coverage_tier?: EnrollmentsAPI.CoverageTier | null;

    /**
     * List of dependent IDs to include in coverage (dpnd\_\*)
     */
    dependent_ids?: Array<string> | null;

    /**
     * ID of the selected plan (plan\_\*). Required if decision is 'Enrolled'
     */
    selected_plan_id?: string | null;
  }
}

export declare namespace Enrollments {
  export {
    type EnrollmentStatus as EnrollmentStatus,
    type EnrollmentListResponse as EnrollmentListResponse,
    type EnrollmentSubmitElectionsResponse as EnrollmentSubmitElectionsResponse,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentSubmitElectionsParams as EnrollmentSubmitElectionsParams,
  };
}
