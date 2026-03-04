// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BenefitProductsAPI from '../benefit-products/benefit-products';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Record life events that trigger special enrollment periods
 */
export class QualifyingLifeEvents extends APIResource {
  /**
   * Retrieves detailed information for a specific QLE by ID. Returns event type,
   * date, status, and enrollment window information.
   *
   * @example
   * ```ts
   * const qualifyingLifeEventResponse =
   *   await client.members.qualifyingLifeEvents.retrieve(
   *     'qle_abc123def456',
   *     { member_id: 'mbr_abc123def456' },
   *   );
   * ```
   */
  retrieve(
    qleID: string,
    params: QualifyingLifeEventRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<QualifyingLifeEventResponse> {
    const { member_id } = params;
    return this._client.get(path`/v1/members/${member_id}/qualifying-life-events/${qleID}`, options);
  }

  /**
   * Retrieves a paginated list of qualifying life events for a member. QLEs are
   * significant life changes (marriage, birth, adoption, loss of coverage) that
   * allow benefit enrollment changes outside open enrollment.
   *
   * @example
   * ```ts
   * const qualifyingLifeEvents =
   *   await client.members.qualifyingLifeEvents.list(
   *     'mbr_abc123def456',
   *   );
   * ```
   */
  list(
    memberID: string,
    query: QualifyingLifeEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QualifyingLifeEventListResponse> {
    return this._client.get(path`/v1/members/${memberID}/qualifying-life-events`, { query, ...options });
  }

  /**
   * Records a qualifying life event occurrence for a member. Opens a special
   * enrollment period allowing benefit changes outside open enrollment. Employees
   * typically have 30-60 days from the event date to complete enrollment changes.
   *
   * @example
   * ```ts
   * const qualifyingLifeEventResponse =
   *   await client.members.qualifyingLifeEvents.record(
   *     'mbr_abc123def456',
   *     {
   *       event_date: '2024-11-15',
   *       event_type: 'Marriage',
   *       notes:
   *         'Employee got married, adding spouse to coverage',
   *     },
   *   );
   * ```
   */
  record(
    memberID: string,
    body: QualifyingLifeEventRecordParams,
    options?: RequestOptions,
  ): APIPromise<QualifyingLifeEventResponse> {
    return this._client.post(path`/v1/members/${memberID}/qualifying-life-events`, { body, ...options });
  }
}

/**
 * - `Marriage` - Marriage
 * - `Birth` - Birth
 * - `Adoption` - Adoption
 * - `Divorce` - Divorce
 * - `Death` - Death
 * - `Job Loss` - Job Loss
 * - `Reduction In Hours` - Reduction In Hours
 * - `Employer Bankruptcy` - Employer Bankruptcy
 * - `Medicare Entitlement` - Medicare Entitlement
 * - `Termination` - Termination
 * - `Other` - Other
 */
export type EventType =
  | 'Marriage'
  | 'Birth'
  | 'Adoption'
  | 'Divorce'
  | 'Death'
  | 'Job Loss'
  | 'Reduction In Hours'
  | 'Employer Bankruptcy'
  | 'Medicare Entitlement'
  | 'Termination'
  | 'Other';

/**
 * Serializer for Qualifying Life Event entity in public API responses.
 *
 * QLEs are significant life changes (marriage, birth, adoption, loss of coverage)
 * that allow employees to modify benefit elections outside of open enrollment.
 */
export interface QualifyingLifeEvent {
  /**
   * Unique QLE identifier with 'qle\_' prefix
   */
  id: string;

  /**
   * Timestamp when the QLE was created
   */
  created_at: string;

  /**
   * ID of the employee (empl\_\*)
   */
  employee_id: string;

  /**
   * End of the special enrollment period (typically 30-60 days from event)
   */
  enrollment_window_end: string;

  /**
   * Start of the special enrollment period
   */
  enrollment_window_start: string;

  /**
   * Date when the qualifying life event occurred
   */
  event_date: string;

  /**
   * Type of qualifying life event (e.g., 'marriage', 'birth', 'adoption',
   * 'loss_of_coverage', 'divorce')
   */
  event_type: string;

  /**
   * ID of the member experiencing the life event (mbr\_\*)
   */
  member_id: string;

  /**
   * - `pending` - Pending
   * - `approved` - Approved
   * - `denied` - Denied
   */
  status: QualifyingLifeEventStatus;

  /**
   * Timestamp when the QLE was last updated
   */
  updated_at: string;

  /**
   * Additional notes or comments about the QLE
   */
  notes?: string | null;

  /**
   * Timestamp when the QLE was reviewed, if reviewed
   */
  reviewed_at?: string | null;

  /**
   * ID of the user who reviewed the QLE, if reviewed
   */
  reviewed_by?: string | null;
}

/**
 * Response containing a single qualifying life event resource.
 */
export interface QualifyingLifeEventResponse {
  /**
   * Serializer for Qualifying Life Event entity in public API responses.
   *
   * QLEs are significant life changes (marriage, birth, adoption, loss of coverage)
   * that allow employees to modify benefit elections outside of open enrollment.
   */
  data: QualifyingLifeEvent;
}

/**
 * - `pending` - Pending
 * - `approved` - Approved
 * - `denied` - Denied
 */
export type QualifyingLifeEventStatus = 'pending' | 'approved' | 'denied';

/**
 * Paginated list response containing qualifying life event resources.
 */
export interface QualifyingLifeEventListResponse {
  data: Array<QualifyingLifeEvent>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: BenefitProductsAPI.Pagination;
}

export interface QualifyingLifeEventRetrieveParams {
  /**
   * Unique member identifier (mbr\_\*)
   */
  member_id: string;
}

export interface QualifyingLifeEventListParams {
  /**
   * Filter by QLE type
   */
  event_type?: EventType;

  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Filter by QLE status
   */
  status?: QualifyingLifeEventStatus;
}

export interface QualifyingLifeEventRecordParams {
  /**
   * Date when the event occurred
   */
  event_date: string;

  /**
   * - `Marriage` - Marriage
   * - `Birth` - Birth
   * - `Adoption` - Adoption
   * - `Divorce` - Divorce
   * - `Death` - Death
   * - `Job Loss` - Job Loss
   * - `Reduction In Hours` - Reduction In Hours
   * - `Employer Bankruptcy` - Employer Bankruptcy
   * - `Medicare Entitlement` - Medicare Entitlement
   * - `Termination` - Termination
   * - `Other` - Other
   */
  event_type: EventType;

  /**
   * Optional notes about the event
   */
  notes?: string | null;
}

export declare namespace QualifyingLifeEvents {
  export {
    type EventType as EventType,
    type QualifyingLifeEvent as QualifyingLifeEvent,
    type QualifyingLifeEventResponse as QualifyingLifeEventResponse,
    type QualifyingLifeEventStatus as QualifyingLifeEventStatus,
    type QualifyingLifeEventListResponse as QualifyingLifeEventListResponse,
    type QualifyingLifeEventRetrieveParams as QualifyingLifeEventRetrieveParams,
    type QualifyingLifeEventListParams as QualifyingLifeEventListParams,
    type QualifyingLifeEventRecordParams as QualifyingLifeEventRecordParams,
  };
}
