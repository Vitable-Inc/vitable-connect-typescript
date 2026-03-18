// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnrollmentsAPI from '../enrollments';
import * as BenefitProductsAPI from '../benefit-products/benefit-products';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage benefit enrollments and elections for employees
 */
export class Enrollments extends APIResource {
  /**
   * Retrieves a paginated list of benefit enrollments for an employee.
   */
  list(
    employeeID: string,
    query: EnrollmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnrollmentList> {
    return this._client.get(path`/v1/employees/${employeeID}/enrollments`, { query, ...options });
  }
}

/**
 * Paginated list response containing enrollment resources.
 */
export interface EnrollmentList {
  data: Array<EnrollmentsAPI.Enrollment>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: BenefitProductsAPI.Pagination;
}

export interface EnrollmentListParams {
  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;
}

export declare namespace Enrollments {
  export { type EnrollmentList as EnrollmentList, type EnrollmentListParams as EnrollmentListParams };
}
