// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PageNumberPage } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage benefit enrollments and elections for employees
 */
export class Enrollments extends APIResource {
  /**
   * Retrieves detailed information for a specific enrollment by ID.
   *
   * @example
   * ```ts
   * const enrollment = await client.enrollments.retrieve(
   *   'enrl_AAAAAAAAAAAAAAAAAAAAAQ',
   * );
   * ```
   */
  retrieve(enrollmentID: string, options?: RequestOptions): APIPromise<EnrollmentRetrieveResponse> {
    return this._client.get(path`/v1/enrollments/${enrollmentID}`, options);
  }

  /**
   * Closes the targeted enrollment and creates a new unanswered enrollment for the
   * same member and plan year. VPC never requires a qualifying life event; other
   * products require an accepted, member-owned event outside open enrollment.
   * User-backed callers must provide a reason; it is optional for userless
   * organization callers. API keys and unbound access tokens may act across the
   * caller organization's book. Employer-bound access tokens may act only on that
   * employer's enrollments, and employee-bound access tokens may act only on that
   * employee's enrollment. Tenant or token-scope mismatches return the same
   * non-disclosing 404 before the request body is validated.
   *
   * @example
   * ```ts
   * const response = await client.enrollments.reissue(
   *   'enrl_AAAAAAAAAAAAAAAAAAAAAQ',
   *   {
   *     qualifying_life_event_id: 'qle_AAAAAAAAAAAAAAAAAAAAAQ',
   *     reason:
   *       'Member needs a new election after a qualifying event.',
   *     ticket_number: 'BPT-1234',
   *   },
   * );
   * ```
   */
  reissue(
    enrollmentID: string,
    body: EnrollmentReissueParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnrollmentReissueResponse> {
    return this._client.post(path`/v1/enrollments/${enrollmentID}/reissue`, { body, ...options });
  }

  /**
   * Terminates enrolled coverage immediately. An accepted qualifying life event
   * owned by the enrollment member is required unless the plan is VPC or ICHRA.
   * User-backed callers must provide a reason; it is optional for userless
   * organization callers. API keys may act across the caller organization's book.
   * Tenant mismatches return the same non-disclosing 404 before the request body is
   * validated.
   *
   * @example
   * ```ts
   * await client.enrollments.terminate(
   *   'enrl_AAAAAAAAAAAAAAAAAAAAAQ',
   *   {
   *     qualifying_life_event_id: 'qle_AAAAAAAAAAAAAAAAAAAAAQ',
   *     reason:
   *       'Member requested coverage termination after a qualifying event.',
   *     ticket_number: 'BPT-1234',
   *   },
   * );
   * ```
   */
  terminate(
    enrollmentID: string,
    body: EnrollmentTerminateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/v1/enrollments/${enrollmentID}/terminate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EnrollmentsPageNumberPage = PageNumberPage<Enrollment>;

export interface Enrollment {
  /**
   * Unique enrollment identifier (enrl\_\*)
   */
  id: string;

  /**
   * When the employee enrolled or waived
   */
  answered_at: string | null;

  /**
   * Nested benefit product summary
   */
  benefit: Enrollment.Benefit;

  /**
   * Coverage period end date
   */
  coverage_end: string | null;

  /**
   * Coverage period start date
   */
  coverage_start: string;

  /**
   * When the enrollment was created
   */
  created_at: string;

  /**
   * Employee monthly payroll deduction in cents
   */
  employee_deduction_in_cents: number | null;

  /**
   * Employee ID (empl\_\*)
   */
  employee_id: string;

  /**
   * Employer monthly contribution in cents
   */
  employer_contribution_in_cents: number | null;

  /**
   * Employer ID (empr\_\*)
   */
  employer_id: string;

  /**
   * - `pending` - Pending
   * - `enrolled` - Enrolled
   * - `waived` - Waived
   * - `inactive` - Inactive
   */
  status: EnrollmentStatus;

  /**
   * When coverage was terminated
   */
  terminated_at: string | null;

  /**
   * When the enrollment was last updated
   */
  updated_at: string;
}

export namespace Enrollment {
  /**
   * Nested benefit product summary
   */
  export interface Benefit {
    /**
     * Benefit product ID (bprd\_\*)
     */
    id: string;

    /**
     * - `Medical` - Medical
     * - `Dental` - Dental
     * - `Vision` - Vision
     * - `Hospital` - Hospital
     */
    category: 'Medical' | 'Dental' | 'Vision' | 'Hospital';

    /**
     * Display name of the benefit product
     */
    name: string;

    /**
     * - `EBA` - Eba Mec
     * - `VPC` - Vpc Enhanced
     * - `VPC_CORE` - Vpc Core
     * - `MEC` - Vpc Mec
     * - `MEC2` - Mec2
     * - `MEC_PLUS` - Mec Plus
     * - `MVP` - Mvp
     * - `MVP2` - Mvp2
     * - `MVPSL` - Mvpsl
     * - `MVPSL2` - Mvpsl2
     * - `VD` - Dental
     * - `VV` - Vision
     * - `ICHRA` - Ichra
     * - `ICHRA_PREMIUM_PLUS` - Ichra Premium Plus
     * - `ICHRA_REIMBURSEMENT_ONLY` - Ichra Reimbursement Only
     */
    product_code:
      | 'EBA'
      | 'VPC'
      | 'VPC_CORE'
      | 'MEC'
      | 'MEC2'
      | 'MEC_PLUS'
      | 'MVP'
      | 'MVP2'
      | 'MVPSL'
      | 'MVPSL2'
      | 'VD'
      | 'VV'
      | 'ICHRA'
      | 'ICHRA_PREMIUM_PLUS'
      | 'ICHRA_REIMBURSEMENT_ONLY';
  }
}

/**
 * - `pending` - Pending
 * - `enrolled` - Enrolled
 * - `waived` - Waived
 * - `inactive` - Inactive
 */
export type EnrollmentStatus = 'pending' | 'enrolled' | 'waived' | 'inactive';

/**
 * Response containing a single enrollment resource.
 */
export interface EnrollmentRetrieveResponse {
  data: Enrollment;
}

/**
 * Response containing a single reissue enrollment resource.
 */
export interface EnrollmentReissueResponse {
  data: EnrollmentReissueResponse.Data;
}

export namespace EnrollmentReissueResponse {
  export interface Data {
    /**
     * Opaque identifier for the new unanswered enrollment
     */
    enrollment_id: string;
  }
}

export interface EnrollmentReissueParams {
  /**
   * Accepted member qualifying life event identifier (qle\_\*)
   */
  qualifying_life_event_id?: string | null;

  /**
   * Audit reason for the reissue; required for user-backed callers and optional for
   * userless organization callers
   */
  reason?: string | null;

  /**
   * Optional support or operational ticket number
   */
  ticket_number?: string | null;
}

export interface EnrollmentTerminateParams {
  /**
   * Accepted member qualifying life event identifier (qle\_\*)
   */
  qualifying_life_event_id?: string | null;

  /**
   * Audit reason for the termination; required for user-backed callers and optional
   * for userless organization callers
   */
  reason?: string | null;

  /**
   * Optional support or operational ticket number
   */
  ticket_number?: string | null;
}

export declare namespace Enrollments {
  export {
    type Enrollment as Enrollment,
    type EnrollmentStatus as EnrollmentStatus,
    type EnrollmentRetrieveResponse as EnrollmentRetrieveResponse,
    type EnrollmentReissueResponse as EnrollmentReissueResponse,
    type EnrollmentReissueParams as EnrollmentReissueParams,
    type EnrollmentTerminateParams as EnrollmentTerminateParams,
  };
}
