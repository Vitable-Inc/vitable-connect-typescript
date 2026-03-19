// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage benefit enrollments and elections for employees
 */
export class Enrollments extends APIResource {
  /**
   * Retrieves detailed information for a specific enrollment by ID.
   */
  retrieve(enrollmentID: string, options?: RequestOptions): APIPromise<EnrollmentRetrieveResponse> {
    return this._client.get(path`/v1/enrollments/${enrollmentID}`, options);
  }
}

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

export declare namespace Enrollments {
  export {
    type Enrollment as Enrollment,
    type EnrollmentStatus as EnrollmentStatus,
    type EnrollmentRetrieveResponse as EnrollmentRetrieveResponse,
  };
}
