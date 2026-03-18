// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BenefitEligibilityPoliciesAPI from '../benefit-eligibility-policies';
import * as BenefitProductsAPI from '../benefit-products/benefit-products';
import * as EmployeesAPI from './employees';
import { EmployeeListParams, EmployeeListResponse, Employees } from './employees';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Employers extends APIResource {
  employees: EmployeesAPI.Employees = new EmployeesAPI.Employees(this._client);

  /**
   * Creates a new employer for the authenticated organization. Requires employer
   * name, legal name, EIN, email, and address information. Returns the created
   * employer with its assigned ID.
   *
   * @example
   * ```ts
   * const employerResponse = await client.employers.create({
   *   address: {
   *     address_line_1: '789 Business Blvd',
   *     address_line_2: 'Floor 5',
   *     city: 'Seattle',
   *     state: 'WA',
   *     zipcode: '98101',
   *   },
   *   ein: '12-3456789',
   *   email: 'hr@newco.com',
   *   legal_name: 'NewCo Industries LLC',
   *   name: 'NewCo Industries',
   * });
   * ```
   */
  create(body: EmployerCreateParams, options?: RequestOptions): APIPromise<EmployerResponse> {
    return this._client.post('/v1/employers', { body, ...options });
  }

  /**
   * Retrieves detailed information for a specific employer by ID. The employer must
   * belong to the authenticated organization.
   *
   * @example
   * ```ts
   * const employerResponse = await client.employers.retrieve(
   *   'empr_abc123def456',
   * );
   * ```
   */
  retrieve(employerID: string, options?: RequestOptions): APIPromise<EmployerResponse> {
    return this._client.get(path`/v1/employers/${employerID}`, options);
  }

  /**
   * Retrieves a paginated list of all employers belonging to the authenticated
   * organization. Results are sorted by creation date (newest first) and paginated
   * using page and limit parameters.
   *
   * @example
   * ```ts
   * const employers = await client.employers.list();
   * ```
   */
  list(
    query: EmployerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployerListResponse> {
    return this._client.get('/v1/employers', { query, ...options });
  }

  /**
   * Creates a benefit eligibility policy for the specified employer.
   *
   * @example
   * ```ts
   * const benefitEligibilityPolicy =
   *   await client.employers.createEligibilityPolicy(
   *     'empr_abc123def456',
   *     {
   *       classification: 'classification',
   *       waiting_period: 'waiting_period',
   *     },
   *   );
   * ```
   */
  createEligibilityPolicy(
    employerID: string,
    body: EmployerCreateEligibilityPolicyParams,
    options?: RequestOptions,
  ): APIPromise<BenefitEligibilityPoliciesAPI.BenefitEligibilityPolicy> {
    return this._client.post(path`/v1/employers/${employerID}/benefit-eligibility-policies`, {
      body,
      ...options,
    });
  }
}

/**
 * Serializer for Employer entity in public API responses.
 */
export interface Employer {
  /**
   * Unique employer identifier with 'empr\_' prefix
   */
  id: string;

  /**
   * Whether the employer is currently active in the system
   */
  active: boolean;

  /**
   * Nested address within EmployerSerializer.
   */
  address: Employer.Address;

  /**
   * Timestamp when the employer was created
   */
  created_at: string;

  /**
   * Employer Identification Number (masked in responses)
   */
  ein: string | null;

  /**
   * ID of the benefit eligibility policy (epol\_\*), if assigned
   */
  eligibility_policy_id: string | null;

  /**
   * Legal business name for compliance and tax purposes
   */
  legal_name: string;

  /**
   * Display name of the employer
   */
  name: string;

  /**
   * ID of the parent organization (org\_\*)
   */
  organization_id: string | null;

  /**
   * Timestamp when the employer was last updated
   */
  updated_at: string;

  /**
   * Email address for billing and communications
   */
  email?: string | null;

  /**
   * Employer phone number (E.164 format recommended)
   */
  phone_number?: string | null;

  /**
   * Partner-assigned reference ID for the employer
   */
  reference_id?: string | null;
}

export namespace Employer {
  /**
   * Nested address within EmployerSerializer.
   */
  export interface Address {
    /**
     * Primary street address
     */
    address_line_1: string;

    /**
     * City name
     */
    city: string;

    /**
     * Two-letter state code (e.g., CA, NY)
     */
    state: string;

    /**
     * ZIP code (5 or 9 digit)
     */
    zipcode: string;

    /**
     * Secondary street address (apt, suite, etc.)
     */
    address_line_2?: string | null;
  }
}

/**
 * Response containing a single employer resource.
 */
export interface EmployerResponse {
  /**
   * Serializer for Employer entity in public API responses.
   */
  data: Employer;
}

/**
 * Paginated list response containing employer resources.
 */
export interface EmployerListResponse {
  data: Array<Employer>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: BenefitProductsAPI.Pagination;
}

export interface EmployerCreateParams {
  /**
   * Employer address
   */
  address: EmployerCreateParams.Address;

  /**
   * Employer Identification Number (format: XX-XXXXXXX)
   */
  ein: string;

  /**
   * Email address for billing and communications
   */
  email: string;

  /**
   * Legal business name
   */
  legal_name: string;

  /**
   * Employer display name
   */
  name: string;
}

export namespace EmployerCreateParams {
  /**
   * Employer address
   */
  export interface Address {
    /**
     * Primary street address
     */
    address_line_1: string;

    /**
     * City name
     */
    city: string;

    /**
     * Two-letter state code
     */
    state: string;

    /**
     * ZIP code
     */
    zipcode: string;

    /**
     * Secondary street address
     */
    address_line_2?: string | null;
  }
}

export interface EmployerListParams {
  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;
}

export interface EmployerCreateEligibilityPolicyParams {
  /**
   * Which employee classifications are eligible. One of: full_time, part_time, all
   */
  classification: string;

  /**
   * Waiting period before eligibility. One of: first_of_following_month, 30_days,
   * 60_days, none
   */
  waiting_period: string;
}

Employers.Employees = Employees;

export declare namespace Employers {
  export {
    type Employer as Employer,
    type EmployerResponse as EmployerResponse,
    type EmployerListResponse as EmployerListResponse,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerListParams as EmployerListParams,
    type EmployerCreateEligibilityPolicyParams as EmployerCreateEligibilityPolicyParams,
  };

  export {
    Employees as Employees,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeListParams as EmployeeListParams,
  };
}
