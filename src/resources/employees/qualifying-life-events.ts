// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmployeesAPI from './employees';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class QualifyingLifeEvents extends APIResource {
  /**
   * Creates a new Qualifying Life Event for an Employee.
   */
  create(
    id: string,
    body: QualifyingLifeEventCreateParams,
    options?: RequestOptions,
  ): APIPromise<EmployeesAPI.QualifyingLifeEvent> {
    return this._client.post(path`/employees/${id}/qualifying-life-events`, { body, ...options });
  }

  /**
   * Gets all Qualifying Life Events for an Employee.
   */
  list(id: string, options?: RequestOptions): APIPromise<QualifyingLifeEventListResponse> {
    return this._client.get(path`/employees/${id}/qualifying-life-events`, options);
  }
}

export interface QualifyingLifeEventListResponse {
  data?: Array<EmployeesAPI.QualifyingLifeEvent>;
}

export interface QualifyingLifeEventCreateParams {
  event_date: string;

  event_type:
    | 'MARRIAGE'
    | 'BIRTH'
    | 'ADOPTION'
    | 'DIVORCE'
    | 'DEATH'
    | 'JOB_LOSS'
    | 'REDUCTION_IN_HOURS'
    | 'EMPLOYER_BANKRUPTCY'
    | 'MEDICARE_ENTITLEMENT'
    | 'TERMINATION'
    | 'OTHER';

  description?: string;

  proof_document_url?: string;
}

export declare namespace QualifyingLifeEvents {
  export {
    type QualifyingLifeEventListResponse as QualifyingLifeEventListResponse,
    type QualifyingLifeEventCreateParams as QualifyingLifeEventCreateParams,
  };
}
