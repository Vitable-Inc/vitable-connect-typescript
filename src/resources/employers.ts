// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BenefitEligibilityPoliciesAPI from './benefit-eligibility-policies';
import * as EmployeesAPI from './employees';
import { EmployeesPageNumberPage } from './employees';
import { APIPromise } from '../core/api-promise';
import { PageNumberPage, type PageNumberPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Employers extends APIResource {
  /**
   * Creates a new employer for the authenticated organization. Requires employer
   * name, legal name, EIN, email, and address information. Returns the created
   * employer with its assigned ID.
   *
   * @example
   * ```ts
   * const employerResponse = await client.employers.create({
   *   address: {
   *     address_line_1: '789 Business Blvd',
   *     address_line_2: 'Floor 5',
   *     city: 'Seattle',
   *     state: 'WA',
   *     zipcode: '98101',
   *   },
   *   ein: '12-3456789',
   *   email: 'hr@newco.com',
   *   legal_name: 'NewCo Industries LLC',
   *   name: 'NewCo Industries',
   * });
   * ```
   */
  create(body: EmployerCreateParams, options?: RequestOptions): APIPromise<EmployerResponse> {
    return this._client.post('/v1/employers', { body, ...options });
  }

  /**
   * Retrieves detailed information for a specific employer by ID. The employer must
   * belong to the authenticated organization.
   *
   * @example
   * ```ts
   * const employerResponse = await client.employers.retrieve(
   *   'empr_abc123def456',
   * );
   * ```
   */
  retrieve(employerID: string, options?: RequestOptions): APIPromise<EmployerResponse> {
    return this._client.get(path`/v1/employers/${employerID}`, options);
  }

  /**
   * Retrieves a paginated list of all employers belonging to the authenticated
   * organization. Results are sorted by creation date (newest first) and paginated
   * using page and limit parameters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const employer of client.employers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmployerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmployersPageNumberPage, Employer> {
    return this._client.getAPIList('/v1/employers', PageNumberPage<Employer>, { query, ...options });
  }

  /**
   * Creates a benefit eligibility policy for the specified employer.
   *
   * @example
   * ```ts
   * const benefitEligibilityPolicyResponse =
   *   await client.employers.createBenefitEligibilityPolicy(
   *     'empr_abc123def456',
   *     {
   *       classification: 'classification',
   *       waiting_period: 'waiting_period',
   *     },
   *   );
   * ```
   */
  createBenefitEligibilityPolicy(
    employerID: string,
    body: EmployerCreateBenefitEligibilityPolicyParams,
    options?: RequestOptions,
  ): APIPromise<BenefitEligibilityPoliciesAPI.BenefitEligibilityPolicyResponse> {
    return this._client.post(path`/v1/employers/${employerID}/benefit-eligibility-policies`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a paginated list of all employees for a specific employer. Results are
   * paginated using page and limit parameters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const employee of client.employers.listEmployees(
   *   'empr_abc123def456',
   * )) {
   *   // ...
   * }
   * ```
   */
  listEmployees(
    employerID: string,
    query: EmployerListEmployeesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmployeesPageNumberPage, EmployeesAPI.Employee> {
    return this._client.getAPIList(
      path`/v1/employers/${employerID}/employees`,
      PageNumberPage<EmployeesAPI.Employee>,
      { query, ...options },
    );
  }

  /**
   * Submits a census sync payload for the specified employer. The employees in the
   * payload will be queued for processing. Returns an accepted response with the
   * timestamp of acceptance.
   *
   * @example
   * ```ts
   * const response = await client.employers.submitCensusSync('empr_abc123def456', {
   *   employees: [
   *     {
   *       reference_id: 'EMP-001',
   *       first_name: 'Jane',
   *       last_name: 'Doe',
   *       date_of_birth: '1990-05-15',
   *       email: 'jane.doe@acme.com',
   *       phone: '4155550100',
   *       address: { ... },
   *       start_date: '2024-01-15',
   *       employee_class: 'Full Time',
   *       compensation_type: 'Salary',
   *     },
   *     {
   *       first_name: 'John',
   *       last_name: 'Smith',
   *       date_of_birth: '1985-11-20',
   *       email: 'john.smith@acme.com',
   *       phone: '4155550101',
   *       start_date: '2024-03-01',
   *       employee_class: 'Part Time',
   *       compensation_type: 'Hourly',
   *     },
   *   ],
   * });
   * ```
   */
  submitCensusSync(
    employerID: string,
    body: EmployerSubmitCensusSyncParams,
    options?: RequestOptions,
  ): APIPromise<EmployerSubmitCensusSyncResponse> {
    return this._client.post(path`/v1/employers/${employerID}/census-sync`, { body, ...options });
  }
}

export type EmployersPageNumberPage = PageNumberPage<Employer>;

/**
 * Serializer for Employer entity in public API responses.
 */
export interface Employer {
  /**
   * Unique employer identifier with 'empr\_' prefix
   */
  id: string;

  /**
   * Whether the employer is currently active in the system
   */
  active: boolean;

  /**
   * Nested address within EmployerSerializer.
   */
  address: Employer.Address;

  /**
   * Timestamp when the employer was created
   */
  created_at: string;

  /**
   * Employer Identification Number (masked in responses)
   */
  ein: string | null;

  /**
   * ID of the benefit eligibility policy (epol\_\*), if assigned
   */
  eligibility_policy_id: string | null;

  /**
   * Legal business name for compliance and tax purposes
   */
  legal_name: string;

  /**
   * Display name of the employer
   */
  name: string;

  /**
   * ID of the parent organization (org\_\*)
   */
  organization_id: string | null;

  /**
   * Timestamp when the employer was last updated
   */
  updated_at: string;

  /**
   * Email address for billing and communications
   */
  email?: string | null;

  /**
   * Employer phone number (E.164 format recommended)
   */
  phone_number?: string | null;

  /**
   * Partner-assigned reference ID for the employer
   */
  reference_id?: string | null;
}

export namespace Employer {
  /**
   * Nested address within EmployerSerializer.
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
 * Response containing a single employer resource.
 */
export interface EmployerResponse {
  /**
   * Serializer for Employer entity in public API responses.
   */
  data: Employer;
}

/**
 * Response containing a single census sync detail resource.
 */
export interface EmployerSubmitCensusSyncResponse {
  data: EmployerSubmitCensusSyncResponse.Data;
}

export namespace EmployerSubmitCensusSyncResponse {
  export interface Data {
    accepted_at: string;

    employer_id: string;
  }
}

export interface EmployerCreateParams {
  /**
   * Employer address
   */
  address: EmployerCreateParams.Address;

  /**
   * Employer Identification Number (format: XX-XXXXXXX)
   */
  ein: string;

  /**
   * Email address for billing and communications
   */
  email: string;

  /**
   * Legal business name
   */
  legal_name: string;

  /**
   * Employer display name
   */
  name: string;
}

export namespace EmployerCreateParams {
  /**
   * Employer address
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
     * Two-letter state code
     */
    state: string;

    /**
     * ZIP code
     */
    zipcode: string;

    /**
     * Secondary street address
     */
    address_line_2?: string | null;
  }
}

export interface EmployerListParams extends PageNumberPageParams {}

export interface EmployerCreateBenefitEligibilityPolicyParams {
  /**
   * Which employee classifications are eligible. One of: full_time, part_time, all
   */
  classification: string;

  /**
   * Waiting period before eligibility. One of: first_of_following_month, 30_days,
   * 60_days, none
   */
  waiting_period: string;
}

export interface EmployerListEmployeesParams extends PageNumberPageParams {}

export interface EmployerSubmitCensusSyncParams {
  employees: Array<EmployerSubmitCensusSyncParams.Employee>;
}

export namespace EmployerSubmitCensusSyncParams {
  export interface Employee {
    date_of_birth: string;

    email: string;

    first_name: string;

    last_name: string;

    phone: string;

    address?: Employee.Address | null;

    /**
     * - `Salary` - Salary
     * - `Hourly` - Hourly
     */
    compensation_type?: 'Salary' | 'Hourly' | null;

    /**
     * - `Full Time` - Full Time
     * - `Part Time` - Part Time
     * - `Temporary` - Temporary
     * - `Intern` - Intern
     * - `Seasonal` - Seasonal
     * - `Individual Contractor` - Individual Contractor
     */
    employee_class?: EmployeesAPI.EmployeeClass | null;

    reference_id?: string | null;

    start_date?: string | null;
  }

  export namespace Employee {
    export interface Address {
      address_line_1: string;

      city: string;

      /**
       * - `AL` - AL
       * - `AK` - AK
       * - `AZ` - AZ
       * - `AR` - AR
       * - `CA` - CA
       * - `CO` - CO
       * - `CT` - CT
       * - `DC` - DC
       * - `DE` - DE
       * - `FL` - FL
       * - `GA` - GA
       * - `HI` - HI
       * - `ID` - ID
       * - `IL` - IL
       * - `IN` - IN
       * - `IA` - IA
       * - `KS` - KS
       * - `KY` - KY
       * - `LA` - LA
       * - `ME` - ME
       * - `MD` - MD
       * - `MA` - MA
       * - `MI` - MI
       * - `MN` - MN
       * - `MS` - MS
       * - `MO` - MO
       * - `MT` - MT
       * - `NE` - NE
       * - `NV` - NV
       * - `NH` - NH
       * - `NJ` - NJ
       * - `NM` - NM
       * - `NY` - NY
       * - `NC` - NC
       * - `ND` - ND
       * - `OH` - OH
       * - `OK` - OK
       * - `OR` - OR
       * - `PA` - PA
       * - `RI` - RI
       * - `SC` - SC
       * - `SD` - SD
       * - `TN` - TN
       * - `TX` - TX
       * - `UT` - UT
       * - `VT` - VT
       * - `VA` - VA
       * - `WA` - WA
       * - `WI` - WI
       * - `WV` - WV
       * - `WY` - WY
       * - `PR` - PR
       * - `GU` - GU
       * - `AS` - AS
       * - `VI` - VI
       * - `MP` - MP
       * - `MH` - MH
       * - `PW` - PW
       * - `FM` - FM
       * - `AE` - AE
       * - `AA` - AA
       * - `AP` - AP
       */
      state:
        | 'AL'
        | 'AK'
        | 'AZ'
        | 'AR'
        | 'CA'
        | 'CO'
        | 'CT'
        | 'DC'
        | 'DE'
        | 'FL'
        | 'GA'
        | 'HI'
        | 'ID'
        | 'IL'
        | 'IN'
        | 'IA'
        | 'KS'
        | 'KY'
        | 'LA'
        | 'ME'
        | 'MD'
        | 'MA'
        | 'MI'
        | 'MN'
        | 'MS'
        | 'MO'
        | 'MT'
        | 'NE'
        | 'NV'
        | 'NH'
        | 'NJ'
        | 'NM'
        | 'NY'
        | 'NC'
        | 'ND'
        | 'OH'
        | 'OK'
        | 'OR'
        | 'PA'
        | 'RI'
        | 'SC'
        | 'SD'
        | 'TN'
        | 'TX'
        | 'UT'
        | 'VT'
        | 'VA'
        | 'WA'
        | 'WI'
        | 'WV'
        | 'WY'
        | 'PR'
        | 'GU'
        | 'AS'
        | 'VI'
        | 'MP'
        | 'MH'
        | 'PW'
        | 'FM'
        | 'AE'
        | 'AA'
        | 'AP';

      zipcode: string;

      address_line_2?: string | null;
    }
  }
}

export declare namespace Employers {
  export {
    type Employer as Employer,
    type EmployerResponse as EmployerResponse,
    type EmployerSubmitCensusSyncResponse as EmployerSubmitCensusSyncResponse,
    type EmployersPageNumberPage as EmployersPageNumberPage,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerListParams as EmployerListParams,
    type EmployerCreateBenefitEligibilityPolicyParams as EmployerCreateBenefitEligibilityPolicyParams,
    type EmployerListEmployeesParams as EmployerListEmployeesParams,
    type EmployerSubmitCensusSyncParams as EmployerSubmitCensusSyncParams,
  };
}

export { type EmployeesPageNumberPage };
