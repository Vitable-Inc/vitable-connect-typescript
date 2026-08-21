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
   * Updates an existing employer. All fields are optional — only provided fields are
   * updated. PO Box addresses are rejected.
   *
   * @example
   * ```ts
   * const employerResponse = await client.employers.update(
   *   'empr_abc123def456',
   * );
   * ```
   */
  update(
    employerID: string,
    body: EmployerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployerResponse> {
    return this._client.put(path`/v1/employers/${employerID}`, { body, ...options });
  }

  /**
   * Returns the caller's employer book — every employer with its computed columns
   * (enrollment-rate summary, benefit-family tags, HRIS connection,
   * benefit-lifecycle stage) merged with the employer's flat CRM fields (legal name,
   * EIN, contact, address, timestamps). The book is derived from the authenticated
   * principal: one organization's employers, or every organization's for a caller
   * whose reach is not a single organization. Supports name search,
   * benefit-family/lifecycle/HRIS filters, and page/limit pagination.
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
   * Provision and return the employer's payroll integration email.
   *
   * @example
   * ```ts
   * const response =
   *   await client.employers.ensurePayrollIntegrationEmail(
   *     'empr_abc123def456',
   *   );
   * ```
   */
  ensurePayrollIntegrationEmail(
    employerID: string,
    options?: RequestOptions,
  ): APIPromise<EmployerEnsurePayrollIntegrationEmailResponse> {
    return this._client.put(path`/v1/employers/${employerID}/payroll-integration-email`, options);
  }

  /**
   * Returns a paginated list of every member with an enrollment in one of an
   * employer's plan years, any election status: what they elected, where their
   * coverage stands, dependent count, carrier, plan, tier, and the plan's total
   * monthly cost. The caller must be authorized for the employer `empr_<...>`; an
   * unknown or unauthorized employer, or an unknown plan year `plyr_<...>`,
   * returns 404.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const employerListBenefitPlanYearEnrollmentsResponse of client.employers.listBenefitPlanYearEnrollments(
   *   'plyr_abc123def456',
   *   { employer_id: 'empr_abc123def456' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listBenefitPlanYearEnrollments(
    benefitPlanYearID: string,
    params: EmployerListBenefitPlanYearEnrollmentsParams,
    options?: RequestOptions,
  ): PagePromise<
    EmployerListBenefitPlanYearEnrollmentsResponsesPageNumberPage,
    EmployerListBenefitPlanYearEnrollmentsResponse
  > {
    const { employer_id, ...query } = params;
    return this._client.getAPIList(
      path`/v1/employers/${employer_id}/benefit-plan-years/${benefitPlanYearID}/enrollments`,
      PageNumberPage<EmployerListBenefitPlanYearEnrollmentsResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns the employer's benefit plan years (all years, or one when `year` is
   * given), each with its benefits, offered states, benefit families, and the
   * year-level enrollment roll-up. The caller must be authorized for the employer;
   * an unknown or unauthorized employer returns 404.
   *
   * @example
   * ```ts
   * const response =
   *   await client.employers.listBenefitPlanYears(
   *     'empr_abc123def456',
   *   );
   * ```
   */
  listBenefitPlanYears(
    employerID: string,
    options?: RequestOptions,
  ): APIPromise<EmployerListBenefitPlanYearsResponse> {
    return this._client.get(path`/v1/employers/${employerID}/benefit-plan-years`, options);
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
   * Returns the distinct HRIS/payroll providers across the same book
   * `GET /v1/employers` returns, sorted for display. Use these as the values for the
   * employers list's `hris_provider` filter — filter on `provider`, show
   * `provider_label`. The stored providers are free text, so they cannot be
   * enumerated in advance.
   *
   * @example
   * ```ts
   * const response = await client.employers.listHRISProviders();
   * ```
   */
  listHRISProviders(options?: RequestOptions): APIPromise<EmployerListHRISProvidersResponse> {
    return this._client.get('/v1/employers/hris-providers', options);
  }

  /**
   * Returns a cursor-paginated page of the employer's billing invoices, newest
   * first. Pass the `next_offset` from a previous page as `offset` to fetch the next
   * page. The caller must be authorized for the employer; an unknown or unauthorized
   * employer returns 404.
   *
   * @example
   * ```ts
   * const response = await client.employers.listInvoices(
   *   'empr_abc123def456',
   * );
   * ```
   */
  listInvoices(
    employerID: string,
    query: EmployerListInvoicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmployerListInvoicesResponse> {
    return this._client.get(path`/v1/employers/${employerID}/invoices`, { query, ...options });
  }

  /**
   * Returns a paginated list of the employer's payroll-deduction statements, newest
   * period first, each with its period, generation date, distinct employee count,
   * total deduction, change-file link, and deduction frequency. Statements
   * superseded by a later correction are excluded. The caller must be authorized for
   * the employer; an unknown or unauthorized employer returns 404.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const employerListPayrollDeductionStatementsResponse of client.employers.listPayrollDeductionStatements(
   *   'empr_abc123def456',
   * )) {
   *   // ...
   * }
   * ```
   */
  listPayrollDeductionStatements(
    employerID: string,
    query: EmployerListPayrollDeductionStatementsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    EmployerListPayrollDeductionStatementsResponsesPageNumberPage,
    EmployerListPayrollDeductionStatementsResponse
  > {
    return this._client.getAPIList(
      path`/v1/employers/${employerID}/payroll-deduction-statements`,
      PageNumberPage<EmployerListPayrollDeductionStatementsResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns one benefit plan year in full — its benefit details plus the per-benefit
   * enrollment rate and SPD link — addressed by its `benefit_plan_year_id`. The
   * caller must be authorized for the employer; an unknown or unauthorized plan year
   * returns 404.
   *
   * @example
   * ```ts
   * const response =
   *   await client.employers.retrieveBenefitPlanYear(
   *     'plyr_abc123def456',
   *     { employer_id: 'empr_abc123def456' },
   *   );
   * ```
   */
  retrieveBenefitPlanYear(
    benefitPlanYearID: string,
    params: EmployerRetrieveBenefitPlanYearParams,
    options?: RequestOptions,
  ): APIPromise<EmployerRetrieveBenefitPlanYearResponse> {
    const { employer_id } = params;
    return this._client.get(
      path`/v1/employers/${employer_id}/benefit-plan-years/${benefitPlanYearID}`,
      options,
    );
  }

  /**
   * Returns the employer's HRIS connection — provider, status, last sync, and synced
   * row count — or null when the employer has no integration. The caller must be
   * authorized for the employer; an unknown or unauthorized employer returns 404.
   *
   * @example
   * ```ts
   * const response = await client.employers.retrieveHRIS(
   *   'empr_abc123def456',
   * );
   * ```
   */
  retrieveHRIS(employerID: string, options?: RequestOptions): APIPromise<EmployerRetrieveHRISResponse> {
    return this._client.get(path`/v1/employers/${employerID}/hris`, options);
  }

  /**
   * Returns the time-limited PDF download link for a single invoice belonging to the
   * employer's billing customer. `invoice_id` is the external Chargebee id (not a
   * prefixed UUID). The caller must be authorized for the employer; an unknown or
   * unauthorized employer or invoice returns 404.
   *
   * @example
   * ```ts
   * const response = await client.employers.retrieveInvoicePdf(
   *   'INV-00042',
   *   { employer_id: 'empr_abc123def456' },
   * );
   * ```
   */
  retrieveInvoicePdf(
    invoiceID: string,
    params: EmployerRetrieveInvoicePdfParams,
    options?: RequestOptions,
  ): APIPromise<EmployerRetrieveInvoicePdfResponse> {
    const { employer_id } = params;
    return this._client.get(path`/v1/employers/${employer_id}/invoices/${invoiceID}/pdf`, options);
  }

  /**
   * Return whether the employer has submitted payroll access setup.
   *
   * @example
   * ```ts
   * const response =
   *   await client.employers.retrievePayrollAccessSetup(
   *     'empr_abc123def456',
   *   );
   * ```
   */
  retrievePayrollAccessSetup(
    employerID: string,
    options?: RequestOptions,
  ): APIPromise<EmployerRetrievePayrollAccessSetupResponse> {
    return this._client.get(path`/v1/employers/${employerID}/payroll-access-setup`, options);
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
   * Submit the employer's payroll access setup answers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.employers.submitPayrollAccessSetup(
   *     'empr_abc123def456',
   *     {
   *       access_method: 'SELF_SETUP',
   *       all_benefit_eligible_employees_present: true,
   *       classifications_accurate: true,
   *       employees_in_payroll_acknowledged: true,
   *       has_additional_payroll_system: true,
   *       is_controlled_group: true,
   *       payroll_data_impacts_eligibility_acknowledged: true,
   *     },
   *   );
   * ```
   */
  submitPayrollAccessSetup(
    employerID: string,
    body: EmployerSubmitPayrollAccessSetupParams,
    options?: RequestOptions,
  ): APIPromise<EmployerSubmitPayrollAccessSetupResponse> {
    return this._client.put(path`/v1/employers/${employerID}/payroll-access-setup`, { body, ...options });
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

export type EmployerListBenefitPlanYearEnrollmentsResponsesPageNumberPage =
  PageNumberPage<EmployerListBenefitPlanYearEnrollmentsResponse>;

export type EmployerListPayrollDeductionStatementsResponsesPageNumberPage =
  PageNumberPage<EmployerListPayrollDeductionStatementsResponse>;

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
     * Id of the HRIS/payroll provider the employer is connected to (e.g. `paylocity`).
     */
    provider: string;

    /**
     * Display name of that provider (e.g. `Paylocity`).
     */
    provider_label: string;

    /**
     * Connection status reported by the integration.
     */
    status: string;
  }
}

/**
 * Response containing a single payroll integration email resource.
 */
export interface EmployerEnsurePayrollIntegrationEmailResponse {
  data: EmployerEnsurePayrollIntegrationEmailResponse.Data;
}

export namespace EmployerEnsurePayrollIntegrationEmailResponse {
  export interface Data {
    integration_email: string;
  }
}

export interface EmployerListBenefitPlanYearEnrollmentsResponse {
  /**
   * The carrier for this enrollment: the individual-market carrier for an ICHRA
   * plan, otherwise the benefit's own. Null when the benefit has no carrier.
   */
  carrier: string | null;

  /**
   * Dependents covered under this enrollment today. Counts the same dependents
   * `premium_in_cents` is priced for, so a dependent whose termination is dated in
   * the future still counts.
   */
  dependent_count: number;

  /**
   * - `Enrolled` - Enrolled
   * - `Waived` - Waived
   * - `Pending` - Pending
   * - `Expired` - Expired
   */
  election_status: 'Enrolled' | 'Waived' | 'Pending' | 'Expired';

  /**
   * What the employee is deducted monthly, in cents: `premium_in_cents` less
   * `employer_contribution_in_cents`, floored at zero. Null when unanswered/waived.
   */
  employee_deduction_in_cents: number | null;

  /**
   * Your own reference id for this employee, as you supplied it. Null when you have
   * not set one.
   */
  employee_external_reference_id: string | null;

  /**
   * Our id for this person's employment with this employer (`empl_<...>`). A person
   * who leaves and is rehired has two.
   */
  employee_id: string;

  /**
   * The employer's monthly share of `premium_in_cents`, in cents. Null when
   * unanswered/waived.
   */
  employer_contribution_in_cents: number | null;

  /**
   * The member's first name.
   */
  member_first_name: string;

  /**
   * Our id for the person (`mbr_<...>`). Stable across every employer they work for.
   */
  member_id: string;

  /**
   * The member's last name.
   */
  member_last_name: string;

  /**
   * Chosen plan name, or null when unanswered/waived.
   */
  plan: string | null;

  /**
   * - `Coverage Upcoming` - Coverage Upcoming
   * - `Coverage Effective` - Coverage Effective
   * - `Coverage Ended` - Coverage Ended
   * - `Cancelled` - Cancelled
   */
  policy_status: 'Coverage Upcoming' | 'Coverage Effective' | 'Coverage Ended' | 'Cancelled' | null;

  /**
   * Monthly premium in cents for the chosen plan, dependents included. The plan's
   * own cost, not the employer's share of it. Null when unanswered/waived.
   */
  premium_in_cents: number | null;

  /**
   * Chosen coverage tier, or null when unanswered/waived.
   */
  tier: string | null;
}

export interface EmployerListBenefitPlanYearsResponse {
  data: Array<EmployerListBenefitPlanYearsResponse.Data>;
}

export namespace EmployerListBenefitPlanYearsResponse {
  /**
   * One plan year, list view.
   *
   * Standalone (no shared base) so the exact list payload is readable in one place;
   * the detail serializer is a separate class even where fields overlap.
   */
  export interface Data {
    /**
     * Prefixed benefit identifier (`bprd_*`).
     */
    benefit_id: string;

    /**
     * Prefixed plan-year identifier (`plyr_*`).
     */
    benefit_plan_year_id: string;

    /**
     * Carrier name, or null (e.g. ICHRA).
     */
    carrier: string | null;

    /**
     * Coverage end.
     */
    coverage_end: string | null;

    /**
     * Coverage start.
     */
    coverage_start: string;

    /**
     * Employee contribution range.
     */
    employee_contribution: Data.EmployeeContribution | null;

    /**
     * Employer contribution range.
     */
    employer_contribution: Data.EmployerContribution | null;

    /**
     * Enrolled/eligible rate for this plan year.
     */
    enrollment_rate: Data.EnrollmentRate;

    /**
     * - `mec` - Mec
     * - `mvp` - Mvp
     * - `ichra` - Ichra
     * - `vpc` - Vpc
     * - `dental` - Dental
     * - `vision` - Vision
     */
    family: 'mec' | 'mvp' | 'ichra' | 'vpc' | 'dental' | 'vision';

    /**
     * Whether this is the current plan year.
     */
    is_current: boolean;

    /**
     * Displayed networks: ["multi"] for ICHRA, otherwise the plan year's distinct
     * network names.
     */
    network_names: Array<string>;

    /**
     * Distinct offered state codes.
     */
    offered_states: Array<string>;

    /**
     * Open-enrollment end.
     */
    open_enrollment_end: string | null;

    /**
     * Open-enrollment start.
     */
    open_enrollment_start: string;

    /**
     * Monthly premium in cents; only for an ICHRA benefit with effective coverage.
     */
    premium_in_cents: number | null;

    /**
     * Benefit/product display name.
     */
    product_name: string;

    /**
     * - `active` - Active
     * - `upcoming` - Upcoming
     * - `open_enrollment` - Open Enrollment
     * - `inactive` - Inactive
     */
    status: 'active' | 'upcoming' | 'open_enrollment' | 'inactive';

    /**
     * Calendar coverage year.
     */
    year: number;
  }

  export namespace Data {
    /**
     * Employee contribution range.
     */
    export interface EmployeeContribution {
      /**
       * Highest per-tier contribution in cents.
       */
      max_cents: number;

      /**
       * Lowest per-tier contribution in cents.
       */
      min_cents: number;
    }

    /**
     * Employer contribution range.
     */
    export interface EmployerContribution {
      /**
       * Highest per-tier contribution in cents.
       */
      max_cents: number;

      /**
       * Lowest per-tier contribution in cents.
       */
      min_cents: number;
    }

    /**
     * Enrolled/eligible rate for this plan year.
     */
    export interface EnrollmentRate {
      /**
       * Employees eligible for this plan year.
       */
      eligible: number;

      /**
       * Employees enrolled in this plan year.
       */
      enrolled: number;

      /**
       * `enrolled / eligible` whole-number percent (0 when none).
       */
      percentage: number;
    }
  }
}

/**
 * Unpaginated `{"data": [...]}` list of organization hris providers.
 */
export interface EmployerListHRISProvidersResponse {
  data: Array<EmployerListHRISProvidersResponse.Data>;
}

export namespace EmployerListHRISProvidersResponse {
  export interface Data {
    /**
     * HRIS/payroll provider id, as stored on the connection (e.g. `adp_run`). Filter
     * with this.
     */
    provider: string;

    /**
     * Display name of that provider (e.g. `ADP Run`).
     */
    provider_label: string;
  }
}

/**
 * Cursor-paginated invoices envelope:
 * `{ "data": [...], "pagination": { "next_offset": ... } }`.
 */
export interface EmployerListInvoicesResponse {
  data: Array<EmployerListInvoicesResponse.Data>;

  pagination: EmployerListInvoicesResponse.Pagination;
}

export namespace EmployerListInvoicesResponse {
  export interface Data {
    /**
     * Chargebee invoice id (external id, not a prefixed UUID).
     */
    invoice_id: string;

    /**
     * Invoice date as an ISO string, or null.
     */
    period: string | null;

    /**
     * Chargebee invoice status (e.g. `paid`), or null.
     */
    status: string | null;

    /**
     * Invoice total in dollars, or null.
     */
    total: number | null;
  }

  export interface Pagination {
    /**
     * Opaque JSON-encoded cursor for the next page; null when there are no more pages.
     */
    next_offset: string | null;
  }
}

/**
 * One payroll-deduction statement row.
 *
 * Reads a :class:`PayrollDeductionStatementDTO` by attribute: the `statement_id`
 * character field renders the prefixed id via `str()`, and the date/datetime
 * fields emit ISO-8601 strings.
 */
export interface EmployerListPayrollDeductionStatementsResponse {
  /**
   * Download link for the change CSV, or null.
   */
  csv_file_url: string | null;

  /**
   * - `weekly` - Weekly
   * - `bi_weekly` - Bi Weekly
   * - `semi_monthly` - Semi Monthly
   * - `monthly` - Monthly
   */
  deduction_frequency: 'weekly' | 'bi_weekly' | 'semi_monthly' | 'monthly';

  /**
   * Human-readable deduction frequency (e.g. `Monthly`).
   */
  deduction_frequency_label: string;

  /**
   * Distinct employees covered by the statement's entries.
   */
  employee_count: number;

  /**
   * Deduction period end date.
   */
  period_end: string;

  /**
   * Deduction period start date.
   */
  period_start: string;

  /**
   * When the statement was generated.
   */
  run_date: string;

  /**
   * Prefixed payroll-deduction-statement identifier (`pstmt_<base64-encoded-uuid>`).
   */
  statement_id: string;

  /**
   * Total payroll deduction for the period, in cents.
   */
  total_deduction_cents: number;
}

/**
 * Response containing a single employer benefit plan year resource.
 */
export interface EmployerRetrieveBenefitPlanYearResponse {
  /**
   * One plan year, detail view.
   *
   * Standalone (no shared base) so the exact detail payload is readable in one
   * place; the list serializer is a separate class even where fields overlap. Detail
   * carries the SPD link and omits the list-only `is_current` flag.
   */
  data: EmployerRetrieveBenefitPlanYearResponse.Data;
}

export namespace EmployerRetrieveBenefitPlanYearResponse {
  /**
   * One plan year, detail view.
   *
   * Standalone (no shared base) so the exact detail payload is readable in one
   * place; the list serializer is a separate class even where fields overlap. Detail
   * carries the SPD link and omits the list-only `is_current` flag.
   */
  export interface Data {
    /**
     * Prefixed benefit identifier (`bprd_*`).
     */
    benefit_id: string;

    /**
     * Prefixed plan-year identifier (`plyr_*`).
     */
    benefit_plan_year_id: string;

    /**
     * Carrier name, or null (e.g. ICHRA).
     */
    carrier: string | null;

    /**
     * How the plan year prices contributions: exactly one collection is populated,
     * determined by the plan year's `family` (ICHRA vs tier-priced).
     */
    contribution_strategy: Data.ContributionStrategy;

    /**
     * Coverage end.
     */
    coverage_end: string | null;

    /**
     * Coverage start.
     */
    coverage_start: string;

    /**
     * The plan year's active eligibility policy. Mirrors the internal
     * `PlanYearEligibilityPolicyDTO` but exposes only the public subset (no raw ids,
     * `active_in`, or timestamps).
     */
    eligibility_policy: Data.EligibilityPolicy | null;

    /**
     * Employee contribution range.
     */
    employee_contribution: Data.EmployeeContribution | null;

    /**
     * Employer contribution range.
     */
    employer_contribution: Data.EmployerContribution | null;

    /**
     * Enrolled/eligible rate for this plan year.
     */
    enrollment_rate: Data.EnrollmentRate;

    /**
     * - `mec` - Mec
     * - `mvp` - Mvp
     * - `ichra` - Ichra
     * - `vpc` - Vpc
     * - `dental` - Dental
     * - `vision` - Vision
     */
    family: 'mec' | 'mvp' | 'ichra' | 'vpc' | 'dental' | 'vision';

    /**
     * Displayed networks: ["multi"] for ICHRA, otherwise the plan year's distinct
     * network names.
     */
    network_names: Array<string>;

    /**
     * Distinct offered state codes.
     */
    offered_states: Array<string>;

    /**
     * Open-enrollment end.
     */
    open_enrollment_end: string | null;

    /**
     * Open-enrollment start.
     */
    open_enrollment_start: string;

    /**
     * Monthly premium in cents; only for an ICHRA benefit with effective coverage.
     */
    premium_in_cents: number | null;

    /**
     * Benefit/product display name.
     */
    product_name: string;

    /**
     * Summary Plan Description (SPD) link, or null.
     */
    spd_file_url: string | null;

    /**
     * - `active` - Active
     * - `upcoming` - Upcoming
     * - `open_enrollment` - Open Enrollment
     * - `inactive` - Inactive
     */
    status: 'active' | 'upcoming' | 'open_enrollment' | 'inactive';

    /**
     * Calendar coverage year.
     */
    year: number;
  }

  export namespace Data {
    /**
     * How the plan year prices contributions: exactly one collection is populated,
     * determined by the plan year's `family` (ICHRA vs tier-priced).
     */
    export interface ContributionStrategy {
      /**
       * Coverage tiers and their costs; empty for ICHRA benefits.
       */
      contribution_tiers: Array<ContributionStrategy.ContributionTier>;

      /**
       * ICHRA contribution classes; empty for tier-priced benefits.
       */
      ichra_contribution_classes: Array<ContributionStrategy.IchraContributionClass>;
    }

    export namespace ContributionStrategy {
      /**
       * One non-ICHRA coverage tier, mirroring the internal configuration
       * `CompanyBenefitPlanTierCostDTO` minus the tier-cost id, `pepm` and
       * `pepm_per_dependent`; `benefit_plan_id` is the prefixed `bpln_*` form rather
       * than a raw UUID.
       */
      export interface ContributionTier {
        /**
         * Prefixed benefit-plan identifier (`bpln_*`).
         */
        benefit_plan_id: string;

        /**
         * Benefit plan name.
         */
        benefit_plan_name: string;

        /**
         * Coverage-tier name.
         */
        benefit_plan_tier_name: string;

        /**
         * Monthly employee deduction in cents.
         */
        cost: number;

        /**
         * Monthly employee deduction per dependent, in cents.
         */
        cost_per_dependent: number;

        /**
         * Whether dependents are required for this tier.
         */
        dependents_required_in: boolean;

        /**
         * Whether a spouse is required for this tier.
         */
        spouse_required_in: boolean;
      }

      /**
       * One ICHRA contribution class, mirroring the internal configuration endpoint's
       * `IchraContributionClassConfigurationEntitySerializer` field-for-field. Two
       * deliberate differences for the public surface: the identifier is the opaque
       * prefixed `iccl_*` form rather than a raw UUID, and the matcher choices come from
       * the domain enums rather than the model's.
       */
      export interface IchraContributionClass {
        /**
         * Monthly allowance in cents.
         */
        amount_in_cents: number;

        /**
         * - `Unspecified` - Unspecified
         * - `Salary` - Salary
         * - `Hourly` - Hourly
         */
        compensation: 'Unspecified' | 'Salary' | 'Hourly';

        /**
         * Prefixed contribution-class identifier (`iccl_*`).
         */
        contribution_class_id: string;

        /**
         * - `Unspecified` - Unspecified
         * - `Full Time` - Full Time
         * - `Part Time` - Part Time
         * - `Temporary` - Temporary
         * - `Seasonal` - Seasonal
         */
        employment: 'Unspecified' | 'Full Time' | 'Part Time' | 'Temporary' | 'Seasonal';

        /**
         * - `Unspecified` - Unspecified
         * - `EE` - Ee
         * - `ES` - Es
         * - `EC` - Ec
         * - `EF` - Ef
         */
        family_status: 'Unspecified' | 'EE' | 'ES' | 'EC' | 'EF';

        /**
         * - `Unspecified` - Unspecified
         * - `State` - State
         */
        location: 'Unspecified' | 'State';

        /**
         * Location matcher value (CSV of state codes), or null.
         */
        location_value: string | null;

        /**
         * Age-band upper bound, or null.
         */
        max_age: number | null;

        /**
         * Age-band lower bound, or null.
         */
        min_age: number | null;
      }
    }

    /**
     * The plan year's active eligibility policy. Mirrors the internal
     * `PlanYearEligibilityPolicyDTO` but exposes only the public subset (no raw ids,
     * `active_in`, or timestamps).
     */
    export interface EligibilityPolicy {
      /**
       * Eligibility rules; never empty for a valid policy.
       */
      rules: Array<EligibilityPolicy.Rule>;

      /**
       * Months of continued coverage; set only when `termination_rule` is
       * `END_OF_N_MONTHS`.
       */
      termination_n_months: number | null;

      /**
       * - `END_OF_N_MONTHS` - End Of N Months
       * - `END_OF_PLAN_YEAR` - End Of Plan Year
       */
      termination_rule: 'END_OF_N_MONTHS' | 'END_OF_PLAN_YEAR';

      /**
       * - `FIRST_OF_FOLLOWING_MONTH` - First Of Following Month
       * - `THIRTY_DAYS` - Thirty Days
       * - `SIXTY_DAYS` - Sixty Days
       */
      waiting_period: 'FIRST_OF_FOLLOWING_MONTH' | 'THIRTY_DAYS' | 'SIXTY_DAYS' | null;
    }

    export namespace EligibilityPolicy {
      /**
       * One eligibility rule — the workforce slice it makes eligible. Mirrors the
       * internal `PlanYearEligibilityPolicyRuleDTO` minus the raw ids and timestamps.
       */
      export interface Rule {
        /**
         * - `Salary` - Salary
         * - `Hourly` - Hourly
         * - `All` - All
         */
        compensation_type: 'Salary' | 'Hourly' | 'All';

        /**
         * Geographic matcher.
         */
        eligible_geographical_location: Rule.EligibleGeographicalLocation;

        /**
         * - `Full Time` - Full Time
         * - `Part Time` - Part Time
         * - `Temporary` - Temporary
         * - `Intern` - Intern
         * - `Seasonal` - Seasonal
         * - `Individual Contractor` - Individual Contractor
         * - `All` - All
         */
        employee_class:
          | 'Full Time'
          | 'Part Time'
          | 'Temporary'
          | 'Intern'
          | 'Seasonal'
          | 'Individual Contractor'
          | 'All';
      }

      export namespace Rule {
        /**
         * Geographic matcher.
         */
        export interface EligibleGeographicalLocation {
          /**
           * States the rule is restricted to; empty when `type` is `All`.
           */
          state_codes: Array<string>;

          /**
           * - `All` - All
           * - `StateCodes` - State Codes
           */
          type: 'All' | 'StateCodes';
        }
      }
    }

    /**
     * Employee contribution range.
     */
    export interface EmployeeContribution {
      /**
       * Highest per-tier contribution in cents.
       */
      max_cents: number;

      /**
       * Lowest per-tier contribution in cents.
       */
      min_cents: number;
    }

    /**
     * Employer contribution range.
     */
    export interface EmployerContribution {
      /**
       * Highest per-tier contribution in cents.
       */
      max_cents: number;

      /**
       * Lowest per-tier contribution in cents.
       */
      min_cents: number;
    }

    /**
     * Enrolled/eligible rate for this plan year.
     */
    export interface EnrollmentRate {
      /**
       * Employees eligible for this plan year.
       */
      eligible: number;

      /**
       * Employees enrolled in this plan year.
       */
      enrolled: number;

      /**
       * `enrolled / eligible` whole-number percent (0 when none).
       */
      percentage: number;
    }
  }
}

/**
 * Response containing a single employer hris resource.
 */
export interface EmployerRetrieveHRISResponse {
  data: EmployerRetrieveHRISResponse.Data;
}

export namespace EmployerRetrieveHRISResponse {
  export interface Data {
    /**
     * HRIS connection details, or null when the employer has no integration.
     */
    hris: Data.HRIS | null;
  }

  export namespace Data {
    /**
     * HRIS connection details, or null when the employer has no integration.
     */
    export interface HRIS {
      /**
       * When the last sync completed, or null when none has.
       */
      last_sync_on: string | null;

      /**
       * Id of the HRIS/payroll provider the employer is connected to (e.g. `paylocity`).
       */
      provider: string;

      /**
       * Display name of that provider (e.g. `Paylocity`).
       */
      provider_label: string;

      /**
       * Connection status reported by the integration.
       */
      status: string;

      /**
       * Rows in the latest completed sync, or null when none has.
       */
      synced_row_count: number | null;
    }
  }
}

/**
 * Response containing a single employer invoice pdf resource.
 */
export interface EmployerRetrieveInvoicePdfResponse {
  data: EmployerRetrieveInvoicePdfResponse.Data;
}

export namespace EmployerRetrieveInvoicePdfResponse {
  export interface Data {
    /**
     * Time-limited Chargebee PDF download link for the invoice.
     */
    download_url: string;
  }
}

/**
 * Response containing a single payroll access setup status resource.
 */
export interface EmployerRetrievePayrollAccessSetupResponse {
  data: EmployerRetrievePayrollAccessSetupResponse.Data;
}

export namespace EmployerRetrievePayrollAccessSetupResponse {
  export interface Data {
    completed: boolean;

    submitted_at: string | null;
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
 * Response containing a single payroll access setup status resource.
 */
export interface EmployerSubmitPayrollAccessSetupResponse {
  data: EmployerSubmitPayrollAccessSetupResponse.Data;
}

export namespace EmployerSubmitPayrollAccessSetupResponse {
  export interface Data {
    completed: boolean;

    submitted_at: string | null;
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

export interface EmployerUpdateParams {
  /**
   * Whether the employer is active
   */
  active?: boolean | null;

  /**
   * Employer address
   */
  address?: EmployerUpdateParams.Address | null;

  /**
   * Legal business name
   */
  legal_name?: string | null;

  /**
   * Employer display name
   */
  name?: string | null;
}

export namespace EmployerUpdateParams {
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
   * Filter to employers whose HRIS connection is with one of these payroll providers
   * (e.g. `ADP RUN`). Matched case-insensitively; free text, so read the available
   * values from the HRIS-providers endpoint rather than assuming a fixed set.
   */
  hris_provider?: Array<string>;

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

export interface EmployerListBenefitPlanYearEnrollmentsParams extends PageNumberPageParams {
  /**
   * Path param: Unique employer identifier (empr\_\*)
   */
  employer_id: string;

  /**
   * Query param: Filter by election status. Repeat the parameter to match several.
   */
  election_status?: Array<'Enrolled' | 'Expired' | 'Pending' | 'Waived'>;

  /**
   * Query param: Case-insensitive search. Matches member name partially, and the
   * `member_id` exactly — either your own reference id or the prefixed
   * `grpmbr_<...>` id.
   */
  search?: string;
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

export interface EmployerListInvoicesParams {
  /**
   * Maximum number of invoices per page
   */
  limit?: number;

  /**
   * Opaque cursor from a previous page's next_offset
   */
  offset?: string | null;
}

export interface EmployerListPayrollDeductionStatementsParams extends PageNumberPageParams {}

export interface EmployerRetrieveBenefitPlanYearParams {
  /**
   * Unique employer identifier (empr\_\*)
   */
  employer_id: string;
}

export interface EmployerRetrieveInvoicePdfParams {
  /**
   * Unique employer identifier (empr\_\*)
   */
  employer_id: string;
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

    /**
     * Phone number
     */
    phone?: string | null;

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

export interface EmployerSubmitPayrollAccessSetupParams {
  /**
   * - `SELF_SETUP` - SELF_SETUP
   * - `NEEDS_HELP` - NEEDS_HELP
   */
  access_method: 'SELF_SETUP' | 'NEEDS_HELP';

  all_benefit_eligible_employees_present: boolean;

  classifications_accurate: boolean;

  employees_in_payroll_acknowledged: boolean;

  has_additional_payroll_system: boolean;

  is_controlled_group: boolean;

  payroll_data_impacts_eligibility_acknowledged: boolean;

  /**
   * - `SELF_SETUP` - SELF_SETUP
   * - `NEEDS_HELP` - NEEDS_HELP
   */
  additional_access_method?: 'SELF_SETUP' | 'NEEDS_HELP' | null;

  additional_integration_confirmed?: boolean | null;

  additional_login_url?: string | null;

  additional_password?: string | null;

  additional_phone?: string | null;

  additional_username?: string | null;

  /**
   * - `ENTER_NAMES` - ENTER_NAMES
   * - `EMAIL_LIST` - EMAIL_LIST
   */
  classification_correction_source?: 'ENTER_NAMES' | 'EMAIL_LIST' | null;

  integration_confirmed?: boolean | null;

  login_url?: string | null;

  misclassified_employee_names?: Array<string>;

  /**
   * - `EMAIL_CENSUS` - EMAIL_CENSUS
   * - `SECOND_SYSTEM_ACCESS` - SECOND_SYSTEM_ACCESS
   */
  missing_employee_resolution?: 'EMAIL_CENSUS' | 'SECOND_SYSTEM_ACCESS' | null;

  password?: string | null;

  phone?: string | null;

  /**
   * - `VITABLE_UPDATE` - VITABLE_UPDATE
   * - `EMPLOYER_UPDATE` - EMPLOYER_UPDATE
   */
  remaining_employee_action?: 'VITABLE_UPDATE' | 'EMPLOYER_UPDATE' | null;

  same_payroll_covers_other_eins?: boolean | null;

  username?: string | null;
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
    type EmployerEnsurePayrollIntegrationEmailResponse as EmployerEnsurePayrollIntegrationEmailResponse,
    type EmployerListBenefitPlanYearEnrollmentsResponse as EmployerListBenefitPlanYearEnrollmentsResponse,
    type EmployerListBenefitPlanYearsResponse as EmployerListBenefitPlanYearsResponse,
    type EmployerListHRISProvidersResponse as EmployerListHRISProvidersResponse,
    type EmployerListInvoicesResponse as EmployerListInvoicesResponse,
    type EmployerListPayrollDeductionStatementsResponse as EmployerListPayrollDeductionStatementsResponse,
    type EmployerRetrieveBenefitPlanYearResponse as EmployerRetrieveBenefitPlanYearResponse,
    type EmployerRetrieveHRISResponse as EmployerRetrieveHRISResponse,
    type EmployerRetrieveInvoicePdfResponse as EmployerRetrieveInvoicePdfResponse,
    type EmployerRetrievePayrollAccessSetupResponse as EmployerRetrievePayrollAccessSetupResponse,
    type EmployerSubmitCensusSyncResponse as EmployerSubmitCensusSyncResponse,
    type EmployerSubmitPayrollAccessSetupResponse as EmployerSubmitPayrollAccessSetupResponse,
    type EmployerUpdateSettingsResponse as EmployerUpdateSettingsResponse,
    type EmployerListResponsesPageNumberPage as EmployerListResponsesPageNumberPage,
    type EmployerListBenefitPlanYearEnrollmentsResponsesPageNumberPage as EmployerListBenefitPlanYearEnrollmentsResponsesPageNumberPage,
    type EmployerListPayrollDeductionStatementsResponsesPageNumberPage as EmployerListPayrollDeductionStatementsResponsesPageNumberPage,
    type EmployerCreateParams as EmployerCreateParams,
    type EmployerUpdateParams as EmployerUpdateParams,
    type EmployerListParams as EmployerListParams,
    type EmployerListBenefitPlanYearEnrollmentsParams as EmployerListBenefitPlanYearEnrollmentsParams,
    type EmployerListEmployeesParams as EmployerListEmployeesParams,
    type EmployerListInvoicesParams as EmployerListInvoicesParams,
    type EmployerListPayrollDeductionStatementsParams as EmployerListPayrollDeductionStatementsParams,
    type EmployerRetrieveBenefitPlanYearParams as EmployerRetrieveBenefitPlanYearParams,
    type EmployerRetrieveInvoicePdfParams as EmployerRetrieveInvoicePdfParams,
    type EmployerSubmitCensusSyncParams as EmployerSubmitCensusSyncParams,
    type EmployerSubmitPayrollAccessSetupParams as EmployerSubmitPayrollAccessSetupParams,
    type EmployerUpdateSettingsParams as EmployerUpdateSettingsParams,
  };
}

export { type EmployeesPageNumberPage };
