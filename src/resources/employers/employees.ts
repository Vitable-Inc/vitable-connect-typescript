// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BenefitProductsAPI from '../benefit-products/benefit-products';
import * as EmployeesAPI from '../employees/employees';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage employee records for employers
 */
export class Employees extends APIResource {
  /**
   * Creates a new employee for a specific employer. Requires personal information
   * (name, DOB, SSN) and employment details (start date). Note: SSN can only be
   * specified at creation time and cannot be updated later. Returns the created
   * employee with assigned ID.
   *
   * @example
   * ```ts
   * const employeeResponse =
   *   await client.employers.employees.create(
   *     'empr_abc123def456',
   *     {
   *       date_of_birth: '1992-08-25',
   *       email: 'michael.johnson@example.com',
   *       first_name: 'Michael',
   *       last_name: 'Johnson',
   *       sex: 'Male',
   *       ssn: '123-45-6789',
   *       start_date: '2024-12-01',
   *       address: {
   *         street_1: '789 Pine Street',
   *         city: 'Austin',
   *         state: 'TX',
   *         zip_code: '78701',
   *         country: 'US',
   *       },
   *       employee_class: 'Full Time',
   *       phone: '+1-555-222-3333',
   *     },
   *   );
   * ```
   */
  create(
    employerID: string,
    body: EmployeeCreateParams,
    options?: RequestOptions,
  ): APIPromise<EmployeesAPI.EmployeeResponse> {
    return this._client.post(path`/v1/employers/${employerID}/employees`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of all employees for a specific employer. Use query
   * parameters to filter by active status or employment classification. Results are
   * paginated using page and limit parameters.
   *
   * @example
   * ```ts
   * const employees = await client.employers.employees.list(
   *   'empr_abc123def456',
   * );
   * ```
   */
  list(
    employerID: string,
    query: EmployeeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployeeListResponse> {
    return this._client.get(path`/v1/employers/${employerID}/employees`, { query, ...options });
  }
}

/**
 * Paginated list response containing employee resources.
 */
export interface EmployeeListResponse {
  data: Array<EmployeesAPI.Employee>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: BenefitProductsAPI.Pagination;
}

export interface EmployeeCreateParams {
  /**
   * Date of birth (YYYY-MM-DD)
   */
  date_of_birth: string;

  /**
   * Email address
   */
  email: string;

  /**
   * Employee's legal first name
   */
  first_name: string;

  /**
   * Employee's legal last name
   */
  last_name: string;

  /**
   * - `Male` - Male
   * - `Female` - Female
   * - `Other` - Other
   * - `Unknown` - Unknown
   */
  sex: EmployeesAPI.Sex;

  /**
   * Social Security Number (XXX-XX-XXXX or XXXXXXXXX). Only accepted on create.
   */
  ssn: string;

  /**
   * Employment start/hire date
   */
  start_date: string;

  /**
   * Employee's residential address
   */
  address?: EmployeeCreateParams.Address | null;

  /**
   * - `Full Time` - Full Time
   * - `Part Time` - Part Time
   * - `Temporary` - Temporary
   * - `Intern` - Intern
   * - `Seasonal` - Seasonal
   * - `Individual Contractor` - Individual Contractor
   */
  employee_class?: EmployeesAPI.EmployeeClass | null;

  /**
   * Gender identity
   */
  gender?: string | null;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Name suffix (Jr., Sr., III)
   */
  suffix?: string | null;
}

export namespace EmployeeCreateParams {
  /**
   * Employee's residential address
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

export interface EmployeeListParams {
  /**
   * Filter by active status
   */
  active_in?: boolean;

  /**
   * Filter by employment classification
   */
  employee_class?: EmployeesAPI.EmployeeClass;

  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;
}

export declare namespace Employees {
  export {
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeListParams as EmployeeListParams,
  };
}
