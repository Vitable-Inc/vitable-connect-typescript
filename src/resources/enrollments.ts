// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EnrollmentsAPI from './enrollments';
import * as EmployeesEnrollmentsAPI from './employees/enrollments';
import * as DependentsAPI from './members/dependents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * Retrieves detailed information for a specific enrollment by ID. Returns selected
   * plan, coverage dates, enrolled dependents, premium amounts, and status. This
   * endpoint is critical for viewing comprehensive enrollment information.
   *
   * @example
   * ```ts
   * const enrollment = await client.enrollments.retrieve(
   *   'enrl_abc123def456',
   * );
   * ```
   */
  retrieve(enrollmentID: string, options?: RequestOptions): APIPromise<EnrollmentRetrieveResponse> {
    return this._client.get(path`/v1/enrollments/${enrollmentID}`, options);
  }

  /**
   * Retrieves all benefit plans eligible for selection for a specific enrollment.
   * Returns available plan options with coverage tiers, premium costs, deductibles,
   * and carrier info. Use during enrollment process to show employees their plan
   * choices.
   *
   * @example
   * ```ts
   * const response = await client.enrollments.listPlans(
   *   'enrl_abc123def456',
   * );
   * ```
   */
  listPlans(enrollmentID: string, options?: RequestOptions): APIPromise<EnrollmentListPlansResponse> {
    return this._client.get(path`/v1/enrollments/${enrollmentID}/plans`, options);
  }

  /**
   * Reissues an enrollment due to a qualifying life event, allowing mid-year benefit
   * changes. Enables employees to modify benefit selections outside open enrollment
   * after a significant life event. Common scenarios: adding newborn child, covering
   * new spouse, adjusting coverage after losing other coverage.
   *
   * @example
   * ```ts
   * const response = await client.enrollments.reissue(
   *   'enrl_abc123def456',
   *   { qle_id: 'qle_marriage123abc' },
   * );
   * ```
   */
  reissue(
    enrollmentID: string,
    body: EnrollmentReissueParams,
    options?: RequestOptions,
  ): APIPromise<EnrollmentReissueResponse> {
    return this._client.post(path`/v1/enrollments/${enrollmentID}/reissue`, { body, ...options });
  }
}

/**
 * - `Unspecified` - Unspecified
 * - `EE` - Ee
 * - `ES` - Es
 * - `EC` - Ec
 * - `EF` - Ef
 */
export type CoverageTier = 'Unspecified' | 'EE' | 'ES' | 'EC' | 'EF';

/**
 * Serializer for Enrollment entity in public API responses.
 *
 * An Enrollment represents an employee's benefit enrollment for a specific plan
 * year.
 */
export interface Enrollment {
  /**
   * Unique enrollment identifier with 'enrl\_' prefix
   */
  id: string;

  /**
   * ID of the benefit product (bprd\_\*)
   */
  benefit_product_id: string;

  /**
   * - `Unspecified` - Unspecified
   * - `EE` - Ee
   * - `ES` - Es
   * - `EC` - Ec
   * - `EF` - Ef
   */
  coverage_tier: CoverageTier;

  /**
   * Timestamp when the enrollment was created
   */
  created_at: string;

  /**
   * ID of the employee (empl\_\*)
   */
  employee_id: string;

  /**
   * ID of the plan year (plyr\_\*)
   */
  plan_year_id: string;

  /**
   * - `pending` - Pending
   * - `enrolled` - Enrolled
   * - `waived` - Waived
   * - `inactive` - Inactive
   */
  status: EmployeesEnrollmentsAPI.EnrollmentStatus;

  /**
   * Timestamp when the enrollment was last updated
   */
  updated_at: string;

  /**
   * Date when coverage ends
   */
  coverage_end_date?: string | null;

  /**
   * Date when coverage begins
   */
  coverage_start_date?: string | null;

  /**
   * Employee's election decision: 'enrolled' (accepted) or 'waived' (declined)
   */
  decision?: string | null;

  /**
   * Employee's monthly contribution in cents
   */
  employee_contribution_cents?: number | null;

  /**
   * Employer's monthly contribution in cents
   */
  employer_contribution_cents?: number | null;

  /**
   * List of dependents included in this enrollment
   */
  enrolled_dependents?: Array<Enrollment.EnrolledDependent>;

