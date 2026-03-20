// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PageNumberPage, type PageNumberPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WebhookEvents extends APIResource {
  /**
   * Retrieves a single webhook event by its prefixed ID. Returns 404 if the event
   * does not exist or belongs to a different organization.
   */
  retrieve(eventID: string, options?: RequestOptions): APIPromise<WebhookEventRetrieveResponse> {
    return this._client.get(path`/v1/webhook-events/${eventID}`, options);
  }

  /**
   * Retrieves a paginated list of webhook events for the authenticated organization.
   * Supports filtering by event name, resource type, resource ID, and date range.
   */
  list(
    query: WebhookEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookEventsPageNumberPage, WebhookEvent> {
    return this._client.getAPIList('/v1/webhook-events', PageNumberPage<WebhookEvent>, { query, ...options });
  }

  /**
   * Retrieves all delivery attempts for a webhook event. Returns up to 100
   * deliveries. Each delivery includes a computed status field (Pending, In
   * Progress, Delivered, or Failed).
   */
  listDeliveries(eventID: string, options?: RequestOptions): APIPromise<WebhookEventListDeliveriesResponse> {
    return this._client.get(path`/v1/webhook-events/${eventID}/deliveries`, options);
  }
}

export type WebhookEventsPageNumberPage = PageNumberPage<WebhookEvent>;

export interface WebhookEvent {
  /**
   * Prefixed unique identifier for this webhook event (e.g., `wevt_...`).
   */
  id: string;

  /**
   * When the event occurred, in UTC.
   */
  created_at: string;

  /**
   * The event type, formatted as `{resource}.{action}` (e.g.,
   * `enrollment.accepted`).
   */
  event_name: string;

  /**
   * The organization this event belongs to.
   */
  organization_id: string;

  /**
   * Prefixed ID of the affected resource. Use this to fetch the current state from
   * the API.
   */
  resource_id: string;

  /**
   * The type of resource affected (e.g., `enrollment`, `employee`).
   */
  resource_type: string;
}

/**
 * Response containing a single webhook event resource.
 */
export interface WebhookEventRetrieveResponse {
  data: WebhookEvent;
}

export interface WebhookEventListDeliveriesResponse {
  data: Array<WebhookEventListDeliveriesResponse.Data>;
}

export namespace WebhookEventListDeliveriesResponse {
  export interface Data {
    /**
     * Prefixed unique identifier for this delivery (e.g., `wdlv_...`).
     */
    id: string;

    /**
     * When this delivery record was created, in UTC.
     */
    created_at: string;

    /**
     * When the delivery was successfully received, in UTC.
     */
    delivered_at: string | null;

    /**
     * When the delivery was marked as permanently failed, in UTC.
     */
    failed_at: string | null;

    /**
     * Reason for failure, if applicable.
     */
    failure_reason: string;

    /**
     * When the delivery attempt started, in UTC.
     */
    started_at: string | null;

    /**
     * Current delivery status: Pending, In Progress, Delivered, or Failed.
     */
    status: string;

    /**
     * The webhook subscription this delivery was sent to.
     */
    subscription_id: string;

    /**
     * The webhook event this delivery belongs to.
     */
    webhook_event_id: string;
  }
}

export interface WebhookEventListParams extends PageNumberPageParams {
  created_after?: string;

  created_before?: string;

  /**
   * - `enrollment.accepted` - Enrollment Accepted
   * - `enrollment.terminated` - Enrollment Terminated
   * - `enrollment.elected` - Enrollment Elected
   * - `enrollment.granted` - Enrollment Granted
   * - `enrollment.waived` - Enrollment Waived
   * - `enrollment.started` - Enrollment Started
   * - `employee.eligibility_granted` - Employee Eligibility Granted
   * - `employee.eligibility_terminated` - Employee Eligibility Terminated
   * - `employee.deactivated` - Employee Deactivated
   * - `payroll_deduction.created` - Payroll Deduction Created
   * - `plan_year.eligibility_policy_created` - Plan Year Eligibility Policy Created
   */
  event_name?:
    | 'enrollment.accepted'
    | 'enrollment.terminated'
    | 'enrollment.elected'
    | 'enrollment.granted'
    | 'enrollment.waived'
    | 'enrollment.started'
    | 'employee.eligibility_granted'
    | 'employee.eligibility_terminated'
    | 'employee.deactivated'
    | 'payroll_deduction.created'
    | 'plan_year.eligibility_policy_created';

  resource_id?: string;

  /**
   * - `enrollment` - Enrollment
   * - `employee` - Employee
   * - `employer` - Employer
   * - `dependent` - Dependent
   * - `plan_year` - Plan Year
   * - `payroll_deduction` - Payroll Deduction
   */
  resource_type?: 'enrollment' | 'employee' | 'employer' | 'dependent' | 'plan_year' | 'payroll_deduction';
}

export declare namespace WebhookEvents {
  export {
    type WebhookEvent as WebhookEvent,
    type WebhookEventRetrieveResponse as WebhookEventRetrieveResponse,
    type WebhookEventListDeliveriesResponse as WebhookEventListDeliveriesResponse,
    type WebhookEventsPageNumberPage as WebhookEventsPageNumberPage,
    type WebhookEventListParams as WebhookEventListParams,
  };
}
