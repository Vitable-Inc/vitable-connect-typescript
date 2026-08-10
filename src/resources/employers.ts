// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *   phone_number: '2065550100',
   *   reference_id: 'partner-emp-001',
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
   * Returns the caller's organization book — every employer with its computed
   * columns (enrollment-rate summary, benefit-family tags, HRIS connection,
   * benefit-lifecycle stage) merged with the employer's flat CRM fields (legal name,
   * EIN, contact, address, timestamps). The organization is derived from the
   * authenticated principal. Supports name search, benefit-family/lifecycle/HRIS
   * filters, and page/limit pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const employerListResponse of client.employers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmployerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmployerListResponsesPageNumberPage, EmployerListResponse> {
    return this._client.getAPIList('/v1/employers', PageNumberPage<EmployerListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a paginated list of employees for a specific employer. The caller must
   * be authorized for the employer; an unknown or unauthorized employer returns 404.
   * Results are paginated using page and limit parameters and can be narrowed with a
   * case-insensitive `search` (first name, last name, or email) and an
   * `employment_status` filter (active or terminated). Each employee includes
   * payroll deductions from the most recent statement period. When a new deduction
   * statement is generated, previous period deductions are replaced.
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

  /**
   * Updates configuration settings for a specific employer. The employer must belong
   * to the authenticated organization.
   *
   * @example
   * ```ts
   * const response = await client.employers.updateSettings(
   *   'empr_abc123def456',
   *   { pay_frequency: 'bi_weekly' },
   * );
   * ```
   */
  updateSettings(
    employerID: string,
    body: EmployerUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<EmployerUpdateSettingsResponse> {
    return this._client.put(path`/v1/employers/${employerID}/settings`, { body, ...options });
  }
}

export type EmployerListResponsesPageNumberPage = PageNumberPage<EmployerListResponse>;

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
   * Primary company-admin contact (email + phone; company admins have no person
   * name).
   */
  contact: Employer.Contact | null;

  /**
   * Timestamp when the employer was created
   */
  created_at: string;

  /**
   * Employer Identification Number (masked in responses)
   */
  ein: string | null;

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

  /**
   * Primary company-admin contact (email + phone; company admins have no person
   * name).
   */
  export interface Contact {
    /**
     * Primary contact email
     */
    email: string | null;

    /**
     * Primary contact phone, or null
     */
    phone: string | null;
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
 * One employer row of the organization's book (list projection).
 *
 * Carries the enriched/computed columns (enrollment roll-up, benefit-family tags,
 * HRIS connection, benefit-lifecycle stage) alongside the flat CRM fields of the
 * underlying employer (legal name, EIN, contact, address, timestamps) for parity
 * with the legacy `Employer` contract.
 */
export interface EmployerListResponse {
  /**
   * Whether the employer is currently active in the system.
   */
  active: boolean;

  /**
   * Shared read serializer for a postal address on public API responses.
   *
   * One definition for the address block every public resource emits (employer,
   * employee, …), so the 5-field shape isn't hand-rolled per endpoint. Read-only: it
   * renders an already-built address value object (e.g. `AddressDVO`) whose
   * attributes map 1:1 to these fields.
   */
  address: EmployerListResponse.Address;

  /**
   * Distinct benefit-family tags across the employer's active benefits (e.g. `MEC`,
   * `ICHRA`, `VPC`).
   */
  benefit_families: Array<string>;

  benefit_lifecycle_stage: EmployerListResponse.BenefitLifecycleStage;

  /**
   * Timestamp when the employer was created.
   */
  created_at: string;

  /**
   * Employer Identification Number (masked in responses).
   */
  ein: string | null;

  /**
   * Email address for billing and communications.
   */
  email: string | null;

  /**
   * Prefixed employer identifier (`empr_<base64-encoded-uuid>`).
   */
  employer_id: string;

  /**
   * Enrolled/eligible employees roll-up.
   */
  enrollment_rate_summary: EmployerListResponse.EnrollmentRateSummary;

  /**
   * HRIS connection, or null when the employer has none.
   */
  hris_status: EmployerListResponse.HRISStatus | null;

  /**
   * Legal business name for compliance and tax purposes.
   */
  legal_name: string | null;

  /**
   * Employer name.
   */
  name: string;

  /**
   * ID of the parent organization (`org_*`), or null when unknown.
   */
  organization_id: string | null;

  /**
   * Employer phone number.
   */
  phone_number: string | null;

  /**
   * The organization's own reference id for this employer, or null when none was
   * assigned.
   */
  reference_id: string | null;

  /**
   * Timestamp when the employer was last updated.
   */
  updated_at: string;
}

export namespace EmployerListResponse {
  /**
   * Shared read serializer for a postal address on public API responses.
   *
   * One definition for the address block every public resource emits (employer,
   * employee, …), so the 5-field shape isn't hand-rolled per endpoint. Read-only: it
   * renders an already-built address value object (e.g. `AddressDVO`) whose
   * attributes map 1:1 to these fields.
   */
  export interface Address {
    /**
     * Primary street address.
     */
    address_line_1: string;

    /**
     * Secondary street address (apt, suite, etc.).
     */
    address_line_2: string | null;

    /**
     * City name.
     */
    city: string;

    /**
     * Two-letter state code (e.g. `CA`, `NY`).
     */
    state: string;

    /**
     * ZIP code (5 or 9 digit).
     */
    zipcode: string;
  }

  export interface BenefitLifecycleStage {
    /**
     * Anchor date for the stage (e.g. renewal date); null when not applicable.
     */
    as_of_date: string | null;

    /**
     * Computed employer benefit-lifecycle stage: `open_enrollment`, `renewal`,
     * `active`, `onboarding`, or `cancelled`.
     */
    stage: string;
  }

  /**
   * Enrolled/eligible employees roll-up.
   */
  export interface EnrollmentRateSummary {
    /**
     * Employees eligible for at least one active benefit.
     */
    eligible: number;

    /**
     * Employees enrolled in at least one active benefit.
     */
    enrolled: number;

    /**
     * `enrolled / eligible` as a whole-number percent (0 when none eligible).
     */
    percentage: number;
  }

  /**
   * HRIS connection, or null when the employer has none.
   */
  export interface HRISStatus {
    /**
     * HRIS/payroll provider the employer is connected to (e.g. `Paychex`).
     */
    provider: string;

    /**
     * Connection status reported by the integration.
     */
    status: string;
  }
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

/**
 * Response containing a single employer settings resource.
 */
export interface EmployerUpdateSettingsResponse {
  data: EmployerUpdateSettingsResponse.Data;
}

export namespace EmployerUpdateSettingsResponse {
  export interface Data {
    /**
     * - `weekly` - Weekly
     * - `bi_weekly` - Bi Weekly
     * - `semi_monthly` - Semi Monthly
     * - `monthly` - Monthly
     */
    pay_frequency: 'weekly' | 'bi_weekly' | 'semi_monthly' | 'monthly' | null;
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

  /**
   * Employer phone number (10-digit US format, e.g. 5551234567)
   */
  phone_number?: string | null;

  /**
   * External reference ID for this employer
   */
  reference_id?: string | null;
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

export interface EmployerListParams extends PageNumberPageParams {
  /**
   * Filter to employers with at least one active benefit in these families.
   */
  benefit_family?: Array<'mec' | 'mvp' | 'ichra' | 'vpc' | 'dental' | 'vision'>;

  /**
   * Filter to employers in one of these computed benefit-lifecycle stages.
   */
  benefit_lifecycle_stage?: Array<'open_enrollment' | 'renewal' | 'active' | 'onboarding' | 'cancelled'>;

  /**
   * Filter to employers whose HRIS connection is in one of these statuses.
   */
  hris_status?: Array<'Pending' | 'Active' | 'Inactive' | 'Paused' | 'Terminated'>;

  /**
   * Include cancelled employers (hidden by default unless their stage is explicitly
   * requested).
   */
  include_cancelled?: boolean;

  /**
   * Case-insensitive employer-name substring filter.
   */
  search?: string | null;
}

export interface EmployerListEmployeesParams extends PageNumberPageParams {
  /**
   * Filter by employment status (active or terminated)
   */
  employment_status?: 'active' | 'terminated';

  /**
   * Case-insensitive search across employee first name, last name, and email
   */
  search?: string;
}

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

export interface EmployerUpdateSettingsParams {
  /**
   * - `weekly` - Weekly
   * - `bi_weekly` - Bi Weekly
   * - `semi_monthly` - Semi Monthly
   * - `monthly` - Monthly
   */
  pay_frequency: 'weekly' | 'bi_weekly' | 'semi_monthly' | 'monthly';
}

export declare namespace Employers {
  export {
    type Employer as Employer,
    type EmployerResponse as EmployerResponse,
    type EmployerListResponse as EmployerListResponse,
    type EmployerSubmitCensusSyncResponse as EmployerSubmitCensusSyncResponse,
    type EmployerUpdateSettingsResponse as EmployerUpdateSettingsResponse,
    type EmployerListResponsesPageNumberPage as EmployerListResponsesPageNumberPage,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerListParams as EmployerListParams,
    type EmployerListEmployeesParams as EmployerListEmployeesParams,
    type EmployerSubmitCensusSyncParams as EmployerSubmitCensusSyncParams,
    type EmployerUpdateSettingsParams as EmployerUpdateSettingsParams,
  };
}

export { type EmployeesPageNumberPage };
