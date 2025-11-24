// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BenefitsAPI from './companies/benefits';
import * as CompaniesAPI from './companies/companies';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CompanyBenefitsEnrollments extends APIResource {
  /**
   * Search and filter benefit enrollments across employees and benefit plans.
   */
  list(
    query: CompanyBenefitsEnrollmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyBenefitsEnrollmentListResponse> {
    return this._client.get('/v1/company-benefits-enrollments', { query, ...options });
  }

  /**
   * Process benefit enrollment elections for employees and their dependents. Allows
   * payroll providers to submit enrollment choices, waive benefits, add dependents,
   * and complete the enrollment process with electronic signatures.
   */
  elect(
    body: CompanyBenefitsEnrollmentElectParams,
    options?: RequestOptions,
  ): APIPromise<CompanyBenefitsEnrollmentElectResponse> {
    return this._client.post('/v1/company-benefit-enrollments/elect', { body, ...options });
  }

  /**
   * Re-issue an existing benefit enrollment, typically used when there are changes
   * needed to enrollment details, updates to dependent information, or corrections
   * to enrollment data. Requires administrative documentation and evidence notes for
   * audit purposes.
   */
  reissue(
    companyBenefitEnrollmentID: string,
    body: CompanyBenefitsEnrollmentReissueParams,
    options?: RequestOptions,
  ): APIPromise<CompanyBenefitsEnrollmentReissueResponse> {
    return this._client.post(path`/v1/company-benefit-enrollments/${companyBenefitEnrollmentID}/reissue`, {
      body,
      ...options,
    });
  }
}

export interface BenefitEnrollment {
  /**
   * Unique enrollment identifier
   */
  id?: string;

  /**
   * Associated benefit plan ID
   */
  company_benefit_id?: string;

  /**
   * Associated employee ID
   */
  company_member_id?: string;

  /**
   * Coverage termination date
   */
  coverage_end_date?: string;

  /**
   * Coverage effective date
   */
  coverage_start_date?: string;

  /**
   * Employee premium amount in cents
   */
  employee_premium?: number;

  /**
   * Employer contribution in cents
   */
  employer_contribution?: number;

  /**
   * Date enrollment was completed
   */
  enrollment_date?: string;

  /**
   * Current enrollment status
   */
  enrollment_status?: 'Unanswered' | 'Enrolled' | 'Waived';

  /**
   * Selected benefit plan name
   */
  plan_name?: string;

  /**
   * Selected coverage tier
   */
  tier_name?: string;
}

export interface CompanyBenefitsEnrollmentListResponse {
  data?: Array<BenefitEnrollment>;

  pagination?: BenefitsAPI.PaginationInfo;
}

export interface CompanyBenefitsEnrollmentElectResponse {
  /**
   * Processed enrollments
   */
  data?: Array<BenefitEnrollment>;
}

/**
 * Response from re-issuing a benefit enrollment
 */
export interface CompanyBenefitsEnrollmentReissueResponse {
  /**
   * A benefit enrollment for an employee
   */
  enrollment: CompanyBenefitsEnrollmentReissueResponse.Enrollment;
}

export namespace CompanyBenefitsEnrollmentReissueResponse {
  /**
   * A benefit enrollment for an employee
   */
  export interface Enrollment {
    /**
     * Unique enrollment identifier
     */
    id: string;

    /**
     * Benefit type code
     */
    benefit_code: string;

    /**
     * Associated benefit identifier
     */
    benefit_id: string;

    /**
     * Name of the enrolled benefit
     */
    benefit_name: string;

    /**
     * Coverage effective date
     */
    coverage_start: string;

    /**
     * Enrollment creation timestamp
     */
    created: string;

    /**
     * Employer contribution amount in cents
     */
    employer_allowance_in_cents: number;

    /**
     * Base enrollment identifier
     */
    enrollment_id: string;

    /**
     * Employee full name
     */
    member_full_name: string;

    /**
     * Employee/member identifier
     */
    member_id: string;

    /**
     * Dependent payroll deduction amount in cents
     */
    payroll_deduction_for_dependent: number;

    /**
     * Employee payroll deduction amount in cents
     */
    payroll_deduction_for_employee: number;

    /**
     * Current enrollment status
     */
    status: string;

    /**
     * Enrollment last update timestamp
     */
    updated: string;

    /**
     * Coverage termination date
     */
    coverage_end?: string | null;
  }
}

export interface CompanyBenefitsEnrollmentListParams {
  /**
   * Filter by enrollment status
   */
  answer_status?: 'Unanswered' | 'Enrolled' | 'Waived';

  /**
   * Filter by specific benefit plan
   */
  company_benefit_id?: string;

  /**
   * Filter by specific employee
   */
  company_member_id?: string;

  /**
   * Number of results to return per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;
}

export interface CompanyBenefitsEnrollmentElectParams {
  /**
   * Dependent information for enrollment
   */
  dependents: Array<CompanyBenefitsEnrollmentElectParams.Dependent>;

  /**
   * Benefit election choices
   */
  elections: Array<CompanyBenefitsEnrollmentElectParams.Election>;

  /**
   * Electronic signature information
   */
  signing: CompanyBenefitsEnrollmentElectParams.Signing;
}

export namespace CompanyBenefitsEnrollmentElectParams {
  /**
   * Dependent information for benefit election
   */
  export interface Dependent {
    /**
     * Dependent's date of birth
     */
    date_of_birth: string;

    /**
     * Temporary identifier for the dependent
     */
    fake_id: string;

    /**
     * Dependent's first name
     */
    first_name: string;

    /**
     * Dependent's last name
     */
    last_name: string;

    /**
     * Type of dependent relationship
     */
    type: 'spouse' | 'child' | 'domestic_partner';

    /**
     * Dependent's address
     */
    address?: CompaniesAPI.Address | null;

    /**
     * Dependent's email address
     */
    email?: string | null;

    /**
     * Dependent's phone number
     */
    phone?: string | null;

    /**
     * Name suffix options
     */
    suffix?: 'Jr.' | 'Sr.' | 'II' | 'III' | 'IV' | null;
  }

  /**
   * Benefit enrollment election request
   */
  export interface Election {
    /**
     * Unique enrollment identifier
     */
    enrollment_id: string;

    /**
     * Whether coverage was waived
     */
    waived_in: boolean;

    /**
     * External benefit plan information
     */
    chosen_external_plan?: Election.ChosenExternalPlan | null;

    /**
     * Selected plan or option identifier
     */
    chosen_item_id?: string | null;

    /**
     * List of dependents who waived coverage
     */
    waived_dependents_fake_ids?: Array<string>;
  }

  export namespace Election {
    /**
     * External benefit plan information
     */
    export interface ChosenExternalPlan {
      /**
       * External plan identifier
       */
      plan_id: string;

      /**
       * External plan name
       */
      plan_name: string;

      /**
       * Insurance carrier name
       */
      carrier?: string;
    }
  }

  /**
   * Electronic signature information
   */
  export interface Signing {
    /**
     * Electronic signature consent
     */
    e_sign_consent_in: boolean;

    /**
     * Signer full name
     */
    full_name: string;

    /**
     * Electronic signature
     */
    signature: string;

    /**
     * Date of signature
     */
    signature_date: string;
  }
}

export interface CompanyBenefitsEnrollmentReissueParams {
  /**
   * Administrative ticket or reference number for tracking
   */
  admin_ticket_number: string;

  /**
   * Administrative notes explaining the reason for re-issuance
   */
  evidence_notes: string;

  /**
   * Optional qualifying life event that triggered the re-issuance
   */
  qualifying_life_event_id?: string | null;
}

export declare namespace CompanyBenefitsEnrollments {
  export {
    type BenefitEnrollment as BenefitEnrollment,
    type CompanyBenefitsEnrollmentListResponse as CompanyBenefitsEnrollmentListResponse,
    type CompanyBenefitsEnrollmentElectResponse as CompanyBenefitsEnrollmentElectResponse,
    type CompanyBenefitsEnrollmentReissueResponse as CompanyBenefitsEnrollmentReissueResponse,
    type CompanyBenefitsEnrollmentListParams as CompanyBenefitsEnrollmentListParams,
    type CompanyBenefitsEnrollmentElectParams as CompanyBenefitsEnrollmentElectParams,
    type CompanyBenefitsEnrollmentReissueParams as CompanyBenefitsEnrollmentReissueParams,
  };
}
