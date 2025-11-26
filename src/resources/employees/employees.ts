// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DependentsAPI from '../dependents';
import * as EmployeesDependentsAPI from './dependents';
import { DependentCreateParams, DependentListResponse, Dependents } from './dependents';
import * as EnrollmentsAPI from './enrollments';
import {
  EnrollmentElectParams,
  EnrollmentElectResponse,
  EnrollmentListParams,
  EnrollmentListResponse,
  Enrollments,
} from './enrollments';
import * as QualifyingLifeEventsAPI from './qualifying-life-events';
import {
  QualifyingLifeEventCreateParams,
  QualifyingLifeEventListResponse,
  QualifyingLifeEvents,
} from './qualifying-life-events';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Employees extends APIResource {
  dependents: EmployeesDependentsAPI.Dependents = new EmployeesDependentsAPI.Dependents(this._client);
  qualifyingLifeEvents: QualifyingLifeEventsAPI.QualifyingLifeEvents =
    new QualifyingLifeEventsAPI.QualifyingLifeEvents(this._client);
  enrollments: EnrollmentsAPI.Enrollments = new EnrollmentsAPI.Enrollments(this._client);

  /**
   * Gets a specific Employee for an Employer.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Employee> {
    return this._client.get(path`/employees/${id}`, options);
  }

  /**
   * Updates a specific Employee for an Employer.
   */
  update(id: string, body: EmployeeUpdateParams, options?: RequestOptions): APIPromise<Employee> {
    return this._client.put(path`/employees/${id}`, { body, ...options });
  }

  /**
   * Terminates a specific Employee for an Employer.
   */
  terminate(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/employees/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CreateQualifyingLifeEventRequest {
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

export interface ElectBenefitsRequest {
  elections: Array<ElectBenefitsRequest.Election>;
}

export namespace ElectBenefitsRequest {
  export interface Election {
    decision: 'enrolled' | 'waived';

    enrollment_id: string;

    dependent_ids?: Array<string>;

    /**
     * Required if decision is enrolled
     */
    plan_id?: string;
  }
}

export interface Employee {
  id: string;

  active: boolean;

  employer_id: string;

  member: Member;

  start_date: string;

  dependents?: Array<DependentsAPI.Dependent>;

  terminated_at?: string | null;
}

export interface Member {
  id: string;

  date_of_birth: string;

  first_name: string;

  last_name: string;

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND' | null;

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN' | null;

  suffix?: string | null;
}

export interface QualifyingLifeEvent {
  id: string;

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

  member_id: string;

  status: 'PENDING' | 'APPROVED' | 'DENIED';

  description?: string | null;

  proof_document_url?: string | null;

  review_notes?: string | null;

  reviewed_at?: string | null;

  reviewed_by_user_id?: string | null;
}

export interface EmployeeUpdateParams {
  date_of_birth?: string;

  first_name?: string;

  gender?: 'MALE' | 'FEMALE' | 'TRANSGENDER' | 'NON_BINARY' | 'PREFER_NOT_TO_RESPOND';

  last_name?: string;

  sex?: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

  start_date?: string;

  suffix?: string;
}

Employees.Dependents = Dependents;
Employees.QualifyingLifeEvents = QualifyingLifeEvents;
Employees.Enrollments = Enrollments;

export declare namespace Employees {
  export {
    type CreateQualifyingLifeEventRequest as CreateQualifyingLifeEventRequest,
    type ElectBenefitsRequest as ElectBenefitsRequest,
    type Employee as Employee,
    type Member as Member,
    type QualifyingLifeEvent as QualifyingLifeEvent,
    type EmployeeUpdateParams as EmployeeUpdateParams,
  };

  export {
    Dependents as Dependents,
    type DependentListResponse as DependentListResponse,
    type DependentCreateParams as DependentCreateParams,
  };

  export {
    QualifyingLifeEvents as QualifyingLifeEvents,
    type QualifyingLifeEventListResponse as QualifyingLifeEventListResponse,
    type QualifyingLifeEventCreateParams as QualifyingLifeEventCreateParams,
  };

  export {
    Enrollments as Enrollments,
    type EnrollmentListResponse as EnrollmentListResponse,
    type EnrollmentElectResponse as EnrollmentElectResponse,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentElectParams as EnrollmentElectParams,
  };
}