  /**
   * ID of the selected plan (plan\_\*), if enrolled
   */
  selected_plan_id?: string | null;

  /**
   * Name of the selected plan
   */
  selected_plan_name?: string | null;
}

export namespace Enrollment {
  /**
   * Dependent included in an enrollment.
   */
  export interface EnrolledDependent {
    /**
     * ID of the dependent (dpnd\_\*)
     */
    dependent_id: string;

    /**
     * Dependent's first name
     */
    first_name: string;

    /**
     * Dependent's last name
     */
    last_name: string;

    /**
     * - `Spouse` - Spouse
     * - `Child` - Child
     */
    relationship: DependentsAPI.Relationship;
  }
}

/**
 * - `Bronze` - Bronze
 * - `Silver` - Silver
 * - `Gold` - Gold
 * - `Platinum` - Platinum
 */
export type PlanTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

/**
 * Response containing a single enrollment resource.
 */
export interface EnrollmentRetrieveResponse {
  /**
   * Serializer for Enrollment entity in public API responses.
   *
   * An Enrollment represents an employee's benefit enrollment for a specific plan
   * year.
   */
  data: Enrollment;
}

/**
 * Paginated list response containing plan option resources.
 */
export interface EnrollmentListPlansResponse {
  data: Array<EnrollmentListPlansResponse.Data>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: EnrollmentListPlansResponse.Pagination;
}

export namespace EnrollmentListPlansResponse {
  /**
   * Serializer for plan options available for enrollment selection.
   *
   * Returns plan details with cost breakdowns for each coverage tier.
   */
  export interface Data {
    /**
     * Unique plan identifier (plan\_\*)
     */
    id: string;

    /**
     * Cost breakdown by coverage tier
     */
    costs: Array<Data.Cost>;

    /**
     * Display name of the plan
     */
    name: string;

    /**
     * Name of the carrier
     */
    carrier_name?: string | null;

    /**
     * Annual deductible in cents
     */
    deductible_cents?: number | null;

    /**
     * Plan description
     */
    description?: string | null;

    /**
     * Annual out-of-pocket maximum in cents
     */
    out_of_pocket_max_cents?: number | null;

    /**
     * - `Bronze` - Bronze
     * - `Silver` - Silver
     * - `Gold` - Gold
     * - `Platinum` - Platinum
     */
    tier?: EnrollmentsAPI.PlanTier | null;
  }

  export namespace Data {
    /**
     * Cost breakdown for a plan option.
     */
    export interface Cost {
      /**
       * - `Unspecified` - Unspecified
       * - `EE` - Ee
       * - `ES` - Es
       * - `EC` - Ec
       * - `EF` - Ef
       */
      coverage_tier: EnrollmentsAPI.CoverageTier;

      /**
       * Employee's monthly contribution in cents
       */
      employee_contribution_cents: number;

      /**
       * Employer's monthly contribution in cents
       */
      employer_contribution_cents: number;

      /**
       * Total monthly premium in cents
       */
      total_monthly_premium_cents: number;
    }
  }

  /**
   * Pagination metadata for list responses.
   */
  export interface Pagination {
    /**
     * Items per page
     */
    limit: number;

    /**
     * Current page number
     */
    page: number;

    /**
     * Total number of items
     */
    total: number;

    /**
     * Total number of pages
     */
    total_pages: number;
  }
}

/**
 * Response containing a single enrollment resource.
 */
export interface EnrollmentReissueResponse {
  /**
   * Serializer for Enrollment entity in public API responses.
   *
   * An Enrollment represents an employee's benefit enrollment for a specific plan
   * year.
   */
  data: Enrollment;
}

export interface EnrollmentReissueParams {
  /**
   * ID of the qualifying life event (qle\_\*)
   */
  qle_id: string;

  /**
   * Optional reason for reissue
   */
  reason?: string | null;
}

export declare namespace Enrollments {
  export {
    type CoverageTier as CoverageTier,
    type Enrollment as Enrollment,
    type PlanTier as PlanTier,
    type EnrollmentRetrieveResponse as EnrollmentRetrieveResponse,
    type EnrollmentListPlansResponse as EnrollmentListPlansResponse,
    type EnrollmentReissueResponse as EnrollmentReissueResponse,
    type EnrollmentReissueParams as EnrollmentReissueParams,
  };
}
