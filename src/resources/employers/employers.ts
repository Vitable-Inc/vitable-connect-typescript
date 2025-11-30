// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BenefitEligibilityPolicyAPI from '../benefit-eligibility-policy';
import * as EmployeesAPI from './employees';
import {
  EmployeeClass,
  EmployeeCreateParams,
  EmployeeListParams,
  EmployeeListResponse,
  Employees,
} from './employees';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Employers extends APIResource {
  employees: EmployeesAPI.Employees = new EmployeesAPI.Employees(this._client);

  /**
   * Creates a new employer for the authenticated organization. Requires employer
   * name, legal name, EIN, and address information. Returns the created employer
   * with its assigned ID.
   */
  create(body: EmployerCreateParams, options?: RequestOptions): APIPromise<Employer> {
    return this._client.post('/v1/employers', { body, ...options });
  }

  /**
   * Retrieves detailed information for a specific employer by ID. The employer must
   * belong to the authenticated organization.
   */
  retrieve(employerID: string, options?: RequestOptions): APIPromise<Employer> {
    return this._client.get(path`/v1/employers/${employerID}`, options);
  }

  /**
   * Updates an existing employer's information. All fields are optional - only
   * provided fields will be updated. Note: EIN cannot be changed after creation.
   */
  update(
    employerID: string,
    body: EmployerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Employer> {
    return this._client.put(path`/v1/employers/${employerID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all employers that the authenticated organization
   * has access to. Use query parameters to filter by name or active status. Results
   * are paginated using page and limit parameters.
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
   */
  createEligibilityPolicy(
    employerID: string,
    params: EmployerCreateEligibilityPolicyParams,
    options?: RequestOptions,
  ): APIPromise<BenefitEligibilityPolicyAPI.BenefitEligibilityPolicy> {
    const { policy_to_replace_id, ...body } = params;
    return this._client.post(path`/v1/employers/${employerID}/benefit-eligibility-policy`, {
      query: { policy_to_replace_id },
      body,
      ...options,
    });
  }
}

/**
 * Serializer for Employer entity in public API responses.
 *
 * Matches EmployerEntity from company module domain.
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
   * Timestamp when the employer was created
   */
  created_at: string;

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
   * Nested address within EmployerSerializer.
   */
  address?: Employer.Address | null;

  /**
   * Employer Identification Number (masked in responses)
   */
  ein?: string | null;

  /**
   * ID of the benefit eligibility policy (epol\_\*), if assigned
   */
  eligibility_policy_id?: string | null;
}

export namespace Employer {
  /**
   * Nested address within EmployerSerializer.
   */
  export interface Address {
    /**
     * City name
     */
    city: string;

    /**
     * Two-letter state code (e.g., CA, NY)
     */
    state: string;

    /**
     * Primary street address
     */
    street_1: string;

    /**
     * ZIP code (5 or 9 digit)
     */
    zip_code: string;

    /**
     * Country code (default: US)
     */
    country?: string;

    /**
     * Secondary street address (apt, suite, etc.)
     */
    street_2?: string | null;
  }
}

export type EmployerListResponse = Array<Employer>;

export interface EmployerCreateParams {
  /**
   * Employer address
   */
  address: EmployerCreateParams.Address;

  /**
   * Employer Identification Number (format: XX-XXXXXXX or XXXXXXXXX)
   */
  ein: string;

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
     * City name
     */
    city: string;

    /**
     * Two-letter state code
     */
    state: string;

    /**
     * Primary street address
     */
    street_1: string;

    /**
     * ZIP code
     */
    zip_code: string;

    /**
     * Country code
     */
    country?: string;

    /**
     * Secondary street address
     */
    street_2?: string | null;
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
     * City name
     */
    city: string;

    /**
     * Two-letter state code
     */
    state: string;

    /**
     * Primary street address
     */
    street_1: string;

    /**
     * ZIP code
     */
    zip_code: string;

    /**
     * Country code
     */
    country?: string;

    /**
     * Secondary street address
     */
    street_2?: string | null;
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
    type EmployerListResponse as EmployerListResponse,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerUpdateParams as EmployerUpdateParams,
    type EmployerListParams as EmployerListParams,
    type EmployerCreateEligibilityPolicyParams as EmployerCreateEligibilityPolicyParams,
  };

  export {
    Employees as Employees,
    type EmployeeClass as EmployeeClass,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeListParams as EmployeeListParams,
  };
}
