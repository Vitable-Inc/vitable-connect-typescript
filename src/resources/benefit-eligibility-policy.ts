// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class BenefitEligibilityPolicyResource extends APIResource {}

/**
 * Serializer for Benefit Eligibility Policy entity.
 *
 * Eligibility policies define rules that determine which employees qualify for
 * benefits.
 */
export interface BenefitEligibilityPolicy {
  /**
   * Unique eligibility policy identifier with 'epol\_' prefix
   */
  id: string;

  /**
   * Whether this policy is currently active
   */
  active_in: boolean;

  /**
   * Timestamp when the policy was created
   */
  created_at: string;

  /**
   * Date when this policy becomes effective
   */
  effective_date: string;

  /**
   * ID of the employer this policy belongs to (empr\_\*)
   */
  employer_id: string;

  /**
   * Display name for the eligibility policy
   */
  name: string;

  /**
   * List of eligibility rules that must be satisfied
   */
  rules: Array<BenefitEligibilityPolicy.Rule>;

  /**
   * Timestamp when the policy was last updated
   */
  updated_at: string;

  /**
   * Detailed description of the policy
   */
  description?: string | null;

  /**
   * ID of the policy this one replaces, if any (epol\_\*)
   */
  replaced_policy_id?: string | null;
}

export namespace BenefitEligibilityPolicy {
  /**
   * Individual eligibility rule within a policy.
   */
  export interface Rule {
    /**
     * Comparison operator (e.g., 'equals', 'greater_than', 'in')
     */
    operator: string;

    /**
     * Type of eligibility rule (e.g., 'employment_status', 'hours_per_week',
     * 'waiting_period')
     */
    rule_type: string;

    /**
     * Value to compare against (type depends on rule_type)
     */
    value: unknown;
  }
}

export declare namespace BenefitEligibilityPolicyResource {
  export { type BenefitEligibilityPolicy as BenefitEligibilityPolicy };
}
