// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * Gets the Plans eligible for selection for an Enrollment.
   */
  getEligiblePlans(id: string, options?: RequestOptions): APIPromise<EnrollmentGetEligiblePlansResponse> {
    return this._client.get(path`/enrollments/${id}/plans`, options);
  }

  /**
   * Reissue enrollment with QLE (description TBD).
   */
  reissue(id: string, body: EnrollmentReissueParams, options?: RequestOptions): APIPromise<Enrollment> {
    return this._client.post(path`/enrollments/${id}/reissue`, { body, ...options });
  }
}

export interface Enrollment {
  id: string;

  decision: 'enrolled' | 'waived';

  employee_id: string;

  plan_year_id: string;

  status: 'pending' | 'enrolled' | 'waived' | 'inactive';
}

export interface Plan {
  id: string;

  /**
   * Plan name (e.g., MEC, MEC Plus)
   */
  plan_name: string;
}

export interface ReissueEnrollmentRequest {
  qualifying_life_event_id: string;
}

export interface EnrollmentGetEligiblePlansResponse {
  data?: Array<Plan>;
}

export interface EnrollmentReissueParams {
  qualifying_life_event_id: string;
}

export declare namespace Enrollments {
  export {
    type Enrollment as Enrollment,
    type Plan as Plan,
    type ReissueEnrollmentRequest as ReissueEnrollmentRequest,
    type EnrollmentGetEligiblePlansResponse as EnrollmentGetEligiblePlansResponse,
    type EnrollmentReissueParams as EnrollmentReissueParams,
  };
}
