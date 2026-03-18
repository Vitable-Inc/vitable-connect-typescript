// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnrollmentsAPI from '../enrollments';
import * as EmployeesEnrollmentsAPI from './enrollments';
import { EnrollmentList, EnrollmentListParams, Enrollments } from './enrollments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage employee records for employers
 */
export class Employees extends APIResource {
  enrollments: EmployeesEnrollmentsAPI.Enrollments = new EmployeesEnrollmentsAPI.Enrollments(this._client);

  /**
   * Retrieves detailed information for a specific employee by ID. Returns employee
   * details including personal information and employment status.
   */
  retrieve(employeeID: string, options?: RequestOptions): APIPromise<EmployeeResponse> {
    return this._client.get(path`/v1/employees/${employeeID}`, options);
  }
}

export interface Employee {
  /**
   * Unique employee identifier with 'empl\_' prefix
   */
  id: string;

  /**
   * Timestamp when the employee was created
   */
  created_at: string;

  /**
   * Date of birth (YYYY-MM-DD)
   */
  date_of_birth: string;

  /**
   * Email address
   */
  email: string;

  /**
   * Benefit enrollments for this employee
   */
  enrollments: Array<Employee.Enrollment>;

  /**
   * Employee's legal first name
   */
  first_name: string;

  /**
   * Employee's legal last name
   */
  last_name: string;

  /**
   * Unique member identifier with 'mbr\_' prefix
   */
  member_id: string;

  /**
   * Employee status (active or terminated)
   */
  status: string;

  /**
   * Timestamp when the employee was last updated
   */
  updated_at: string;

  /**
   * Employee's residential address
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
  employee_class?: EmployeeClass | null;

  /**
   * Gender identity, if provided
   */
  gender?: string | null;

  /**
   * Employee's hire date with the employer
   */
  hire_date?: string | null;

  /**
   * Phone number (10-digit US domestic string)
   */
  phone?: string | null;

  /**
   * Partner-assigned reference ID for the employee
   */
  reference_id?: string | null;

  /**
   * Name suffix (e.g., Jr., Sr., III)
   */
  suffix?: string | null;

  /**
   * Employee's termination date, if terminated
   */
  termination_date?: string | null;
}

export namespace Employee {
  export interface Enrollment {
    /**
     * Unique enrollment identifier with 'enrl\_' prefix
     */
    id: string;

    /**
     * - `pending` - Pending
     * - `enrolled` - Enrolled
     * - `waived` - Waived
     * - `inactive` - Inactive
     */
    status: EnrollmentsAPI.EnrollmentStatus;

    /**
     * Timestamp when the enrollment decision was made
     */
    answered_at?: string | null;
  }

  /**
   * Employee's residential address
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
 * - `Full Time` - Full Time
 * - `Part Time` - Part Time
 * - `Temporary` - Temporary
 * - `Intern` - Intern
 * - `Seasonal` - Seasonal
 * - `Individual Contractor` - Individual Contractor
 */
export type EmployeeClass =
  | 'Full Time'
  | 'Part Time'
  | 'Temporary'
  | 'Intern'
  | 'Seasonal'
  | 'Individual Contractor';

/**
 * Response containing a single employee resource.
 */
export interface EmployeeResponse {
  data: Employee;
}

Employees.Enrollments = Enrollments;

export declare namespace Employees {
  export {
    type Employee as Employee,
    type EmployeeClass as EmployeeClass,
    type EmployeeResponse as EmployeeResponse,
  };

  export {
    Enrollments as Enrollments,
    type EnrollmentList as EnrollmentList,
    type EnrollmentListParams as EnrollmentListParams,
  };
}
