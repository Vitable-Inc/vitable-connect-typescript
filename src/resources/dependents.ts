// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EmployeesAPI from './employees/employees';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage dependent records (spouses, children) for employees
 */
export class Dependents extends APIResource {
  /**
   * Retrieves detailed information for a specific dependent by ID. Returns dependent
   * profile including name, date of birth, and relationship type.
   *
   * @example
   * ```ts
   * const dependentResponse = await client.dependents.retrieve(
   *   'dpnd_abc123def456',
   * );
   * ```
   */
  retrieve(dependentID: string, options?: RequestOptions): APIPromise<DependentResponse> {
    return this._client.get(path`/v1/dependents/${dependentID}`, options);
  }

  /**
   * Updates an existing dependent's mutable information. Allows modification of
   * relationship type and active status. Name, DOB, and sex cannot be modified after
   * creation.
   *
   * @example
   * ```ts
   * const dependentResponse = await client.dependents.update(
   *   'dpnd_abc123def456',
   *   { active: true, relationship: 'Spouse' },
   * );
   * ```
   */
  update(
    dependentID: string,
    body: DependentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DependentResponse> {
    return this._client.put(path`/v1/dependents/${dependentID}`, { body, ...options });
  }
}

/**
 * Serializer for Dependent entity in public API responses.
 *
 * Dependents are family members (spouse, children) who may be eligible for benefit
 * coverage through an employee.
 */
export interface Dependent {
  /**
   * Unique dependent identifier with 'dpnd\_' prefix
   */
  id: string;

  /**
   * Whether the dependent is currently active
   */
  active_in: boolean;

  /**
   * Timestamp when the dependent was created
   */
  created_at: string;

  /**
   * Dependent's date of birth (YYYY-MM-DD)
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
   * ID of the primary member/employee (mbr\_\*)
   */
  member_id: string;

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
  sex: EmployeesAPI.Sex;

  /**
   * Timestamp when the dependent was last updated
   */
  updated_at: string;

  /**
   * Gender identity, if provided
   */
  gender?: string | null;

  /**
   * Last 4 digits of SSN (masked)
   */
  ssn_last_four?: string | null;

  /**
   * Name suffix (e.g., Jr., Sr., III)
   */
  suffix?: string | null;
}

/**
 * Response containing a single dependent resource.
 */
export interface DependentResponse {
  /**
   * Serializer for Dependent entity in public API responses.
   *
   * Dependents are family members (spouse, children) who may be eligible for benefit
   * coverage through an employee.
   */
  data: Dependent;
}

/**
 * - `Spouse` - Spouse
 * - `Child` - Child
 */
export type Relationship = 'Spouse' | 'Child';

export interface DependentUpdateParams {
  /**
   * Whether the dependent is active
   */
  active?: boolean | null;

  /**
   * Gender identity
   */
  gender?: string | null;

  /**
   * - `Spouse` - Spouse
   * - `Child` - Child
   */
  relationship?: Relationship | null;
}

export declare namespace Dependents {
  export {
    type Dependent as Dependent,
    type DependentResponse as DependentResponse,
    type Relationship as Relationship,
    type DependentUpdateParams as DependentUpdateParams,
  };
}
