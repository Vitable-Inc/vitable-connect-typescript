// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EnrollmentsAPI from './enrollments';
import * as BenefitProductsPlanYearsAPI from './benefit-products/plan-years';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PlanYears extends APIResource {
  /**
   * Retrieves detailed configuration for a specific plan year by ID. Returns
   * coverage dates, open enrollment period, available plans, and contribution
   * structure.
   */
  retrieve(planYearID: string, options?: RequestOptions): APIPromise<BenefitProductsPlanYearsAPI.PlanYear> {
    return this._client.get(path`/v1/plan-years/${planYearID}`, options);
  }

  /**
   * Updates an existing plan year's configuration. Important: Plan years can only be
   * edited until open enrollment starts. All fields are optional. Monetary values
   * must be in cents.
   */
  update(
    planYearID: string,
    body: PlanYearUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BenefitProductsPlanYearsAPI.PlanYear> {
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
  export interface ContributionClass {
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

    /**
     * - `Unspecified` - Unspecified
     * - `EE` - Ee
     * - `ES` - Es
     * - `EC` - Ec
     * - `EF` - Ef
     */
    family_status: EnrollmentsAPI.CoverageTier;
  }
}

export declare namespace PlanYears {
  export { type PlanYearUpdateParams as PlanYearUpdateParams };
}
