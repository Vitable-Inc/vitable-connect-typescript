// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EmployeesAPI from './employees';
import { APIPromise } from '../core/api-promise';
import { PageNumberPage, type PageNumberPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Browse the members covered across your book and read a member's profile
 */
export class Members extends APIResource {
  /**
   * Retrieves a member's profile by ID — identity, demographics, address, contact
   * details, tobacco status, and profile status. Access is scoped to the
   * authenticated principal; a member not visible to the caller returns a 404.
   */
  retrieve(memberID: string, options?: RequestOptions): APIPromise<MemberRetrieveResponse> {
    return this._client.get(path`/v1/members/${memberID}`, options);
  }

  /**
   * Retrieves a paginated list of the members in the authenticated organization's
   * book — identity, contact details, and address. The book covers members reached
   * through an employer in the organization's book as well as members of a group it
   * owns. Supports free-text search (name, email, or exact member id).
   */
  list(
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MemberListResponsesPageNumberPage, MemberListResponse> {
    return this._client.getAPIList('/v2/members', PageNumberPage<MemberListResponse>, { query, ...options });
  }

  /**
   * Lists a member's active legal dependents — name, relationship, date of birth,
   * age, and sex at birth. Access is scoped to the authenticated principal; a member
   * not visible to the caller returns a 404.
   */
  listDependents(memberID: string, options?: RequestOptions): APIPromise<MemberListDependentsResponse> {
    return this._client.get(path`/v1/members/${memberID}/dependents`, options);
  }

  /**
   * Lists a member's employment across every employer — the same employee record
   * shape as the employer's employees list, plus the employer name. For an
   * organization caller the rows are scoped to companies in that organization's
   * book; a member (self/household) or Vitable Admin sees all employments. A member
   * not visible to the caller returns a 404.
   */
  listEmployments(memberID: string, options?: RequestOptions): APIPromise<MemberListEmploymentsResponse> {
    return this._client.get(path`/v1/members/${memberID}/employments`, options);
  }

  /**
   * Lists a member's benefit enrollments across every employer — benefit type and
   * product, employer, carrier, plan, tier, employee deduction, employer
   * contribution and total premium, the individual enrollment coverage boundary
   * (`coverage_end`), the distinct benefit plan-year boundary
   * (`plan_year_coverage_end`) used to determine whether the plan year itself has
   * ended, whether a qualifying life event would currently be required for reissue
   * under the product/open-enrollment rule, enrollment/open-enrollment window, and
   * two statuses: `election_status` (what the member answered) and `policy_status`
   * (what became of their coverage, null unless they enrolled). Every row includes a
   * stable enrollment ID that can be used to target enrollment actions. The full
   * list is returned across all states so the client derives active plans (effective
   * and upcoming) and the enrollment history from those per-row statuses. For an
   * organization caller the rows are scoped to companies in that organization's
   * book; a member (self/household) or Vitable Admin sees all enrollments. A member
   * not visible to the caller returns a 404.
   */
  listEnrollments(memberID: string, options?: RequestOptions): APIPromise<MemberListEnrollmentsResponse> {
    return this._client.get(path`/v1/members/${memberID}/enrollments`, options);
  }

  /**
   * Lists a member's benefit ID cards — card type (medical, dental, vision, or rx),
   * employer, plan, provider network, claims payer, carrier contact details, and the
   * disclaimers printed on the card. Medical, dental and vision cards come from the
   * member's active digital benefit cards; the rx card from the member's Ventegra
   * pharmacy benefit (omitted when the member has no free-medication coverage),
   * which carries no plan, network, or carrier details. Access is scoped to the
   * authenticated principal, and an organization caller sees only cards from
   * employers in its book; a member not visible to the caller returns a 404.
   */
  listIDCards(memberID: string, options?: RequestOptions): APIPromise<MemberListIDCardsResponse> {
    return this._client.get(path`/v1/members/${memberID}/id-cards`, options);
  }

  /**
   * Lists a member's qualifying life events, including events already used for
   * another enrollment. Returns all statuses by default; pass the status query param
   * to filter to one (e.g. approved). Events are ordered newest submission first
   * with stable paging. Custom text is present only when submitted and is otherwise
   * null. A member not visible to the caller returns a 404. API keys and unbound
   * access tokens have organization-wide access. Employer-bound tokens require
   * employment at the bound employer, and employee-bound tokens require the exact
   * employee-member relationship. Organization or scope mismatches return a 404
   * before pagination is validated.
   */
  listQualifyingLifeEvents(
    memberID: string,
    query: MemberListQualifyingLifeEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    MemberListQualifyingLifeEventsResponsesPageNumberPage,
    MemberListQualifyingLifeEventsResponse
  > {
    return this._client.getAPIList(
      path`/v1/members/${memberID}/qualifying-life-events`,
      PageNumberPage<MemberListQualifyingLifeEventsResponse>,
      { query, ...options },
    );
  }

  /**
   * Lists a member's household as a per-participant table — the account holder plus
   * each active household member, with name, relationship, member type, date of
   * birth, and household-admin flag. Access is scoped to the authenticated
   * principal; a member not visible to the caller (or with no household) returns
   * a 404.
   */
  retrieveHousehold(memberID: string, options?: RequestOptions): APIPromise<MemberRetrieveHouseholdResponse> {
    return this._client.get(path`/v1/members/${memberID}/household`, options);
  }
}

export type MemberListResponsesPageNumberPage = PageNumberPage<MemberListResponse>;

export type MemberListQualifyingLifeEventsResponsesPageNumberPage =
  PageNumberPage<MemberListQualifyingLifeEventsResponse>;

/**
 * Response containing a single member resource.
 */
export interface MemberRetrieveResponse {
  /**
   * A member's profile: identity, contact details, address, demographics, and
   * onboarding status.
   */
  data: MemberRetrieveResponse.Data;
}

export namespace MemberRetrieveResponse {
  /**
   * A member's profile: identity, contact details, address, demographics, and
   * onboarding status.
   */
  export interface Data {
    /**
     * Unique member identifier with 'mbr\_' prefix
     */
    id: string;

    /**
     * Member's age in years, derived from date of birth
     */
    age: number;

    /**
     * Date of birth (YYYY-MM-DD)
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
     * Member's full name
     */
    name: string;

    /**
     * Member profile status (onboarded or pending onboarding)
     */
    status: 'onboarded' | 'pending_onboarding';

    /**
     * Member's residential address
     */
    address?: Data.Address | null;

    /**
     * Email address
     */
    email?: string | null;

    /**
     * Phone number (10-digit US domestic string)
     */
    phone?: string | null;

    /**
     * Member's preferred language code (e.g., en, es)
     */
    preferred_language?: string | null;

    /**
     * Sex assigned at birth, if provided
     */
    sex_at_birth?: string | null;

    /**
     * Whether the member uses tobacco, if known
     */
    tobacco_status?: boolean | null;
  }

  export namespace Data {
    /**
     * Member's residential address
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
}

/**
 * A member in the organization's directory: identity, contact details, address,
 * and join date.
 */
export interface MemberListResponse {
  /**
   * Unique member identifier with 'mbr\_' prefix
   */
  id: string;

  /**
   * Member's legal first name
   */
  first_name: string;

  /**
   * Member's legal last name
   */
  last_name: string;

  /**
   * Member's residential address
   */
  address?: MemberListResponse.Address | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * Phone number (10-digit US domestic string)
   */
  phone?: string | null;
}

export namespace MemberListResponse {
  /**
   * Member's residential address
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
 * Unpaginated `{"data": [...]}` list of member dependents.
 */
export interface MemberListDependentsResponse {
  data: Array<MemberListDependentsResponse.Data>;
}

export namespace MemberListDependentsResponse {
  /**
   * Wire serializer for :class:`MemberLegalDependentDTO` (one legal-dependent row).
   */
  export interface Data {
    /**
     * Dependent's age in years, derived from date of birth
     */
    age: number;

    /**
     * Date of birth (YYYY-MM-DD)
     */
    date_of_birth: string;

    /**
     * Dependent's first name
     */
    first_name: string;

    /**
     * Dependent's last name
     */
    last_name: string;

    /**
     * The dependent's own member identifier with 'mbr\_' prefix
     */
    member_id: string;

    /**
     * The primary member's identifier with 'mbr\_' prefix
     */
    primary_member_id: string;

    /**
     * - `Spouse` - Spouse
     * - `Child` - Child
     */
    relationship: 'Spouse' | 'Child';

    /**
     * - `Male` - Male
     * - `Female` - Female
     * - `Other` - Other
     * - `Unknown` - Unknown
     */
    sex_at_birth?: 'Male' | 'Female' | 'Other' | 'Unknown' | null;
  }
}

/**
 * Unpaginated `{"data": [...]}` list of member employments.
 */
export interface MemberListEmploymentsResponse {
  data: Array<EmployeesAPI.Employee>;
}

/**
 * Unpaginated `{"data": [...]}` list of member enrollments.
 */
export interface MemberListEnrollmentsResponse {
  data: Array<MemberListEnrollmentsResponse.Data>;
}

export namespace MemberListEnrollmentsResponse {
  /**
   * Wire serializer for :class:`MemberEnrollmentDTO` (one benefit enrollment row).
   */
  export interface Data {
    /**
     * Opaque, stable enrollment identifier used to target enrollment actions
     */
    id: string;

    /**
     * - `Medical` - Medical
     * - `Dental` - Dental
     * - `Vision` - Vision
     * - `Hospital` - Hospital
     */
    benefit_type: 'Medical' | 'Dental' | 'Vision' | 'Hospital';

    /**
     * - `Enrolled` - Enrolled
     * - `Waived` - Waived
     * - `Pending` - Pending
     * - `Expired` - Expired
     */
    election_status: 'Enrolled' | 'Waived' | 'Pending' | 'Expired';

    /**
     * Name of the employer the enrollment is through
     */
    employer_name: string;

    /**
     * Enrollment / open-enrollment window start date (YYYY-MM-DD)
     */
    enrollment_window_start: string;

    /**
     * True when today falls in the final month of the plan-year coverage window;
     * drives end-of-coverage enrollment actions on the client.
     */
    in_last_month_of_coverage: boolean;

    /**
     * True when today falls inside the enrollment window this member has to answer in;
     * drives enrollment-action availability on the client.
     */
    is_within_enrollment_window: boolean;

    /**
     * Benefit plan-year coverage end date (YYYY-MM-DD), distinct from this
     * enrollment's coverage_end; null when the plan year is open-ended
     */
    plan_year_coverage_end: string | null;

    /**
     * - `Coverage Upcoming` - Coverage Upcoming
     * - `Coverage Effective` - Coverage Effective
     * - `Coverage Ended` - Coverage Ended
     */
    policy_status: 'Coverage Upcoming' | 'Coverage Effective' | 'Coverage Ended' | null;

    /**
     * - `EBA` - Eba Mec
     * - `VPC` - Vpc Enhanced
     * - `VPC_CORE` - Vpc Core
     * - `MEC` - Vpc Mec
     * - `MEC2` - Mec2
     * - `MEC_PLUS` - Mec Plus
     * - `MVP` - Mvp
     * - `MVP2` - Mvp2
     * - `MVPSL` - Mvpsl
     * - `MVPSL2` - Mvpsl2
     * - `VD` - Dental
     * - `VV` - Vision
     * - `ICHRA` - Ichra
     * - `ICHRA_PREMIUM_PLUS` - Ichra Premium Plus
     * - `ICHRA_REIMBURSEMENT_ONLY` - Ichra Reimbursement Only
     */
    product_code:
      | 'EBA'
      | 'VPC'
      | 'VPC_CORE'
      | 'MEC'
      | 'MEC2'
      | 'MEC_PLUS'
      | 'MVP'
      | 'MVP2'
      | 'MVPSL'
      | 'MVPSL2'
      | 'VD'
      | 'VV'
      | 'ICHRA'
      | 'ICHRA_PREMIUM_PLUS'
      | 'ICHRA_REIMBURSEMENT_ONLY';

    /**
     * Display name of the benefit product
     */
    product_name: string;

    /**
     * Whether a qualifying life event would be required to reissue this enrollment
     * under the product and open-enrollment rule at the time this list was read
     */
    requires_qle_for_reissue: boolean;

    /**
     * Insurance carrier name; null when no active carrier period is resolvable
     */
    carrier_name?: string | null;

    /**
     * Coverage window end date (YYYY-MM-DD); null while coverage is open-ended
     */
    coverage_end?: string | null;

    /**
     * Coverage window start date (YYYY-MM-DD)
     */
    coverage_start?: string | null;

    /**
     * Employee monthly payroll deduction in cents; null unless the row is an election
     */
    employee_deduction_in_cents?: number | null;

    /**
     * Employer monthly contribution in cents; null unless the row is an election
     */
    employer_contribution_in_cents?: number | null;

    /**
     * Enrollment / open-enrollment window end date (YYYY-MM-DD); null when open-ended
     */
    enrollment_window_end?: string | null;

    /**
     * Chosen benefit plan name; null unless the row is an election
     */
    plan_name?: string | null;

    /**
     * Total monthly plan premium in cents; null unless the row is an election
     */
    premium_in_cents?: number | null;

    /**
     * Chosen benefit plan tier name (e.g., Employee Only); null unless the row is an
     * election
     */
    tier_name?: string | null;
  }
}

/**
 * Unpaginated `{"data": [...]}` list of member digital benefit cards.
 */
export interface MemberListIDCardsResponse {
  data: Array<MemberListIDCardsResponse.Data>;
}

export namespace MemberListIDCardsResponse {
  /**
   * Wire serializer for :class:`DigitalBenefitCardDTO` (one benefit ID card).
   */
  export interface Data {
    /**
     * - `medical` - medical
     * - `dental` - dental
     * - `vision` - vision
     * - `rx` - rx
     */
    card_type: 'medical' | 'dental' | 'vision' | 'rx';

    /**
     * Group number printed on the card (the rx group id for an rx card)
     */
    group_id: string;

    /**
     * Member id printed on the card (the Ventegra cardholder id for an rx card)
     */
    group_member_id: string;

    /**
     * Name of the member the card is issued to
     */
    member_name: string;

    /**
     * No Surprises Act cost-sharing table rendered on the card; empty for an rx card
     */
    nsa_table: Array<Array<string>>;

    /**
     * - `EBA` - Eba Mec
     * - `VPC` - Vpc Enhanced
     * - `VPC_CORE` - Vpc Core
     * - `MEC` - Vpc Mec
     * - `MEC2` - Mec2
     * - `MEC_PLUS` - Mec Plus
     * - `MVP` - Mvp
     * - `MVP2` - Mvp2
     * - `MVPSL` - Mvpsl
     * - `MVPSL2` - Mvpsl2
     * - `VD` - Dental
     * - `VV` - Vision
     * - `ICHRA` - Ichra
     * - `ICHRA_PREMIUM_PLUS` - Ichra Premium Plus
     * - `ICHRA_REIMBURSEMENT_ONLY` - Ichra Reimbursement Only
     */
    benefit_code?:
      | 'EBA'
      | 'VPC'
      | 'VPC_CORE'
      | 'MEC'
      | 'MEC2'
      | 'MEC_PLUS'
      | 'MVP'
      | 'MVP2'
      | 'MVPSL'
      | 'MVPSL2'
      | 'VD'
      | 'VV'
      | 'ICHRA'
      | 'ICHRA_PREMIUM_PLUS'
      | 'ICHRA_REIMBURSEMENT_ONLY'
      | null;

    /**
     * Carrier phone number on the card; null for an rx card
     */
    carrier_phone?: string | null;

    /**
     * Carrier website on the card; null for an rx card
     */
    carrier_website?: string | null;

    /**
     * Claims payer shown on the card
     */
    claims_payer_display_name?: string | null;

    /**
     * Employer the card's coverage is through; null for an rx card without group info
     */
    employer_name?: string | null;

    /**
     * General disclaimer text; null for an rx card
     */
    general_disclaimer?: string | null;

    /**
     * Provider network shown on the card; null for an rx card
     */
    network?: Data.Network | null;

    /**
     * Plan-specific disclaimer text; null for an rx card
     */
    plan_disclaimer?: string | null;

    /**
     * Benefit plan name on the card; null for a consumer-membership rx card
     */
    plan_name?: string | null;
  }

  export namespace Data {
    /**
     * Provider network shown on the card; null for an rx card
     */
    export interface Network {
      id: string;

      /**
       * Shared read serializer for a postal address on public API responses.
       *
       * One definition for the address block every public resource emits (employer,
       * employee, …), so the 5-field shape isn't hand-rolled per endpoint. Read-only: it
       * renders an already-built address value object (e.g. `AddressDVO`) whose
       * attributes map 1:1 to these fields.
       */
      address: Network.Address;

      logo: string | null;

      member_phone: string | null;

      /**
       * Name of the network
       */
      name: string;

      phone: string;

      provider_phone: string | null;

      /**
       * Website of the network
       */
      website: string;

      /**
       * Network's EDI
       */
      edi?: string | null;

      /**
       * Website for members
       */
      member_website?: string | null;

      /**
       * Website for providers
       */
      provider_website?: string | null;
    }

    export namespace Network {
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
    }
  }
}

export interface MemberListQualifyingLifeEventsResponse {
  /**
   * Opaque qualifying life event identifier
   */
  id: string;

  /**
   * - `Married` - Married
   * - `Divorced` - Divorced
   * - `New child` - New Child
   * - `Court ordered` - Court Ordered
   * - `Other` - Other
   */
  event_type: 'Married' | 'Divorced' | 'New child' | 'Court ordered' | 'Other';

  /**
   * Custom event description when event_type is Other; otherwise normally null
   */
  other_event: string | null;

  /**
   * - `pending` - Pending
   * - `approved` - Approved
   * - `denied` - Denied
   */
  status: 'pending' | 'approved' | 'denied';

  /**
   * When the member submitted the event
   */
  submitted_at: string;
}

/**
 * Unpaginated `{"data": [...]}` list of the members of a member's household.
 */
export interface MemberRetrieveHouseholdResponse {
  data: Array<MemberRetrieveHouseholdResponse.Data>;
}

export namespace MemberRetrieveHouseholdResponse {
  /**
   * Wire serializer for :class:`HouseholdMemberDTO` (one household participant).
   */
  export interface Data {
    /**
     * Date of birth (YYYY-MM-DD)
     */
    date_of_birth: string;

    /**
     * Household member's first name
     */
    first_name: string;

    /**
     * Whether this participant is a household admin (the account holder always is)
     */
    household_admin_in: boolean;

    /**
     * Household member's last name
     */
    last_name: string;

    /**
     * Member identifier with 'mbr\_' prefix
     */
    member_id: string;

    /**
     * - `Account Holder` - Account Holder
     * - `Dependent` - Dependent
     * - `Inactive` - Inactive
     */
    member_type: 'Account Holder' | 'Dependent' | 'Inactive';

    /**
     * - `Child` - Child
     * - `Spouse` - Spouse
     * - `Roommate` - Roommate
     * - `Other` - Other
     */
    relationship?: 'Child' | 'Spouse' | 'Roommate' | 'Other' | null;
  }
}

export interface MemberListParams extends PageNumberPageParams {
  /**
   * Case-insensitive search across member name and email; exact match on member id
   */
  search?: string;
}

export interface MemberListQualifyingLifeEventsParams extends PageNumberPageParams {
  /**
   * Optional. Filter to a single QLE status; omit to return all statuses.
   */
  status?: 'approved' | 'denied' | 'pending';
}

export declare namespace Members {
  export {
    type MemberRetrieveResponse as MemberRetrieveResponse,
    type MemberListResponse as MemberListResponse,
    type MemberListDependentsResponse as MemberListDependentsResponse,
    type MemberListEmploymentsResponse as MemberListEmploymentsResponse,
    type MemberListEnrollmentsResponse as MemberListEnrollmentsResponse,
    type MemberListIDCardsResponse as MemberListIDCardsResponse,
    type MemberListQualifyingLifeEventsResponse as MemberListQualifyingLifeEventsResponse,
    type MemberRetrieveHouseholdResponse as MemberRetrieveHouseholdResponse,
    type MemberListResponsesPageNumberPage as MemberListResponsesPageNumberPage,
    type MemberListQualifyingLifeEventsResponsesPageNumberPage as MemberListQualifyingLifeEventsResponsesPageNumberPage,
    type MemberListParams as MemberListParams,
    type MemberListQualifyingLifeEventsParams as MemberListQualifyingLifeEventsParams,
  };
}
