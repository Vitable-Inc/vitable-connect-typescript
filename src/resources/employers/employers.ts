// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BenefitEligibilityPoliciesAPI from '../benefit-eligibility-policies';
import * as BenefitProductsAPI from '../benefit-products/benefit-products';
import * as EmployeesAPI from './employees';
import {
  EmployeeClass,
  EmployeeCreateParams,
  EmployeeListParams,
  EmployeeListResponse,
  Employees,
  Sex,
} from './employees';
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
   * Updates an existing employer's information. All fields are optional - only
   * provided fields will be updated. Note: EIN cannot be changed after creation.
   *
   * @example
   * ```ts
   * const employerResponse = await client.employers.update(
   *   'empr_abc123def456',
   *   {
   *     address: {
   *       address_line_1: '456 New Address Ave',
   *       address_line_2: 'Suite 200',
   *       city: 'San Francisco',
   *       state: 'CA',
   *       zipcode: '94103',
   *     },
   *     name: 'Acme Corp (Updated)',
   *   },
   * );
   * ```
   */
  update(
    employerID: string,
    body: EmployerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployerResponse> {
    return this._client.put(path`/v1/employers/${employerID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all employers that the authenticated organization
   * has access to. Use query parameters to filter by name or active status. Results
   * are paginated using page and limit parameters.
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
   * Creates a new benefit eligibility policy for a specific employer. Eligibility
   * policies define rules that determine which employees qualify for benefits based
   * on criteria such as employment status (full-time, part-time), hours worked per
   * week, waiting periods after hire date, or other custom requirements. Optionally
   * provide 'policy_to_replace_id' as a query parameter to replace an existing
   * policy.
   *
   * @example
   * ```ts
   * const benefitEligibilityPolicy =
   *   await client.employers.createEligibilityPolicy(
   *     'empr_abc123def456',
   *     {
   *       effective_date: '2025-01-01',
   *       name: 'Standard Full-Time Eligibility',
   *       rules: [
   *         {
   *           rule_type: 'employment_status',
   *           operator: 'in',
   *           value: 'full_time,part_time_30_plus',
   *         },
   *         {
   *           rule_type: 'waiting_period_days',
   *           operator: 'greater_than_or_equal',
   *           value: '30',
   *         },
   *       ],
   *       description:
   *         'Eligibility policy for full-time employees working 30+ hours per week',
   *     },
   *   );
   * ```
   */
  createEligibilityPolicy(
    employerID: string,
    params: EmployerCreateEligibilityPolicyParams,
    options?: RequestOptions,
  ): APIPromise<BenefitEligibilityPoliciesAPI.BenefitEligibilityPolicy> {
    const { policy_to_replace_id, ...body } = params;
    return this._client.post(path`/v1/employers/${employerID}/benefit-eligibility-policies`, {
      query: { policy_to_replace_id },
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
  organization_id: string;

  /**
   * Timestamp when the employer was last updated
   */
  updated_at: string;

  /**
   * Email address for billing and communications
   */
  email?: string | null;
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

export interface EmployerUpdateParams {
  /**
   * Whether the employer is active
   */
  active?: boolean | null;

  /**
   * Employer address
   */
  address?: EmployerUpdateParams.Address | null;

  /**
   * Legal business name
   */
  legal_name?: string | null;

  /**
   * Employer display name
   */
  name?: string | null;
}

export namespace EmployerUpdateParams {
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
   * Filter by active status
   */
  active_in?: boolean;

  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Filter by employer name (partial match)
   */
  name?: string;

  /**
   * Page number (default: 1)
   */
  page?: number;
}

export interface EmployerCreateEligibilityPolicyParams {
  /**
   * Body param: Date when policy becomes effective
   */
  effective_date: string;

  /**
   * Body param: Display name for the policy
   */
  name: string;

  /**
   * Body param: List of eligibility rules (at least one required)
   */
  rules: Array<EmployerCreateEligibilityPolicyParams.Rule>;

  /**
   * Query param: ID of existing policy to replace (epol\_\*)
   */
  policy_to_replace_id?: string;

  /**
   * Body param: Detailed description
   */
  description?: string | null;
}

export namespace EmployerCreateEligibilityPolicyParams {
  export interface Rule {
    /**
     * Comparison operator
     */
    operator: string;

    /**
     * Type of eligibility rule
     */
    rule_type: string;

    /**
     * Value to compare against (can be string, number, boolean, or list)
     */
    value: string;
  }
}

Employers.Employees = Employees;

export declare namespace Employers {
  export {
    type Employer as Employer,
    type EmployerResponse as EmployerResponse,
    type EmployerListResponse as EmployerListResponse,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerUpdateParams as EmployerUpdateParams,
    type EmployerListParams as EmployerListParams,
    type EmployerCreateEligibilityPolicyParams as EmployerCreateEligibilityPolicyParams,
  };

  export {
    Employees as Employees,
    type EmployeeClass as EmployeeClass,
    type Sex as Sex,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeListParams as EmployeeListParams,
  };
}
