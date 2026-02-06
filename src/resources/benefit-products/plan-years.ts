// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnrollmentsAPI from '../enrollments';
import * as BenefitProductsAPI from './benefit-products';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PlanYears extends APIResource {
  /**
   * Creates a new plan year configuration for a benefit product and employer.
   * Configures coverage period dates, open enrollment window, and contribution
   * structure. All monetary values must be in cents.
   *
   * @example
   * ```ts
   * const planYearResponse =
   *   await client.benefitProducts.planYears.create(
   *     'bprd_abc123def456',
   *     {
   *       contribution_classes: [
   *         {
   *           employment: 'full_time',
   *           coverage_tier: 'EE',
   *           employee_contribution_cents: 20000,
   *           employer_contribution_cents: 45000,
   *         },
   *         {
   *           employment: 'full_time',
   *           coverage_tier: 'EF',
   *           employee_contribution_cents: 50000,
   *           employer_contribution_cents: 60000,
   *         },
   *       ],
   *       coverage_end: '2026-12-31',
   *       coverage_start: '2026-01-01',
   *       employer_id: 'empr_abc123',
   *       open_enrollment_end: '2025-11-30',
   *       open_enrollment_start: '2025-10-15',
   *     },
   *   );
   * ```
   */
  create(
    benefitProductID: string,
    body: PlanYearCreateParams,
    options?: RequestOptions,
  ): APIPromise<PlanYearResponse> {
    return this._client.post(path`/v1/benefit-products/${benefitProductID}/plan-years`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of plan years for a specific benefit product. Plan
   * years define the coverage periods, open enrollment windows, and cost structure.
   * Results are sorted by most recent plan year first.
   *
   * @example
   * ```ts
   * const planYears =
   *   await client.benefitProducts.planYears.list(
   *     'bprd_abc123def456',
   *   );
   * ```
   */
  list(
    benefitProductID: string,
    query: PlanYearListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanYearListResponse> {
    return this._client.get(path`/v1/benefit-products/${benefitProductID}/plan-years`, { query, ...options });
  }
}

/**
 * Serializer for Plan Year entity in public API responses.
 *
 * A Plan Year represents a benefit period configuration including coverage dates,
 * open enrollment windows, available plans, and contribution structures.
 */
export interface PlanYear {
  /**
   * Unique plan year identifier with 'plyr\_' prefix
   */
  id: string;

  /**
   * ID of the benefit product (bprd\_\*)
   */
  benefit_product_id: string;

  /**
   * List of contribution classes defining eligibility tiers and cost structures
   */
  contribution_classes: Array<PlanYear.ContributionClass>;

  /**
   * Date when benefit coverage ends
   */
  coverage_end: string;

  /**
   * Date when benefit coverage begins
   */
  coverage_start: string;

  /**
   * Timestamp when the plan year was created
   */
  created_at: string;

  /**
   * ID of the employer this plan year is for (empr\_\*)
   */
  employer_id: string;

  /**
   * Date when open enrollment period ends
   */
  open_enrollment_end_date: string;

  /**
   * Date when open enrollment period begins
   */
  open_enrollment_start_date: string;

  /**
   * List of benefit plans available in this plan year
   */
  plans: Array<PlanYear.Plan>;

  /**
   * - `draft` - Draft
   * - `open_enrollment` - Open Enrollment
   * - `active` - Active
   * - `expired` - Expired
   */
  status: PlanYearStatus;

  /**
   * Timestamp when the plan year was last updated
   */
  updated_at: string;
}

export namespace PlanYear {
  /**
   * Defines eligibility tiers for contributions within a plan year.
   *
   * Contribution classes specify cost structures based on employment type and family
   * coverage status.
   */
  export interface ContributionClass {
    /**
     * Unique contribution class identifier
     */
    id: string;

    /**
     * - `Unspecified` - Unspecified
     * - `EE` - Ee
     * - `ES` - Es
     * - `EC` - Ec
     * - `EF` - Ef
     */
    coverage_tier: EnrollmentsAPI.CoverageTier;

    /**
     * Employee's monthly contribution amount in cents
     */
    employee_contribution_cents: number;

    /**
     * Employer's monthly contribution amount in cents
     */
    employer_contribution_cents: number;

    /**
     * Employment type for this contribution class (e.g., 'full_time', 'part_time')
     */
    employment: string;
  }

  /**
   * Nested plan within PlanYearSerializer.
   */
  export interface Plan {
    /**
     * Unique plan identifier with 'plan\_' prefix
     */
    id: string;

    /**
     * Reference to the carrier's plan definition (cplan\_\*)
     */
    carrier_plan_id: string;

    /**
     * Base monthly premium in cents
     */
    monthly_premium_cents: number;

    /**
     * Display name of the benefit plan
     */
    name: string;

    /**
     * Annual deductible amount in cents
     */
    deductible_cents?: number | null;

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
}

/**
 * Response containing a single plan year resource.
 */
export interface PlanYearResponse {
  /**
   * Serializer for Plan Year entity in public API responses.
   *
   * A Plan Year represents a benefit period configuration including coverage dates,
   * open enrollment windows, available plans, and contribution structures.
   */
  data: PlanYear;
}

/**
 * - `draft` - Draft
 * - `open_enrollment` - Open Enrollment
 * - `active` - Active
 * - `expired` - Expired
 */
export type PlanYearStatus = 'draft' | 'open_enrollment' | 'active' | 'expired';

/**
 * Paginated list response containing plan year resources.
 */
export interface PlanYearListResponse {
  data: Array<PlanYear>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: BenefitProductsAPI.Pagination;
}

export interface PlanYearCreateParams {
  /**
   * List of contribution classes (at least one required)
   */
  contribution_classes: Array<PlanYearCreateParams.ContributionClass>;

  /**
   * Coverage end date
   */
  coverage_end: string;

  /**
   * Coverage start date
   */
  coverage_start: string;

  /**
   * Employer ID this plan year is for (empr\_\*)
   */
  employer_id: string;

  /**
   * Open enrollment end date
   */
  open_enrollment_end: string;

  /**
   * Open enrollment start date
   */
  open_enrollment_start: string;
}

export namespace PlanYearCreateParams {
  /**
   * Contribution class input for plan year creation.
   */
  export interface ContributionClass {
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
     * Employment type (e.g., 'full_time', 'part_time')
     */
    employment: string;
  }
}

export interface PlanYearListParams {
  /**
   * Filter by employer ID
   */
  employer_id?: string;

  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Filter by plan year status
   */
  status?: PlanYearStatus;
}

export declare namespace PlanYears {
  export {
    type PlanYear as PlanYear,
    type PlanYearResponse as PlanYearResponse,
    type PlanYearStatus as PlanYearStatus,
    type PlanYearListResponse as PlanYearListResponse,
    type PlanYearCreateParams as PlanYearCreateParams,
    type PlanYearListParams as PlanYearListParams,
  };
}
