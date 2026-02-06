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
   *
   * @example
   * ```ts
   * const dependent = await client.members.dependents.create(
   *   'mbr_abc123def456',
   *   {
   *     date_of_birth: '2020-05-15',
   *     first_name: 'Emily',
   *     last_name: 'Doe',
   *     relationship: 'Child',
   *     sex: 'Female',
   *     ssn: '123-45-6789',
   *   },
   * );
   * ```
   */
  create(
    memberID: string,
    body: DependentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DependentCreateResponse> {
    return this._client.post(path`/v1/members/${memberID}/dependents`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of dependents for a specific member. Dependents
   * include spouses, children, and domestic partners who may be eligible for benefit
   * coverage.
   *
   * @example
   * ```ts
   * const dependents = await client.members.dependents.list(
   *   'mbr_abc123def456',
   * );
   * ```
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

/**
 * Response containing a single dependent resource.
 */
export interface DependentCreateResponse {
  /**
   * Serializer for Dependent entity in public API responses.
   *
   * Dependents are family members (spouse, children) who may be eligible for benefit
   * coverage through an employee.
   */
  data: DependentsAPI.Dependent;
}

/**
 * Paginated list response containing dependent resources.
 */
export interface DependentListResponse {
  data: Array<DependentsAPI.Dependent>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: DependentListResponse.Pagination;
}

export namespace DependentListResponse {
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
    type DependentCreateResponse as DependentCreateResponse,
    type DependentListResponse as DependentListResponse,
    type DependentCreateParams as DependentCreateParams,
    type DependentListParams as DependentListParams,
  };
}
