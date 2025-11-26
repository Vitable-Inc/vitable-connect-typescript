// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlanYearsAPI from '../plan-years';
import * as BenefitProductsAPI from './benefit-products';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PlanYears extends APIResource {
  /**
   * Creates a new Plan Year with configuration for a Benefit Product for an
   * Employer. Employer would be in request body. Configures Open Enrollment Period,
   * Coverage Period, Deductions Per-Plan. Deductions per-plan are tier agnostic –
   * costs only for employee and dependent defined.
   */
  create(
    id: string,
    body: PlanYearCreateParams,
    options?: RequestOptions,
  ): APIPromise<PlanYearsAPI.PlanYear> {
    return this._client.post(path`/benefit-products/${id}/plan-years`, { body, ...options });
  }

  /**
   * Gets all Plan Years with configuration details for a Benefit Product for an
   * Employer. Will be sorted by most recent Plan Year (first Plan Year is the
   * latest).
   */
  list(id: string, query: PlanYearListParams, options?: RequestOptions): APIPromise<PlanYearListResponse> {
    return this._client.get(path`/benefit-products/${id}/plan-years`, { query, ...options });
  }
}

export interface CreatePlanYearRequest {
  coverage_end_date: string;

  coverage_start_date: string;

  employer_id: string;

  open_enrollment_end_date: string;

  open_enrollment_start_date: string;

  contribution_classes?: Array<CreatePlanYearRequest.ContributionClass>;

  plan_costs?: Array<CreatePlanYearRequest.PlanCost>;
}

export namespace CreatePlanYearRequest {
  export interface ContributionClass {
    compensation: 'UNSPECIFIED' | 'SALARY' | 'HOURLY';

    employer_contribution_in_cents: number;

    employment: 'UNSPECIFIED' | 'FULL_TIME' | 'PART_TIME' | 'TEMPORARY' | 'SEASONAL';

    family_status: 'UNSPECIFIED' | 'EE' | 'ES' | 'EC' | 'EF';

    location: 'UNSPECIFIED' | 'STATE';

    location_value?: string;

    max_age?: number;

    min_age?: number;

    plan_id?: string | null;
  }

  export interface PlanCost {
    dependent_cost_in_cents: number;

    employee_cost_in_cents: number;

    plan_id: string;
  }
}

export interface PlanContributionClass {
  compensation: 'UNSPECIFIED' | 'SALARY' | 'HOURLY';

  employer_contribution_in_cents: number;

  employment: 'UNSPECIFIED' | 'FULL_TIME' | 'PART_TIME' | 'TEMPORARY' | 'SEASONAL';

  family_status: 'UNSPECIFIED' | 'EE' | 'ES' | 'EC' | 'EF';

  location: 'UNSPECIFIED' | 'STATE';

  plan_year_id: string;

  location_value?: string | null;

  max_age?: number | null;

  min_age?: number | null;

  plan_id?: string | null;
}

export interface PlanCost {
  dependent_cost_in_cents: number;

  employee_cost_in_cents: number;

  plan_id: string;

  plan_year_id: string;
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

  contribution_classes?: Array<PlanContributionClass>;

  plan_costs?: Array<PlanCost>;
}

export interface PlanYearListResponse {
  data?: Array<PlanYearsAPI.PlanYear>;
}

export interface PlanYearCreateParams {
  coverage_end_date: string;

  coverage_start_date: string;

  employer_id: string;

  open_enrollment_end_date: string;

  open_enrollment_start_date: string;

  contribution_classes?: Array<PlanYearCreateParams.ContributionClass>;

  plan_costs?: Array<PlanYearCreateParams.PlanCost>;
}

export namespace PlanYearCreateParams {
  export interface ContributionClass {
    compensation: 'UNSPECIFIED' | 'SALARY' | 'HOURLY';

    employer_contribution_in_cents: number;

    employment: 'UNSPECIFIED' | 'FULL_TIME' | 'PART_TIME' | 'TEMPORARY' | 'SEASONAL';

    family_status: 'UNSPECIFIED' | 'EE' | 'ES' | 'EC' | 'EF';

    location: 'UNSPECIFIED' | 'STATE';

    location_value?: string;

    max_age?: number;

    min_age?: number;

    plan_id?: string | null;
  }

  export interface PlanCost {
    dependent_cost_in_cents: number;

    employee_cost_in_cents: number;

    plan_id: string;
  }
}

export interface PlanYearListParams {
  employer_id: string;
}

export declare namespace PlanYears {
  export {
    type CreatePlanYearRequest as CreatePlanYearRequest,
    type PlanContributionClass as PlanContributionClass,
    type PlanCost as PlanCost,
    type PlanYear as PlanYear,
    type PlanYearListResponse as PlanYearListResponse,
    type PlanYearCreateParams as PlanYearCreateParams,
    type PlanYearListParams as PlanYearListParams,
  };
}
