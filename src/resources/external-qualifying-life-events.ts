// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExternalQualifyingLifeEventsAPI from './external-qualifying-life-events';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ExternalQualifyingLifeEvents extends APIResource {
  /**
   * Submit a qualifying life event (QLE) that allows employees to make benefit
   * changes outside of open enrollment periods. Common events include marriage,
   * divorce, birth of a child, or court orders. This creates a special enrollment
   * period for the affected employee.
   */
  submit(
    body: ExternalQualifyingLifeEventSubmitParams,
    options?: RequestOptions,
  ): APIPromise<ExternalQualifyingLifeEventSubmitResponse> {
    return this._client.post('/v1/external-qualifying-life-events/submission', { body, ...options });
  }
}

/**
 * Types of qualifying life events:
 *
 * - `Married` - Marriage
 * - `Divorced` - Divorce or legal separation
 * - `New child` - Birth or adoption of a child
 * - `Court ordered` - Court-ordered coverage changes
 * - `Other` - Other qualifying life event (requires description)
 */
export type ExternalQualifyingLifeEventType =
  | 'Married'
  | 'Divorced'
  | 'New child'
  | 'Court ordered'
  | 'Other';

/**
 * Response from submitting a qualifying life event
 */
export interface ExternalQualifyingLifeEventSubmitResponse {
  /**
   * A qualifying life event that enables special enrollment periods
   */
  qle: ExternalQualifyingLifeEventSubmitResponse.Qle;
}

export namespace ExternalQualifyingLifeEventSubmitResponse {
  /**
   * A qualifying life event that enables special enrollment periods
   */
  export interface Qle {
    /**
     * Unique identifier for the qualifying life event
     */
    id: string;

    /**
     * QLE creation timestamp
     */
    created: string;

    /**
     * Types of qualifying life events:
     *
     * - `Married` - Marriage
     * - `Divorced` - Divorce or legal separation
     * - `New child` - Birth or adoption of a child
     * - `Court ordered` - Court-ordered coverage changes
     * - `Other` - Other qualifying life event (requires description)
     */
    event: ExternalQualifyingLifeEventsAPI.ExternalQualifyingLifeEventType;

    /**
     * Whether the QLE is still pending review
     */
    pending_in: boolean;

    /**
     * Full name of member who submitted the QLE
     */
    submitted_by_full_name: string;

    /**
     * Member who submitted this QLE request
     */
    submitted_by_id: string;

    /**
     * QLE last update timestamp
     */
    updated: string;

    /**
     * Timestamp when QLE was accepted (if applicable)
     */
    accepted_on?: string | null;

    /**
     * Description of other QLE if event type is "Other"
     */
    other_event?: string | null;

    /**
     * Timestamp when QLE was rejected (if applicable)
     */
    rejected_on?: string | null;
  }
}

export interface ExternalQualifyingLifeEventSubmitParams {
  /**
   * Types of qualifying life events:
   *
   * - `Married` - Marriage
   * - `Divorced` - Divorce or legal separation
   * - `New child` - Birth or adoption of a child
   * - `Court ordered` - Court-ordered coverage changes
   * - `Other` - Other qualifying life event (requires description)
   */
  event: ExternalQualifyingLifeEventType;

  /**
   * Description of other qualifying life event if event type is "Other"
   */
  other_event?: string | null;
}

export declare namespace ExternalQualifyingLifeEvents {
  export {
    type ExternalQualifyingLifeEventType as ExternalQualifyingLifeEventType,
    type ExternalQualifyingLifeEventSubmitResponse as ExternalQualifyingLifeEventSubmitResponse,
    type ExternalQualifyingLifeEventSubmitParams as ExternalQualifyingLifeEventSubmitParams,
  };
}
