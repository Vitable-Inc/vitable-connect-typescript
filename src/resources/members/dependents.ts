// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DependentsAPI from '../dependents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Dependents extends APIResource {
  /**
   * Creates a new dependent record for a member. Required: first name, last name,
   * date of birth, sex, and relationship type. SSN is optional but recommended for
   * coverage verification.
   */
  create(
    memberID: string,
    body: DependentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DependentsAPI.Dependent> {
    return this._client.post(path`/v1/members/${memberID}/dependents`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of dependents for a specific member. Dependents
   * include spouses, children, and domestic partners who may be eligible for benefit
   * coverage.
   */
  list(
    memberID: string,
    query: DependentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DependentListResponse> {
    return this._client.get(path`/v1/members/${memberID}/dependents`, { query, ...options });
  }
}

/**
 * - `Spouse` - Spouse
 * - `Child` - Child
 */
export type Relationship = 'Spouse' | 'Child';

export type DependentListResponse = Array<DependentsAPI.Dependent>;

export interface DependentCreateParams {
  /**
   * Date of birth (YYYY-MM-DD)
   */
  date_of_birth: string;

  /**
   * Dependent's legal first name
   */
  first_name: string;

  /**
   * Dependent's legal last name
   */
  last_name: string;

  /**
   * - `Spouse` - Spouse
   * - `Child` - Child
   */
  relationship: Relationship;

  /**
   * - `Male` - Male
   * - `Female` - Female
   * - `Other` - Other
   * - `Unknown` - Unknown
   */
  sex: DependentsAPI.Sex;

  /**
   * Gender identity
   */
  gender?: string | null;

  /**
   * Social Security Number (optional, XXX-XX-XXXX or XXXXXXXXX)
   */
  ssn?: string | null;

  /**
   * Name suffix (Jr., Sr., III)
   */
  suffix?: string | null;
}

export interface DependentListParams {
  /**
   * Filter by active status
   */
  active_in?: boolean;

  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Filter by relationship type
   */
  relationship?: Relationship;
}

export declare namespace Dependents {
  export {
    type Relationship as Relationship,
    type DependentListResponse as DependentListResponse,
    type DependentCreateParams as DependentCreateParams,
    type DependentListParams as DependentListParams,
  };
}
