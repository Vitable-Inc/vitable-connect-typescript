// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BenefitProductsAPI from './benefit-products/benefit-products';
import * as BenefitProductsPlanYearsAPI from './benefit-products/plan-years';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PlanYears extends APIResource {
  /**
   * Updates a specific Plan Year with configuration details for a Benefit Product
   * for an Employer. Can only be edited up until open enrollment starts.
   */
  update(id: string, body: PlanYearUpdateParams, options?: RequestOptions): APIPromise<PlanYear> {
    return this._client.put(path`/plan-years/${id}`, { body, ...options });
  }
}

export interface PlanYear {
  id: string;

  benefit_product: BenefitProductsAPI.BenefitProduct;

  configured: boolean;

  coverage_end_date: string;

  coverage_start_date: string;

  employer_id: string;

  open_enrollment_end_date: string;

  open_enrollment_start_date: string;

  contribution_classes?: Array<BenefitProductsPlanYearsAPI.PlanContributionClass>;

  plan_costs?: Array<BenefitProductsPlanYearsAPI.PlanCost>;
}

export interface UpdatePlanYearRequest {
  contribution_classes?: Array<UpdatePlanYearRequest.ContributionClass>;

  coverage_end_date?: string;

  coverage_start_date?: string;

  open_enrollment_end_date?: string;

  open_enrollment_start_date?: string;

  plan_costs?: Array<UpdatePlanYearRequest.PlanCost>;
}

export namespace UpdatePlanYearRequest {
  export interface ContributionClass {
    compensation?: string;

    employer_contribution_in_cents?: number;

    employment?: string;

    family_status?: string;

    location?: string;

    location_value?: string;

    max_age?: number;

    min_age?: number;

    plan_id?: string;
  }

  export interface PlanCost {
    dependent_cost_in_cents?: number;

    employee_cost_in_cents?: number;

    plan_id?: string;
  }
}

export interface PlanYearUpdateParams {
  contribution_classes?: Array<PlanYearUpdateParams.ContributionClass>;

  coverage_end_date?: string;

  coverage_start_date?: string;

  open_enrollment_end_date?: string;

  open_enrollment_start_date?: string;

  plan_costs?: Array<PlanYearUpdateParams.PlanCost>;
}

export namespace PlanYearUpdateParams {
  export interface ContributionClass {
    compensation?: string;

    employer_contribution_in_cents?: number;

    employment?: string;

    family_status?: string;

    location?: string;

    location_value?: string;

    max_age?: number;

    min_age?: number;

    plan_id?: string;
  }

  export interface PlanCost {
    dependent_cost_in_cents?: number;

    employee_cost_in_cents?: number;

    plan_id?: string;
  }
}

export declare namespace PlanYears {
  export {
    type PlanYear as PlanYear,
    type UpdatePlanYearRequest as UpdatePlanYearRequest,
    type PlanYearUpdateParams as PlanYearUpdateParams,
  };
}
