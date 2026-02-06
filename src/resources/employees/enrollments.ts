// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnrollmentsAPI from '../enrollments';
import * as BenefitProductsAPI from '../benefit-products/benefit-products';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * Retrieves a paginated list of benefit enrollments for an employee. Enrollments
   * have statuses: 'pending' (in enrollment period), 'enrolled' (active coverage),
   * or 'inactive' (terminated, expired, or unanswered). Filter by status, plan year,
   * or coverage year.
   *
   * @example
   * ```ts
   * const enrollmentList =
   *   await client.employees.enrollments.list(
   *     'empl_abc123def456',
   *   );
   * ```
   */
  list(
    employeeID: string,
    query: EnrollmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnrollmentList> {
    return this._client.get(path`/v1/employees/${employeeID}/enrollments`, { query, ...options });
  }

  /**
   * Completes the benefits election process for all pending enrollments for an
   * employee. Processes enrollment decisions: which benefits to enroll/waive, plan
   * selections, and dependent coverage. Pending enrollments transition to enrolled
   * or waived status based on elections.
   *
   * @example
   * ```ts
   * const enrollmentList =
   *   await client.employees.enrollments.submitElections(
   *     'empl_abc123def456',
   *     {
   *       elections: [
   *         {
   *           enrollment_id: 'enrl_pending123abc',
   *           decision: 'Enrolled',
   *           selected_plan_id: 'plan_gold123abc',
   *           coverage_tier: 'EF',
   *           dependent_ids: [
   *             'dpnd_spouse123abc',
   *             'dpnd_child456def',
   *           ],
   *         },
   *         {
   *           enrollment_id: 'enrl_pending456def',
   *           decision: 'Waived',
   *           coverage_tier: 'Unspecified',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  submitElections(
    employeeID: string,
    body: EnrollmentSubmitElectionsParams,
    options?: RequestOptions,
  ): APIPromise<EnrollmentList> {
    return this._client.post(path`/v1/employees/${employeeID}/enrollments/elect`, { body, ...options });
  }
}

/**
 * Paginated list response containing enrollment resources.
 */
export interface EnrollmentList {
  data: Array<EnrollmentsAPI.Enrollment>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: BenefitProductsAPI.Pagination;
}

/**
 * - `pending` - Pending
 * - `enrolled` - Enrolled
 * - `waived` - Waived
 * - `inactive` - Inactive
 */
export type EnrollmentStatus = 'pending' | 'enrolled' | 'waived' | 'inactive';

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
  /**
   * Individual enrollment election within the batch request.
   */
  export interface Election {
    /**
     * - `Unspecified` - Unspecified
     * - `EE` - Ee
     * - `ES` - Es
     * - `EC` - Ec
     * - `EF` - Ef
     */
    coverage_tier: EnrollmentsAPI.CoverageTier;

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
    type EnrollmentList as EnrollmentList,
    type EnrollmentStatus as EnrollmentStatus,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentSubmitElectionsParams as EnrollmentSubmitElectionsParams,
  };
}
