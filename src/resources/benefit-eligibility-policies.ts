// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Define rules that determine which employees qualify for benefits
 */
export class BenefitEligibilityPolicies extends APIResource {
  /**
   * Retrieves a benefit eligibility policy by ID.
   */
  retrieve(policyID: string, options?: RequestOptions): APIPromise<BenefitEligibilityPolicy> {
    return this._client.get(path`/v1/benefit-eligibility-policies/${policyID}`, options);
  }
}

/**
 * Response containing a single benefit eligibility policy resource.
 */
export interface BenefitEligibilityPolicy {
  data: BenefitEligibilityPolicy.Data;
}

export namespace BenefitEligibilityPolicy {
  export interface Data {
    id: string;

    active: boolean;

    classification: string;

    created_at: string;

    employer_id: string;

    updated_at: string;

    waiting_period: string;
  }
}

export declare namespace BenefitEligibilityPolicies {
  export { type BenefitEligibilityPolicy as BenefitEligibilityPolicy };
}
