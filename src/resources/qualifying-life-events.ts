// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as QualifyingLifeEventsAPI from './members/qualifying-life-events';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class QualifyingLifeEvents extends APIResource {
  /**
   * Retrieves detailed information for a specific QLE by ID. Returns event type,
   * date, status, and enrollment window information.
   */
  retrieve(qleID: string, options?: RequestOptions): APIPromise<QualifyingLifeEventsAPI.QualifyingLifeEvent> {
    return this._client.get(path`/v1/qualifying-life-events/${qleID}`, options);
  }
}
