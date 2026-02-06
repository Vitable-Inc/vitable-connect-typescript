// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DependentsAPI from '../dependents';
import * as EnrollmentsAPI from './enrollments';
import {
  EnrollmentListParams,
  EnrollmentListResponse,
  EnrollmentStatus,
  EnrollmentSubmitElectionsParams,
  EnrollmentSubmitElectionsResponse,
  Enrollments,
} from './enrollments';
import * as EmployersEmployeesAPI from '../employers/employees';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Employees extends APIResource {
  enrollments: EnrollmentsAPI.Enrollments = new EnrollmentsAPI.Enrollments(this._client);

  /**
   * Retrieves detailed information for a specific employee by ID. Returns employee
   * details including personal information and employment status.
   *
   * @example
   * ```ts
   * const employee = await client.employees.retrieve(
   *   'empl_abc123def456',
   * );
   * ```
   */
  retrieve(employeeID: string, options?: RequestOptions): APIPromise<EmployeeRetrieveResponse> {
    return this._client.get(path`/v1/employees/${employeeID}`, options);
  }

  /**
   * Updates an existing employee's information. All fields are optional - only
   * provided fields will be updated. Note: SSN, name, date of birth, and sex cannot
   * be changed after creation.
   *
   * @example
   * ```ts
   * const employee = await client.employees.update(
   *   'empl_abc123def456',
   *   {
   *     address: {
   *       street_1: '123 New Street',
   *       city: 'Los Angeles',
   *       state: 'CA',
   *       zip_code: '90001',
   *       country: 'US',
   *     },
   *     email: 'john.doe.updated@example.com',
   *     employee_class: 'Part Time',
   *     phone: '+1-555-999-8888',
   *   },
   * );
   * ```
   */
  update(
    employeeID: string,
    body: EmployeeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployeeUpdateResponse> {
    return this._client.put(path`/v1/employees/${employeeID}`, { body, ...options });
  }

  /**
   * Terminates a specific employee. This sets the employee's active status to false
   * and records a termination date. The employee record is not permanently deleted
   * for compliance reasons.
   *
   * @example
   * ```ts
   * await client.employees.terminate('empl_abc123def456');
   * ```
   */
  terminate(employeeID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/employees/${employeeID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Serializer for Employee entity in public API responses.
 *
 * Note: Employee is in the company module but exposed via account public API.
 * Contains nested MemberEntity with personal identity information.
 */
export interface Employee {
  /**
   * Unique employee identifier with 'empl\_' prefix
   */
  id: string;

  /**
   * Whether the employee is currently active
   */
  active_in: boolean;

  /**
   * Timestamp when the employee was created
   */
  created_at: string;

  /**
   * ID of the employer this employee works for (empr\_\*)
   */
  employer_id: string;

  /**
   * Nested member entity containing personal identity information.
   *
   * Matches MemberEntity from account module domain.
   */
  member: Employee.Member;

  /**
   * Employee's start/hire date with the employer
   */
  start_date: string;

  /**
   * Timestamp when the employee was last updated
   */
  updated_at: string;

  /**
   * Nested address for employee.
   */
  address?: Employee.Address | null;

  /**
   * - `Full Time` - Full Time
   * - `Part Time` - Part Time
   * - `Temporary` - Temporary
   * - `Intern` - Intern
   * - `Seasonal` - Seasonal
   * - `Individual Contractor` - Individual Contractor
   */
  employee_class?: EmployersEmployeesAPI.EmployeeClass | null;

  /**
   * Employee's termination date, if terminated
   */
  termination_date?: string | null;
}

export namespace Employee {
  /**
   * Nested member entity containing personal identity information.
   *
   * Matches MemberEntity from account module domain.
   */
  export interface Member {
    /**
     * Unique member identifier with 'mbr\_' prefix
     */
    id: string;

    /**
     * Member's date of birth (YYYY-MM-DD)
     */
    date_of_birth: string;

    /**
     * Member's legal first name
     */
    first_name: string;

    /**
     * Member's legal last name
     */
    last_name: string;

    /**
     * - `Male` - Male
     * - `Female` - Female
     * - `Other` - Other
     * - `Unknown` - Unknown
     */
    sex: DependentsAPI.Sex;

    /**
     * Email address for communications
     */
    email?: string | null;

    /**
     * Gender identity, if provided
     */
    gender?: string | null;

    /**
     * Phone number
     */
    phone?: string | null;

    /**
     * Name suffix (e.g., Jr., Sr., III)
     */
    suffix?: string | null;
  }

  /**
   * Nested address for employee.
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

/**
 * Response containing a single employee resource.
 */
export interface EmployeeRetrieveResponse {
  /**
   * Serializer for Employee entity in public API responses.
   *
   * Note: Employee is in the company module but exposed via account public API.
   * Contains nested MemberEntity with personal identity information.
   */
  data: Employee;
}

/**
 * Response containing a single employee resource.
 */
export interface EmployeeUpdateResponse {
  /**
   * Serializer for Employee entity in public API responses.
   *
   * Note: Employee is in the company module but exposed via account public API.
   * Contains nested MemberEntity with personal identity information.
   */
  data: Employee;
}

export interface EmployeeUpdateParams {
  /**
   * Employee's residential address
   */
  address?: EmployeeUpdateParams.Address | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * - `Full Time` - Full Time
   * - `Part Time` - Part Time
   * - `Temporary` - Temporary
   * - `Intern` - Intern
   * - `Seasonal` - Seasonal
   * - `Individual Contractor` - Individual Contractor
   */
  employee_class?: EmployersEmployeesAPI.EmployeeClass | null;

  /**
   * Gender identity
   */
  gender?: string | null;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Termination date if terminating
   */
  termination_date?: string | null;
}

export namespace EmployeeUpdateParams {
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

Employees.Enrollments = Enrollments;

export declare namespace Employees {
  export {
    type Employee as Employee,
    type EmployeeRetrieveResponse as EmployeeRetrieveResponse,
    type EmployeeUpdateResponse as EmployeeUpdateResponse,
    type EmployeeUpdateParams as EmployeeUpdateParams,
  };

  export {
    Enrollments as Enrollments,
    type EnrollmentStatus as EnrollmentStatus,
    type EnrollmentListResponse as EnrollmentListResponse,
    type EnrollmentSubmitElectionsResponse as EnrollmentSubmitElectionsResponse,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentSubmitElectionsParams as EnrollmentSubmitElectionsParams,
  };
}
