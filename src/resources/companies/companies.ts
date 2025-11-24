// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompaniesAPI from './companies';
import * as BenefitsAPI from './benefits';
import {
  BenefitConfigureParams,
  BenefitListActiveResponse,
  BenefitListEligibleExpenseCategoriesResponse,
  BenefitListEnrollmentsParams,
  BenefitListEnrollmentsResponse,
  BenefitListUpcomingResponse,
  BenefitRetrieveResponse,
  Benefits,
  CompanyBenefitDto,
  CompanyBenefitPlan,
  CompanyBenefitSchema,
  PaginationInfo,
} from './benefits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Companies extends APIResource {
  benefits: BenefitsAPI.Benefits = new BenefitsAPI.Benefits(this._client);

  /**
   * Create a new benefit eligibility policy for a company. This allows payroll
   * providers to configure eligibility rules determining which employees qualify for
   * benefits based on employment classification and waiting periods.
   */
  createBenefitEligibilityPolicy(
    companyID: string,
    body: CompanyCreateBenefitEligibilityPolicyParams,
    options?: RequestOptions,
  ): APIPromise<CompanyCreateBenefitEligibilityPolicyResponse> {
    return this._client.post(path`/v1/companies/${companyID}/benefit-eligibility-policies`, {
      body,
      ...options,
    });
  }

  /**
   * Create a new employee record for a company. This endpoint allows payroll
   * providers to add new employees to the system with complete demographic and
   * employment information.
   */
  createEmployee(
    companyID: string,
    body: CompanyCreateEmployeeParams,
    options?: RequestOptions,
  ): APIPromise<CompanyCreateEmployeeResponse> {
    return this._client.post(path`/v1/companies/${companyID}/employees`, { body, ...options });
  }

  /**
   * Retrieve benefit eligibility information for employees. Helps payroll providers
   * understand who is eligible for which benefits.
   */
  listBenefitEligibilities(
    companyID: string,
    query: CompanyListBenefitEligibilitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyListBenefitEligibilitiesResponse> {
    return this._client.get(path`/v1/companies/${companyID}/benefit-eligibilities`, { query, ...options });
  }

  /**
   * Retrieve payroll deduction statements for a company across all payroll periods.
   * These statements contain detailed deduction amounts and downloadable files for
   * payroll processing. Essential for payroll providers to access historical
   * deduction data and change files.
   */
  listPayrollDeductionStatements(
    companyID: string,
    query: CompanyListPayrollDeductionStatementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyListPayrollDeductionStatementsResponse> {
    return this._client.get(path`/v1/companies/${companyID}/payroll-deduction-statements`, {
      query,
      ...options,
    });
  }

  /**
   * Search and filter company benefits with various criteria. Allows payroll
   * providers to find specific benefit plans based on status, configuration, and
   * coverage periods for comprehensive benefit management.
   */
  searchBenefits(
    companyID: string,
    query: CompanySearchBenefitsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanySearchBenefitsResponse> {
    return this._client.get(path`/v1/companies/${companyID}/company-benefits`, { query, ...options });
  }
}

export interface Address {
  city?: string;

  state?: string;

  street_address?: string;

  zip_code?: string;
}

export interface CompanyMember {
  /**
   * Unique identifier for the company member
   */
  id: string;

  address: Address;

  /**
   * Formatted address string
   */
  address_str_format: string;

  /**
   * Employee age
   */
  age: number;

  /**
   * Date when benefit eligibility starts
   */
  benefit_eligibility_start_date: string | null;

  /**
   * Indicates whether the company is active
   */
  company_active_in: boolean;

  /**
   * Company identifier
   */
  company_id: string;

  /**
   * Company name
   */
  company_name: string;

  /**
   * Record creation timestamp
   */
  created: string;

  /**
   * Employee date of birth
   */
  date_of_birth: string;

  /**
   * Employee email address
   */
  email: string | null;

  /**
   * Whether enrolled in any active company benefits
   */
  enrolled_in_benefits_in: boolean;

  /**
   * Employee first name
   */
  first_name: string;

  /**
   * Employee full name
   */
  full_name: string;

  /**
   * Associated member ID
   */
  member_id: string;

  /**
   * Indicates whether this company member is active
   */
  active_in?: boolean;

  /**
   * Employment classification
   */
  employee_class?:
    | 'Full Time'
    | 'Part Time'
    | 'Temporary'
    | 'Intern'
    | 'Seasonal'
    | 'Individual Contractor'
    | null;

  /**
   * Compensation type
   */
  employee_compensation_type?: 'Salary' | 'Hourly' | null;

  /**
   * Employee start date
   */
  employee_start_date?: string | null;

  /**
   * Employee gender identity
   */
  gender?: 'Male' | 'Female' | 'Transgender' | 'Non-binary' | 'Prefer not to respond' | null;

  /**
   * Household income in cents
   */
  household_income_in_cents?: number;

  /**
   * External HRIS identifier
   */
  hris_id?: string | null;

  /**
   * Individual income in cents
   */
  individual_income_in_cents?: number;

  /**
   * Employee last name
   */
  last_name?: string;

  /**
   * Employee middle name
   */
  middle_name?: string | null;

  /**
   * Employee phone (alternative field)
   */
  phone?: string | null;

  /**
   * Employee phone number
   */
  phone_number?: string | null;

  /**
   * Employee preferred language
   */
  preferred_language?: 'en' | 'es' | 'zh' | 'ru' | 'sw' | 'th';

  /**
   * URL to profile picture
   */
  profile_picture_url?: string | null;

  /**
   * Public company identifier
   */
  public_company_id?: string;

  /**
   * Employee biological sex
   */
  sex?: 'Male' | 'Female' | 'Other' | 'Unknown' | null;

  /**
   * Name suffix
   */
  suffix?: 'Sr' | 'Jr' | 'I' | 'II' | 'III' | 'IV' | 'V' | null;

  /**
   * Associated tags
   */
  tags?: Array<CompanyMember.Tag>;

  /**
   * Type of company member
   */
  type?: 'Employee' | 'Recruit' | 'Youth';

  /**
   * Associated user ID
   */
  user_id?: string | null;
}

export namespace CompanyMember {
  export interface Tag {
    /**
     * Unique identifier for the tag
     */
    id: string;

    /**
     * Tag name
     */
    name: string;

    /**
     * Tag color
     */
    tag_color: string;

    /**
     * Tag description
     */
    description?: string | null;
  }
}

/**
 * Employee classification for benefit eligibility:
 *
 * - `Full time` - Full-time employees only
 * - `Part time` - Part-time employees only
 * - `All` - All employees regardless of classification
 */
export type EmployeeBenefitEligibilityPolicyClassification = 'Full time' | 'Part time' | 'All';

/**
 * Waiting period before benefit eligibility:
 *
 * - `1st of the following month` - Eligibility starts first day of following month
 * - `30 days` - 30-day waiting period from hire date
 * - `60 days` - 60-day waiting period from hire date
 * - `None` - Immediate eligibility
 */
export type EmployeeBenefitEligibilityPolicyWaitingPeriod =
  | '1st of the following month'
  | '30 days'
  | '60 days'
  | 'None';

/**
 * Response from creating a benefit eligibility policy
 */
export interface CompanyCreateBenefitEligibilityPolicyResponse {
  /**
   * Benefit eligibility policy configuration
   */
  eligibility_policy: CompanyCreateBenefitEligibilityPolicyResponse.EligibilityPolicy;
}

export namespace CompanyCreateBenefitEligibilityPolicyResponse {
  /**
   * Benefit eligibility policy configuration
   */
  export interface EligibilityPolicy {
    /**
     * Policy identifier
     */
    id: string;

    /**
     * Whether the policy is currently active
     */
    active: boolean;

    /**
     * Employee classification for benefit eligibility:
     *
     * - `Full time` - Full-time employees only
     * - `Part time` - Part-time employees only
     * - `All` - All employees regardless of classification
     */
    classification: CompaniesAPI.EmployeeBenefitEligibilityPolicyClassification;

    /**
     * Company identifier
     */
    company_id: string;

    /**
     * Policy creation timestamp
     */
    created: string;

    /**
     * Policy last update timestamp
     */
    updated: string;

    /**
     * Waiting period before benefit eligibility:
     *
     * - `1st of the following month` - Eligibility starts first day of following month
     * - `30 days` - 30-day waiting period from hire date
     * - `60 days` - 60-day waiting period from hire date
     * - `None` - Immediate eligibility
     */
    waiting_period: CompaniesAPI.EmployeeBenefitEligibilityPolicyWaitingPeriod;
  }
}

export interface CompanyCreateEmployeeResponse {
  data?: CompanyMember;
}

export interface CompanyListBenefitEligibilitiesResponse {
  data?: Array<CompanyListBenefitEligibilitiesResponse.Data>;

  pagination?: BenefitsAPI.PaginationInfo;
}

export namespace CompanyListBenefitEligibilitiesResponse {
  export interface Data {
    benefit_eligibilities?: Array<Data.BenefitEligibility>;

    /**
     * Employee identifier
     */
    employee_id?: string;

    /**
     * Employee full name
     */
    employee_name?: string;
  }

  export namespace Data {
    export interface BenefitEligibility {
      /**
       * Benefit type code
       */
      benefit_code?: string;

      /**
       * Name of the benefit
       */
      benefit_name?: string;

      /**
       * Date eligibility becomes effective
       */
      eligibility_date?: string;

      /**
       * Whether employee is eligible
       */
      eligible?: boolean;

      /**
       * Waiting period in days
       */
      waiting_period_days?: number;
    }
  }
}

export interface CompanyListPayrollDeductionStatementsResponse {
  data?: Array<CompanyListPayrollDeductionStatementsResponse.Data>;

  pagination?: BenefitsAPI.PaginationInfo;
}

export namespace CompanyListPayrollDeductionStatementsResponse {
  /**
   * Payroll deduction statement containing deduction amounts and downloadable files
   */
  export interface Data {
    /**
     * Company identifier
     */
    company_id: string;

    /**
     * Legal company name
     */
    company_legal_name: string;

    /**
     * Company display name
     */
    company_name: string;

    /**
     * Statement creation timestamp
     */
    created: string;

    /**
     * Benefit group identifier
     */
    group_id: string;

    /**
     * Unique identifier for the statement
     */
    payroll_deduction_statement_id: string;

    /**
     * URL to download the payroll deductions change file
     */
    payroll_deductions_change_file_url: string;

    /**
     * End date of the payroll period
     */
    period_end_date: string;

    /**
     * Start date of the payroll period
     */
    period_start_date: string;

    /**
     * Date the statement was generated
     */
    statement_date: string;

    /**
     * Total deduction amount for the period in cents
     */
    total_deduction_amount_in_cents: number;

    /**
     * Statement last update timestamp
     */
    updated: string;

    /**
     * Information about a statement that superseded another statement
     */
    superseded_by?: Data.SupersededBy;
  }

  export namespace Data {
    /**
     * Information about a statement that superseded another statement
     */
    export interface SupersededBy {
      /**
       * Superseding statement creation timestamp
       */
      created: string;

      /**
       * Unique identifier for the superseding statement
       */
      payroll_deduction_statement_id: string;

      /**
       * URL to download the superseding statement's change file
       */
      payroll_deductions_change_file_url: string;

      /**
       * End date of the superseding statement's payroll period
       */
      period_end_date: string;

      /**
       * Start date of the superseding statement's payroll period
       */
      period_start_date: string;

      /**
       * Date the superseding statement was generated
       */
      statement_date: string;

      /**
       * Total deduction amount in the superseding statement in cents
       */
      total_deduction_amount_in_cents: number;
    }
  }
}

export interface CompanySearchBenefitsResponse {
  data?: Array<BenefitsAPI.CompanyBenefitDto>;

  pagination?: BenefitsAPI.PaginationInfo;
}

export interface CompanyCreateBenefitEligibilityPolicyParams {
  /**
   * Employee classification for benefit eligibility:
   *
   * - `Full time` - Full-time employees only
   * - `Part time` - Part-time employees only
   * - `All` - All employees regardless of classification
   */
  classification: EmployeeBenefitEligibilityPolicyClassification;

  /**
   * Waiting period before benefit eligibility:
   *
   * - `1st of the following month` - Eligibility starts first day of following month
   * - `30 days` - 30-day waiting period from hire date
   * - `60 days` - 60-day waiting period from hire date
   * - `None` - Immediate eligibility
   */
  waiting_period: EmployeeBenefitEligibilityPolicyWaitingPeriod;
}

export interface CompanyCreateEmployeeParams {
  address: CompanyCreateEmployeeParams.Address;

  /**
   * Employee date of birth
   */
  date_of_birth: string;

  /**
   * Employee email address
   */
  email: string;

  /**
   * Employment classification
   */
  employee_class: 'Full Time' | 'Part Time' | 'Temporary' | 'Intern' | 'Seasonal' | 'Individual Contractor';

  /**
   * Compensation type
   */
  employee_compensation_type: 'Salary' | 'Hourly';

  /**
   * Employee start date
   */
  employee_start_date: string;

  /**
   * Employee first name
   */
  first_name: string;

  /**
   * Whether to grant benefit eligibility to the employee
   */
  grant_benefit_eligibility_in: boolean;

  /**
   * Employee last name
   */
  last_name: string;

  /**
   * Employee phone number
   */
  phone: string;

  /**
   * Employee middle name
   */
  middle_name?: string | null;

  /**
   * Employee preferred language
   */
  preferred_language?: 'en' | 'es' | 'zh' | 'ru' | 'sw' | 'th';

  /**
   * Employee biological sex
   */
  sex?: 'Male' | 'Female' | 'Other' | 'Unknown';

  /**
   * Name suffix
   */
  suffix?: 'Sr' | 'Jr' | 'I' | 'II' | 'III' | 'IV' | 'V' | null;
}

export namespace CompanyCreateEmployeeParams {
  export interface Address {
    /**
     * First line of address
     */
    address_line_1: string;

    /**
     * City
     */
    city: string;

    /**
     * State abbreviation (e.g., CA, NY)
     */
    state: string;

    /**
     * ZIP code
     */
    zipcode: string;

    /**
     * Second line of address
     */
    address_line_2?: string | null;
  }
}

export interface CompanyListBenefitEligibilitiesParams {
  /**
   * Filter by employee name
   */
  employee_name?: string;

  /**
   * Number of results to return per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Include terminated employees
   */
  terminated_in?: boolean;
}

export interface CompanyListPayrollDeductionStatementsParams {
  /**
   * Number of results to return per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;
}

export interface CompanySearchBenefitsParams {
  /**
   * Filter for active benefits only
   */
  active_in?: boolean;

  /**
   * Filter for configured benefits only
   */
  configured_in?: boolean;

  /**
   * Filter for benefits with non-expired coverage and subscriptions
   */
  non_expired_coverage_and_subscription_in?: boolean;
}

Companies.Benefits = Benefits;

export declare namespace Companies {
  export {
    type Address as Address,
    type CompanyMember as CompanyMember,
    type EmployeeBenefitEligibilityPolicyClassification as EmployeeBenefitEligibilityPolicyClassification,
    type EmployeeBenefitEligibilityPolicyWaitingPeriod as EmployeeBenefitEligibilityPolicyWaitingPeriod,
    type CompanyCreateBenefitEligibilityPolicyResponse as CompanyCreateBenefitEligibilityPolicyResponse,
    type CompanyCreateEmployeeResponse as CompanyCreateEmployeeResponse,
    type CompanyListBenefitEligibilitiesResponse as CompanyListBenefitEligibilitiesResponse,
    type CompanyListPayrollDeductionStatementsResponse as CompanyListPayrollDeductionStatementsResponse,
    type CompanySearchBenefitsResponse as CompanySearchBenefitsResponse,
    type CompanyCreateBenefitEligibilityPolicyParams as CompanyCreateBenefitEligibilityPolicyParams,
    type CompanyCreateEmployeeParams as CompanyCreateEmployeeParams,
    type CompanyListBenefitEligibilitiesParams as CompanyListBenefitEligibilitiesParams,
    type CompanyListPayrollDeductionStatementsParams as CompanyListPayrollDeductionStatementsParams,
    type CompanySearchBenefitsParams as CompanySearchBenefitsParams,
  };

  export {
    Benefits as Benefits,
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
