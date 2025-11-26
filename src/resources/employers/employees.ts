// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DependentsAPI from '../dependents';
import * as EmployeesAPI from '../employees/employees';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Employees extends APIResource {
  /**
   * Creates a new Employee for an Employer. Only the create Employee endpoint allows
   * specifying the SSN.
   */
  create(
    id: string,
    body: EmployeeCreateParams,
    options?: RequestOptions,
  ): APIPromise<EmployeesAPI.Employee> {
    return this._client.post(path`/employers/${id}/employees`, { body, ...options });
  }

  /**
   * Lists all Employees for an Employer.
   */
  list(
    id: string,
    query: EmployeeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployeeListResponse> {
    return this._client.get(path`/employers/${id}/employees`, { query, ...options });
  }
}

export interface CreateEmployeeRequest {
  date_of_birth: string;

  first_name: string;

  last_name: string;

  start_date: string;

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND';

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

  /**
   * Social Security Number (only allowed on create)
   */
  ssn?: string;

  suffix?: string;
}

export interface Employee {
  id: string;

  active: boolean;

  employer_id: string;

  member: EmployeesAPI.Member;

  start_date: string;

  dependents?: Array<DependentsAPI.Dependent>;

  terminated_at?: string | null;
}

export interface UpdateEmployeeRequest {
  date_of_birth?: string;

  first_name?: string;

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND';

  last_name?: string;

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

  start_date?: string;

  suffix?: string;
}

export interface EmployeeListResponse {
  data?: Array<EmployeesAPI.Employee>;

  pagination?: EmployeeListResponse.Pagination;
}

export namespace EmployeeListResponse {
  export interface Pagination {
    limit: number;

    offset: number;

    total: number;
  }
}

export interface EmployeeCreateParams {
  date_of_birth: string;

  first_name: string;

  last_name: string;

  start_date: string;

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND';

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

  /**
   * Social Security Number (only allowed on create)
   */
  ssn?: string;

  suffix?: string;
}

export interface EmployeeListParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export declare namespace Employees {
  export {
    type CreateEmployeeRequest as CreateEmployeeRequest,
    type Employee as Employee,
    type UpdateEmployeeRequest as UpdateEmployeeRequest,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeListParams as EmployeeListParams,
  };
}
