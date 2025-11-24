// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompanyBenefitsEnrollmentsAPI from '../company-benefits-enrollments';
import * as ExpenseCategoriesAPI from '../expense-categories';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Benefits extends APIResource {
  /**
   * Retrieve detailed information about a specific company benefit. Provides
   * comprehensive benefit details including plans, eligibility rules, expense
   * categories, pricing, and configuration information.
   */
  retrieve(companyBenefitID: string, options?: RequestOptions): APIPromise<BenefitRetrieveResponse> {
    return this._client.get(path`/v1/company-benefits/${companyBenefitID}`, options);
  }

  /**
   * Configure a company benefit with eligibility rules, tier costs, expense
   * categories, and enrollment periods. This endpoint allows payroll providers to
   * set up comprehensive benefit configurations including minimum premiums,
   * eligibility criteria, and cost structures.
   */
  configure(
    companyBenefitID: string,
    body: BenefitConfigureParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/v1/company-benefits/${companyBenefitID}/configuration`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all currently active benefit plans available to a company. This is
   * equivalent to "plan years" in benefit administration terminology. Used by
   * payroll providers to understand what benefit options are available.
   */
  listActive(companyID: string, options?: RequestOptions): APIPromise<BenefitListActiveResponse> {
    return this._client.get(path`/v1/companies/${companyID}/benefits`, options);
  }

  /**
   * Retrieve the list of expense categories that are eligible for reimbursement
   * under a specific company benefit. This is essential for HSA, FSA, and HRA
   * benefits where specific expense types determine reimbursement eligibility. Helps
   * payroll providers understand which expenses employees can claim.
   */
  listEligibleExpenseCategories(
    companyBenefitID: string,
    options?: RequestOptions,
  ): APIPromise<BenefitListEligibleExpenseCategoriesResponse> {
    return this._client.get(
      path`/v1/company-benefits/${companyBenefitID}/eligible-expense-categories`,
      options,
    );
  }

  /**
   * Get all enrollments for a particular benefit plan year. Useful for generating
   * enrollment reports and understanding participation rates.
   */
  listEnrollments(
    companyBenefitID: string,
    query: BenefitListEnrollmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BenefitListEnrollmentsResponse> {
    return this._client.get(path`/v1/company-benefits/${companyBenefitID}/enrollments`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve benefit plans that will become active in future periods. Useful for
   * open enrollment planning and preparation.
   */
  listUpcoming(companyID: string, options?: RequestOptions): APIPromise<BenefitListUpcomingResponse> {
    return this._client.get(path`/v1/companies/${companyID}/benefits/upcoming`, options);
  }
}

export interface CompanyBenefitDto {
  /**
   * Unique identifier for the benefit
   */
  id: string;

  /**
   * Whether benefit is currently active
   */
  active_in: boolean;

  /**
   * Whether benefit uses allowance-based pricing
   */
  allowance_based_in: boolean;

  /**
   * Insurance carrier name
   */
  carrier: 'Essential Benefit Administrators' | 'Liferaft' | 'Imagine360' | 'Vitable' | 'TrueClaim';

  /**
   * Insurance carrier ID
   */
  carrier_id: string;

  /**
   * Whether benefit is properly configured
   */
  configured_in: boolean;

  /**
   * Coverage start date
   */
  coverage_start: string;

  /**
   * Benefit eligibility rules
   */
  eligibility_rules: Array<CompanyBenefitDto.EligibilityRule>;

  /**
   * Whether health wallet is enabled
   */
  health_wallet_enabled_in: boolean;

  /**
   * Internal benefit name
   */
  internal_name: string;

  /**
   * Benefit display name
   */
  name: string;

  /**
   * Open enrollment start date
   */
  open_enrollment_start: string;

  /**
   * Available benefit plans
   */
  plans: Array<CompanyBenefitPlan>;

  /**
   * Benefit type code
   */
  type:
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
    | 'ICHRA_PREMIUM_PLUS';

  /**
   * Whether benefit is managed by Vitable
   */
  vitable_managed_in: boolean;

  /**
   * Coverage end date
   */
  coverage_end?: string | null;

  /**
   * Open enrollment end date
   */
  open_enrollment_end?: string | null;
}

export namespace CompanyBenefitDto {
  export interface EligibilityRule {
    /**
     * Rule identifier
     */
    id: string;

    /**
     * Human-readable rule expression
     */
    readable_expression_str: string;

    /**
     * Compensation type requirement
     */
    compensation?: 'Unspecified' | 'Salary' | 'Hourly';

    /**
     * Employment type requirement
     */
    employment?: 'Unspecified' | 'Full Time' | 'Part Time' | 'Temporary' | 'Seasonal';

    /**
     * Location requirement type
     */
    location?: 'Unspecified' | 'State';

    /**
     * Location requirement value
     */
    location_value?: string | null;
  }
}

export interface CompanyBenefitPlan {
  /**
   * Plan identifier
   */
  id: string;

  /**
   * Company identifier
   */
  company_id: string;

  /**
   * Plan level/tier
   */
  level: number;

  /**
   * Maximum dependent cost in cents
   */
  max_dependent_cost: number;

  /**
   * Minimum tier cost in cents
   */
  min_tier_cost: number;

  /**
   * Plan name
   */
  name: string;

  /**
   * Cost information by tier
   */
  tier_costs: Array<CompanyBenefitPlan.TierCost>;

  /**
   * Whether plan is Vitable-only
   */
  vitable_only_in: boolean;

  /**
   * Number of dependents enrolled
   */
  dependent_enrollment_count?: number | null;

  /**
   * Number of employees enrolled
   */
  employee_enrollment_count?: number | null;
}

export namespace CompanyBenefitPlan {
  export interface TierCost {
    /**
     * Tier cost identifier
     */
    id: string;

    /**
     * Tier name
     */
    benefit_plan_tier_name: string;

    /**
     * Employee cost in cents
     */
    cost: number;

    /**
     * Per-dependent cost in cents
     */
    cost_per_dependent: number;

    /**
     * Whether dependents are required
     */
    dependents_required_in: boolean;

    /**
     * Whether spouse is required
     */
    spouse_required_in: boolean;
  }
}

export interface CompanyBenefitSchema {
  /**
   * Unique identifier for the benefit plan
   */
  id?: string;

  /**
   * Benefit type code
   */
  benefit_code?: string;

  /**
   * Name of the benefit (e.g., "Individual Coverage Health Reimbursement
   * Arrangement")
   */
  benefit_name?: string;

  /**
   * Category of benefit
   */
  benefit_type?: string;

  /**
   * Enrollment period end date
   */
  enrollment_end?: string;

  /**
   * Enrollment period start date
   */
  enrollment_start?: string;

  /**
   * Whether the benefit is currently active
   */
  is_active?: boolean;

  /**
   * End date of the plan year
   */
  plan_year_end?: string;

  /**
   * Start date of the plan year
   */
  plan_year_start?: string;
}

export interface PaginationInfo {
  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Current page number
   */
  page?: number;

  /**
   * Total number of items
   */
  total_count?: number;

  /**
   * Total number of pages
   */
  total_pages?: number;
}

export interface BenefitRetrieveResponse {
  data?: CompanyBenefitDto;
}

export interface BenefitListActiveResponse {
  data?: Array<CompanyBenefitSchema>;

  pagination?: PaginationInfo;
}

/**
 * Response containing eligible expense categories for a benefit
 */
export interface BenefitListEligibleExpenseCategoriesResponse {
  /**
   * List of eligible expense categories
   */
  eligible_expense_categories: Array<BenefitListEligibleExpenseCategoriesResponse.EligibleExpenseCategory>;
}

export namespace BenefitListEligibleExpenseCategoriesResponse {
  /**
   * Expense category eligible for reimbursement under a benefit
   */
  export interface EligibleExpenseCategory {
    /**
     * Unique identifier for the eligible expense category
     */
    id: string;

    /**
     * Company benefit that allows this expense category
     */
    company_benefit_id: string;

    /**
     * Creation timestamp
     */
    created: string;

    /**
     * A category of eligible expenses for reimbursement
     */
    expense_category: ExpenseCategoriesAPI.ExpenseCategory;

    /**
     * Name of the expense category
     */
    expense_category_name: string;

    /**
     * Last update timestamp
     */
    updated: string;

    /**
     * Description of the expense category
     */
    expense_category_description?: string | null;
  }
}

export interface BenefitListEnrollmentsResponse {
  data?: Array<CompanyBenefitsEnrollmentsAPI.BenefitEnrollment>;

  pagination?: PaginationInfo;
}

export interface BenefitListUpcomingResponse {
  data?: Array<CompanyBenefitSchema>;

  pagination?: PaginationInfo;
}

export interface BenefitConfigureParams {
  /**
   * Eligibility rules configuration
   */
  configured_eligibility_rules: Array<BenefitConfigureParams.ConfiguredEligibilityRule>;

  /**
   * Tier cost configuration
   */
  configured_tier_costs: Array<BenefitConfigureParams.ConfiguredTierCost>;

  /**
   * Minimum monthly premium amount in cents
   */
  min_monthly_premium_in_cents: number;

  /**
   * Open enrollment period start date
   */
  open_enrollment_start_date: string;

  /**
   * Selected eligible expense category IDs
   */
  selected_eligible_expense_categories_ids: Array<string>;

  /**
   * Agency of record identifier
   */
  agency_of_record_id?: string | null;

  /**
   * Open enrollment period end date
   */
  open_enrollment_end_date?: string | null;
}

export namespace BenefitConfigureParams {
  /**
   * Configurable eligibility rule
   */
  export interface ConfiguredEligibilityRule {
    /**
     * Compensation type requirement
     */
    compensation: 'Unspecified' | 'Salary' | 'Hourly';

    /**
     * Employment type requirement
     */
    employment: 'Unspecified' | 'Full Time' | 'Part Time' | 'Temporary' | 'Seasonal';

    /**
     * Location requirement type
     */
    location: 'Unspecified' | 'State';

    /**
     * Rule identifier (null for new rules)
     */
    id?: string | null;

    /**
     * Location requirement value (e.g., state code if location is "State")
     */
    location_value?: string | null;
  }

  /**
   * Configurable tier cost information
   */
  export interface ConfiguredTierCost {
    /**
     * Employee cost in cents
     */
    cost_in_cents: number;

    /**
     * Cost per dependent in cents
     */
    cost_per_dependent_in_cents: number;

    /**
     * Per employee per month cost in cents
     */
    pepm_in_cents: number;

    /**
     * Per employee per month cost per dependent in cents
     */
    pepm_per_dependent_in_cents: number;

    /**
     * Tier cost identifier
     */
    tier_cost_id: string;
  }
}

export interface BenefitListEnrollmentsParams {
  /**
   * Number of results to return per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;
}

export declare namespace Benefits {
  export {
    type CompanyBenefitDto as CompanyBenefitDto,
    type CompanyBenefitPlan as CompanyBenefitPlan,
    type CompanyBenefitSchema as CompanyBenefitSchema,
    type PaginationInfo as PaginationInfo,
    type BenefitRetrieveResponse as BenefitRetrieveResponse,
    type BenefitListActiveResponse as BenefitListActiveResponse,
    type BenefitListEligibleExpenseCategoriesResponse as BenefitListEligibleExpenseCategoriesResponse,
    type BenefitListEnrollmentsResponse as BenefitListEnrollmentsResponse,
    type BenefitListUpcomingResponse as BenefitListUpcomingResponse,
    type BenefitConfigureParams as BenefitConfigureParams,
    type BenefitListEnrollmentsParams as BenefitListEnrollmentsParams,
  };
}
