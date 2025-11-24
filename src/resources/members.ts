// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BenefitsAPI from './companies/benefits';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Members extends APIResource {
  /**
   * Retrieve all active benefit enrollments for a specific employee. Critical for
   * payroll providers to determine current coverage.
   */
  listActiveBenefits(
    memberID: string,
    options?: RequestOptions,
  ): APIPromise<MemberListActiveBenefitsResponse> {
    return this._client.get(path`/v1/members/${memberID}/benefits`, options);
  }

  /**
   * Retrieve available benefit enrollment options during open enrollment periods.
   * Essential for payroll providers to understand which benefits employees can
   * enroll in during open enrollment windows.
   */
  listOpenEnrollmentBenefits(
    memberID: string,
    options?: RequestOptions,
  ): APIPromise<MemberListOpenEnrollmentBenefitsResponse> {
    return this._client.get(path`/v1/members/${memberID}/open-enrollment-benefits`, options);
  }

  /**
   * Retrieve pending benefit enrollments that require action or approval. Helps
   * payroll providers track enrollment status and identify enrollments that need
   * completion or processing.
   */
  listPendingBenefitEnrollments(
    memberID: string,
    options?: RequestOptions,
  ): APIPromise<MemberListPendingBenefitEnrollmentsResponse> {
    return this._client.get(path`/v1/members/${memberID}/pending-company-benefit-enrollments`, options);
  }
}

export interface MemberListActiveBenefitsResponse {
  data?: Array<MemberListActiveBenefitsResponse.Data>;
}

export namespace MemberListActiveBenefitsResponse {
  export interface Data {
    /**
     * Benefit type code
     */
    benefit_code?: string;

    /**
     * Name of the benefit
     */
    benefit_name?: string;

    /**
     * Category of benefit
     */
    benefit_type?: string;

    /**
     * Coverage end date
     */
    coverage_end?: string;

    /**
     * Coverage start date
     */
    coverage_start?: string;

    /**
     * Unique enrollment identifier
     */
    enrollment_id?: string;

    /**
     * Selected plan name
     */
    plan_name?: string;

    /**
     * Premium amount in cents
     */
    premium_amount?: number;

    /**
     * Coverage tier
     */
    tier_name?: string;
  }
}

export interface MemberListOpenEnrollmentBenefitsResponse {
  data?: Array<MemberListOpenEnrollmentBenefitsResponse.Data>;

  pagination?: BenefitsAPI.PaginationInfo;
}

export namespace MemberListOpenEnrollmentBenefitsResponse {
  export interface Data {
    /**
     * Available plan options
     */
    available_plans: Array<BenefitsAPI.CompanyBenefitPlan>;

    /**
     * Benefit name
     */
    benefit_name: string;

    /**
     * Benefit type
     */
    benefit_type: string;

    /**
     * Enrollment deadline
     */
    enrollment_deadline: string;

    /**
     * Enrollment identifier
     */
    enrollment_id: string;
  }
}

export interface MemberListPendingBenefitEnrollmentsResponse {
  data?: Array<MemberListPendingBenefitEnrollmentsResponse.Data>;

  pagination?: BenefitsAPI.PaginationInfo;
}

export namespace MemberListPendingBenefitEnrollmentsResponse {
  export interface Data {
    /**
     * Benefit name
     */
    benefit_name: string;

    /**
     * Benefit type
     */
    benefit_type: string;

    /**
     * Enrollment identifier
     */
    enrollment_id: string;

    /**
     * Enrollment status
     */
    status: 'Unanswered' | 'Pending_Approval' | 'Requires_Action';

    /**
     * Date enrollment was submitted
     */
    submitted_date?: string | null;
  }
}

export declare namespace Members {
  export {
    type MemberListActiveBenefitsResponse as MemberListActiveBenefitsResponse,
    type MemberListOpenEnrollmentBenefitsResponse as MemberListOpenEnrollmentBenefitsResponse,
    type MemberListPendingBenefitEnrollmentsResponse as MemberListPendingBenefitEnrollmentsResponse,
  };
}
