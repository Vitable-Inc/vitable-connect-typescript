// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BenefitsAPI from './companies/benefits';
import * as CompaniesAPI from './companies/companies';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CompanyMembers extends APIResource {
  /**
   * Retrieve detailed information about a specific employee. Includes demographic
   * information, employment details, and benefit eligibility.
   */
  retrieve(companyMemberID: string, options?: RequestOptions): APIPromise<CompanyMemberRetrieveResponse> {
    return this._client.get(path`/v1/company-members/${companyMemberID}`, options);
  }

  /**
   * Update employee demographic and employment information. Commonly used when
   * payroll providers receive updates from HRIS systems.
   */
  update(
    companyMemberID: string,
    body: CompanyMemberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CompanyMemberUpdateResponse> {
    return this._client.put(path`/v1/company-members/${companyMemberID}`, { body, ...options });
  }

  /**
   * Retrieve a list of employees (company members) with filtering options. This
   * endpoint is essential for payroll providers to get employee rosters and
   * understand benefit eligibility.
   */
  list(query: CompanyMemberListParams, options?: RequestOptions): APIPromise<CompanyMemberListResponse> {
    return this._client.get('/v1/company-members', { query, ...options });
  }

  /**
   * Deactivate/terminate an employee by setting their termination date. This
   * endpoint allows payroll providers to process employee terminations and ensures
   * proper benefit enrollment termination handling.
   */
  deactivate(
    companyMemberID: string,
    body: CompanyMemberDeactivateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/v1/company-members/${companyMemberID}/deactivate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CompanyMemberRetrieveResponse {
  data?: CompaniesAPI.CompanyMember;
}

export interface CompanyMemberUpdateResponse {
  data?: CompaniesAPI.CompanyMember;
}

export interface CompanyMemberListResponse {
  data?: Array<CompaniesAPI.CompanyMember>;

  pagination?: BenefitsAPI.PaginationInfo;
}

export interface CompanyMemberUpdateParams {
  /**
   * Employee email address
   */
  email?: string;

  /**
   * Employment classification
   */
  employee_class?: 'Full Time' | 'Part Time' | 'Temporary' | 'Intern' | 'Seasonal' | 'Individual Contractor';

  /**
   * External employee ID from HRIS
   */
  employee_id?: string;

  /**
   * Current employment status
   */
  employment_status?: 'Active' | 'Terminated' | 'Leave of Absence';

  /**
   * Employee first name
   */
  first_name?: string;

  /**
   * Employee hire date
   */
  hire_date?: string;

  /**
   * Employee last name
   */
  last_name?: string;
}

export interface CompanyMemberListParams {
  /**
   * Filter by company ID
   */
  company_id: string;

  /**
   * Filter for active employees only
   */
  active_in?: boolean;

  /**
   * Filter for benefit-eligible employees only
   */
  benefits_eligible_in?: boolean;

  /**
   * Filter by employment classification
   */
  employee_class?: 'Full Time' | 'Part Time' | 'Temporary' | 'Intern' | 'Seasonal' | 'Individual Contractor';

  /**
   * Number of results to return per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;
}

export interface CompanyMemberDeactivateParams {
  /**
   * Date when the employee's termination becomes effective
   */
  termination_date: string;
}

export declare namespace CompanyMembers {
  export {
    type CompanyMemberRetrieveResponse as CompanyMemberRetrieveResponse,
    type CompanyMemberUpdateResponse as CompanyMemberUpdateResponse,
    type CompanyMemberListResponse as CompanyMemberListResponse,
    type CompanyMemberUpdateParams as CompanyMemberUpdateParams,
    type CompanyMemberListParams as CompanyMemberListParams,
    type CompanyMemberDeactivateParams as CompanyMemberDeactivateParams,
  };
}
