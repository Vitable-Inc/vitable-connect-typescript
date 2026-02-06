// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmployeesAPI from './employees';
import {
  EmployeeClass,
  EmployeeCreateParams,
  EmployeeCreateResponse,
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
   * name, legal name, EIN, email, and address information. Returns the created
   * employer with its assigned ID.
   *
   * @example
   * ```ts
   * const employer = await client.employers.create({
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
  create(body: EmployerCreateParams, options?: RequestOptions): APIPromise<EmployerCreateResponse> {
    return this._client.post('/v1/employers', { body, ...options });
  }

  /**
   * Retrieves detailed information for a specific employer by ID. The employer must
   * belong to the authenticated organization.
   *
   * @example
   * ```ts
   * const employer = await client.employers.retrieve(
   *   'empr_abc123def456',
   * );
   * ```
   */
  retrieve(employerID: string, options?: RequestOptions): APIPromise<EmployerRetrieveResponse> {
    return this._client.get(path`/v1/employers/${employerID}`, options);
  }

  /**
   * Updates an existing employer's information. All fields are optional - only
   * provided fields will be updated. Note: EIN cannot be changed after creation.
   *
   * @example
   * ```ts
   * const employer = await client.employers.update(
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
  ): APIPromise<EmployerUpdateResponse> {
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
export interface EmployerCreateResponse {
  /**
   * Serializer for Employer entity in public API responses.
   */
  data: Employer;
}

/**
 * Response containing a single employer resource.
 */
export interface EmployerRetrieveResponse {
  /**
   * Serializer for Employer entity in public API responses.
   */
  data: Employer;
}

/**
 * Response containing a single employer resource.
 */
export interface EmployerUpdateResponse {
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
  pagination: EmployerListResponse.Pagination;
}

export namespace EmployerListResponse {
  /**
   * Pagination metadata for list responses.
   */
  export interface Pagination {
    /**
     * Items per page
     */
    limit: number;

    /**
     * Current page number
     */
    page: number;

    /**
     * Total number of items
     */
    total: number;

    /**
     * Total number of pages
     */
    total_pages: number;
  }
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

Employers.Employees = Employees;

export declare namespace Employers {
  export {
    type Employer as Employer,
    type EmployerCreateResponse as EmployerCreateResponse,
    type EmployerRetrieveResponse as EmployerRetrieveResponse,
    type EmployerUpdateResponse as EmployerUpdateResponse,
    type EmployerListResponse as EmployerListResponse,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerUpdateParams as EmployerUpdateParams,
    type EmployerListParams as EmployerListParams,
  };

  export {
    Employees as Employees,
    type EmployeeClass as EmployeeClass,
    type EmployeeCreateResponse as EmployeeCreateResponse,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeListParams as EmployeeListParams,
  };
}
