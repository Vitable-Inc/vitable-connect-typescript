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
   * Retrieves a paginated list of all employees for a specific employer. Results are
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

export interface EmployeeListParams {
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
  export { type EmployeeListResponse as EmployeeListResponse, type EmployeeListParams as EmployeeListParams };
}
