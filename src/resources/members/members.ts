// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DependentsAPI from './dependents';
import {
  DependentCreateParams,
  DependentListParams,
  DependentListResponse,
  Dependents,
  Relationship,
} from './dependents';
import * as QualifyingLifeEventsAPI from './qualifying-life-events';
import {
  EventType,
  QualifyingLifeEvent,
  QualifyingLifeEventListParams,
  QualifyingLifeEventListResponse,
  QualifyingLifeEventRecordParams,
  QualifyingLifeEventStatus,
  QualifyingLifeEvents,
} from './qualifying-life-events';

export class Members extends APIResource {
  dependents: DependentsAPI.Dependents = new DependentsAPI.Dependents(this._client);
  qualifyingLifeEvents: QualifyingLifeEventsAPI.QualifyingLifeEvents =
    new QualifyingLifeEventsAPI.QualifyingLifeEvents(this._client);
}

Members.Dependents = Dependents;
Members.QualifyingLifeEvents = QualifyingLifeEvents;

export declare namespace Members {
  export {
    Dependents as Dependents,
    type Relationship as Relationship,
    type DependentListResponse as DependentListResponse,
    type DependentCreateParams as DependentCreateParams,
    type DependentListParams as DependentListParams,
  };

  export {
    QualifyingLifeEvents as QualifyingLifeEvents,
    type EventType as EventType,
    type QualifyingLifeEvent as QualifyingLifeEvent,
    type QualifyingLifeEventStatus as QualifyingLifeEventStatus,
    type QualifyingLifeEventListResponse as QualifyingLifeEventListResponse,
    type QualifyingLifeEventListParams as QualifyingLifeEventListParams,
    type QualifyingLifeEventRecordParams as QualifyingLifeEventRecordParams,
  };
}
