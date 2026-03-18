// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DependentsAPI from './dependents';
import { Dependents } from './dependents';
import * as QualifyingLifeEventsAPI from './qualifying-life-events';
import { QualifyingLifeEvents } from './qualifying-life-events';

export class Members extends APIResource {
  dependents: DependentsAPI.Dependents = new DependentsAPI.Dependents(this._client);
  qualifyingLifeEvents: QualifyingLifeEventsAPI.QualifyingLifeEvents =
    new QualifyingLifeEventsAPI.QualifyingLifeEvents(this._client);
}

Members.Dependents = Dependents;
Members.QualifyingLifeEvents = QualifyingLifeEvents;

export declare namespace Members {
  export { Dependents as Dependents };

  export { QualifyingLifeEvents as QualifyingLifeEvents };
}
