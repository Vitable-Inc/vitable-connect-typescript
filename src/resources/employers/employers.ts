// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmployeesAPI from './employees';
import {
  CreateEmployeeRequest,
  Employee,
  EmployeeCreateParams,
  EmployeeListParams,
  EmployeeListResponse,
  Employees,
  UpdateEmployeeRequest,
} from './employees';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Employers extends APIResource {
  employees: EmployeesAPI.Employees = new EmployeesAPI.Employees(this._client);

  /**
   * Creates a new Employer for an Organization.
   */
  create(body: EmployerCreateParams, options?: RequestOptions): APIPromise<Employer> {
    return this._client.post('/employers', { body, ...options });
  }

  /**
   * Gets a specific Employer an Organization has access to.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Employer> {
    return this._client.get(path`/employers/${id}`, options);
  }

  /**
   * Updates a specific Employer an Organization has access to.
   */
  update(id: string, body: EmployerUpdateParams, options?: RequestOptions): APIPromise<Employer> {
    return this._client.put(path`/employers/${id}`, { body, ...options });
  }

  /**
   * Lists all Employers an Organization has access to.
   */
  list(
    query: EmployerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployerListResponse> {
    return this._client.get('/employers', { query, ...options });
  }

  /**
   * Creates a new Benefit Eligibility Policy for a specific Employer an Organization
   * has access to.
   */
  createEligibilityPolicy(
    id: string,
    params: EmployerCreateEligibilityPolicyParams,
    options?: RequestOptions,
  ): APIPromise<EligibilityPolicy> {
    const { policy_to_replace_id, ...body } = params;
    return this._client.post(path`/employers/${id}/benefit-eligibility-policy`, {
      query: { policy_to_replace_id },
      body,
      ...options,
    });
  }
}

export interface CreateEligibilityPolicyRequest {
  classification: 'FULL_TIME' | 'PART_TIME' | 'ALL';

  waiting_period: 'FIRST_OF_FOLLOWING_MONTH' | 'THIRTY_DAYS' | 'SIXTY_DAYS' | 'NONE';
}

export interface CreateEmployerRequest {
  legal_name: string;

  name: string;

  active?: boolean;
}

export interface EligibilityPolicy {
  id: string;

  active: boolean;

  classification: 'FULL_TIME' | 'PART_TIME' | 'ALL';

  employer_id: string;

  waiting_period: 'FIRST_OF_FOLLOWING_MONTH' | 'THIRTY_DAYS' | 'SIXTY_DAYS' | 'NONE';

  archived_at?: string | null;

  replaces_policy_id?: string | null;
}

export interface Employer {
  id: string;

  active: boolean;

  legal_name: string;

  name: string;

  eligibility_policy?: EligibilityPolicy | null;

  organization_id?: string | null;
}

export interface UpdateEmployerRequest {
  active?: boolean;

  legal_name?: string;

  name?: string;
}

export interface EmployerListResponse {
  data?: Array<Employer>;

  pagination?: EmployerListResponse.Pagination;
}

export namespace EmployerListResponse {
  export interface Pagination {
    limit: number;

    offset: number;

    total: number;
  }
}

export interface EmployerCreateParams {
  legal_name: string;

  name: string;

  active?: boolean;
}

export interface EmployerUpdateParams {
  active?: boolean;

  legal_name?: string;

  name?: string;
}

export interface EmployerListParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export interface EmployerCreateEligibilityPolicyParams {
  /**
   * Body param:
   */
  classification: 'FULL_TIME' | 'PART_TIME' | 'ALL';

  /**
   * Body param:
   */
  waiting_period: 'FIRST_OF_FOLLOWING_MONTH' | 'THIRTY_DAYS' | 'SIXTY_DAYS' | 'NONE';

  /**
   * Query param: ID of the policy to replace
   */
  policy_to_replace_id?: string;
}

Employers.Employees = Employees;

export declare namespace Employers {
  export {
    type CreateEligibilityPolicyRequest as CreateEligibilityPolicyRequest,
    type CreateEmployerRequest as CreateEmployerRequest,
    type EligibilityPolicy as EligibilityPolicy,
    type Employer as Employer,
    type UpdateEmployerRequest as UpdateEmployerRequest,
    type EmployerListResponse as EmployerListResponse,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerUpdateParams as EmployerUpdateParams,
    type EmployerListParams as EmployerListParams,
    type EmployerCreateEligibilityPolicyParams as EmployerCreateEligibilityPolicyParams,
  };

  export {
    Employees as Employees,
    type CreateEmployeeRequest as CreateEmployeeRequest,
    type Employee as Employee,
    type UpdateEmployeeRequest as UpdateEmployeeRequest,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeListParams as EmployeeListParams,
  };
}
