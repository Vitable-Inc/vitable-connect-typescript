// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EnrollmentsAPI from './enrollments';
import * as BenefitProductsPlanYearsAPI from './benefit-products/plan-years';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Configure annual benefit periods with coverage dates and contribution settings
 */
export class PlanYears extends APIResource {
  /**
   * Retrieves detailed configuration for a specific plan year by ID. Returns
   * coverage dates, open enrollment period, available plans, and contribution
   * structure.
   *
   * @example
   * ```ts
   * const planYearResponse = await client.planYears.retrieve(
   *   'plyr_abc123def456',
   * );
   * ```
   */
  retrieve(
    planYearID: string,
    options?: RequestOptions,
  ): APIPromise<BenefitProductsPlanYearsAPI.PlanYearResponse> {
    return this._client.get(path`/v1/plan-years/${planYearID}`, options);
  }

  /**
   * Updates an existing plan year's configuration. Important: Plan years can only be
   * edited until open enrollment starts. All fields are optional. Monetary values
   * must be in cents.
   *
   * @example
   * ```ts
   * const planYearResponse = await client.planYears.update(
   *   'plyr_abc123def456',
   *   {
   *     contribution_classes: [
   *       {
   *         employment: 'full_time',
   *         coverage_tier: 'EE',
   *         employee_contribution_cents: 18000,
   *         employer_contribution_cents: 47000,
   *       },
   *       {
   *         employment: 'full_time',
   *         coverage_tier: 'EF',
   *         employee_contribution_cents: 48000,
   *         employer_contribution_cents: 62000,
   *       },
   *     ],
   *     open_enrollment_end: '2024-11-15',
   *     open_enrollment_start: '2024-10-01',
   *     status: 'active',
   *   },
   * );
   * ```
   */
  update(
    planYearID: string,
    body: PlanYearUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BenefitProductsPlanYearsAPI.PlanYearResponse> {
    return this._client.put(path`/v1/plan-years/${planYearID}`, { body, ...options });
  }
}

export interface PlanYearUpdateParams {
  /**
   * Updated contribution classes
   */
  contribution_classes?: Array<PlanYearUpdateParams.ContributionClass> | null;

  /**
   * Open enrollment end date
   */
  open_enrollment_end?: string | null;

  /**
   * Open enrollment start date
   */
  open_enrollment_start?: string | null;

  /**
   * Plan year status
   */
  status?: string | null;
}

export namespace PlanYearUpdateParams {
  /**
   * Contribution class input for plan year update.
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
     * Employment type
     */
    employment: string;
  }
}

export declare namespace PlanYears {
  export { type PlanYearUpdateParams as PlanYearUpdateParams };
}
