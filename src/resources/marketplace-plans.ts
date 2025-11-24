// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class MarketplacePlans extends APIResource {
  /**
   * Search for health insurance marketplace plans based on location, applicants, and
   * household information. This endpoint helps payroll providers and benefits
   * administrators find available health plans for ICHRA (Individual Coverage HRA)
   * implementations and employee plan selection.
   */
  search(
    body: MarketplacePlanSearchParams,
    options?: RequestOptions,
  ): APIPromise<MarketplacePlanSearchResponse> {
    return this._client.post('/v1/marketplace-plans/search', { body, ...options });
  }
}

/**
 * Response containing available marketplace plans
 */
export interface MarketplacePlanSearchResponse {
  /**
   * List of available health insurance plans
   */
  marketplace_plans: Array<MarketplacePlanSearchResponse.MarketplacePlan>;
}

export namespace MarketplacePlanSearchResponse {
  /**
   * Health insurance marketplace plan details
   */
  export interface MarketplacePlan {
    /**
     * Unique plan identifier
     */
    id: string;

    /**
     * Benefits summary document URL
     */
    benefits_summary_url: string;

    /**
     * URL to carrier logo image
     */
    carrier_logo_url: string;

    /**
     * Insurance carrier name
     */
    carrier_name: string;

    /**
     * Drug formulary (covered medications) document URL
     */
    drug_formulary_url: string;

    /**
     * Plan coverage start date
     */
    effective_date: string;

    /**
     * Plan coverage end date
     */
    expiration_date: string;

    /**
     * Family prescription drug deductible
     */
    family_drug_deductible: number;

    /**
     * Family medical deductible for in-network care
     */
    family_medical_deductible_in_network: number;

    /**
     * Family out-of-pocket maximum for in-network care
     */
    family_medical_out_of_pocket_max_in_network: number;

    /**
     * Generic prescription drug cost
     */
    generic_drugs: number;

    /**
     * Individual prescription drug deductible
     */
    individual_drug_deductible: number;

    /**
     * Individual medical deductible for in-network care
     */
    individual_medical_deductible_in_network: number;

    /**
     * Individual out-of-pocket maximum for in-network care
     */
    individual_medical_out_of_pocket_max_in_network: number;

    /**
     * Health insurance plan metal levels indicating coverage richness:
     *
     * - `catastrophic` - Catastrophic coverage (lowest cost, highest deductible)
     * - `bronze` - Bronze level (60% actuarial value)
     * - `expanded_bronze` - Enhanced bronze level
     * - `silver` - Silver level (70% actuarial value)
     * - `gold` - Gold level (80% actuarial value)
     * - `platinum` - Platinum level (90% actuarial value, highest coverage)
     */
    level: 'catastrophic' | 'bronze' | 'expanded_bronze' | 'silver' | 'gold' | 'platinum';

    /**
     * Plan name
     */
    name: string;

    /**
     * Whether the plan is available on the marketplace
     */
    on_market_in: boolean;

    /**
     * Type of health plan (HMO, PPO, EPO, etc.)
     */
    plan_type: string;

    /**
     * Monthly premium amount
     */
    premium: number;

    /**
     * Primary care physician visit cost
     */
    primary_care_physician: number;

    /**
     * Summary of Benefits and Coverage (SBC) document URL
     */
    sbc_url: string;

    /**
     * Healthcare providers covered by this plan
     */
    providers?: Array<MarketplacePlan.Provider> | null;
  }

  export namespace MarketplacePlan {
    /**
     * Healthcare provider network information for a plan
     */
    export interface Provider {
      /**
       * Whether the provider is in-network for this plan
       */
      in_network: boolean;

      /**
       * National Provider Identifier number
       */
      npi: number;
    }
  }
}

export interface MarketplacePlanSearchParams {
  /**
   * List of people who need coverage
   */
  applicants: Array<MarketplacePlanSearchParams.Applicant>;

  /**
   * ZIP code for plan availability search
   */
  zipcode: string;

  /**
   * Intended enrollment date for coverage
   */
  enrollment_date?: string | null;

  /**
   * Household information for subsidy eligibility
   */
  household?: MarketplacePlanSearchParams.Household | null;

  /**
   * Preferred healthcare providers to check network coverage
   */
  providers?: Array<MarketplacePlanSearchParams.Provider> | null;
}

export namespace MarketplacePlanSearchParams {
  /**
   * Individual applicant for health insurance coverage
   */
  export interface Applicant {
    /**
     * Age of the applicant
     */
    age: number;

    /**
     * Whether the applicant is a child/dependent
     */
    child: boolean;

    /**
     * Whether the applicant is a smoker (affects pricing)
     */
    smoker: boolean;
  }

  /**
   * Household information for subsidy eligibility
   */
  export interface Household {
    /**
     * Annual household income in cents for subsidy calculations
     */
    household_income_in_cents: number;

    /**
     * Total number of people in the household
     */
    household_size: number;
  }

  /**
   * Healthcare provider information for network checks
   */
  export interface Provider {
    /**
     * Provider identifier
     */
    id: number;

    /**
     * Provider name
     */
    name: string;

    /**
     * National Provider Identifier (NPI) numbers
     */
    npis: Array<number>;

    /**
     * Type of healthcare provider
     */
    type: string;

    /**
     * Provider phone number
     */
    phone?: string | null;
  }
}

export declare namespace MarketplacePlans {
  export {
    type MarketplacePlanSearchResponse as MarketplacePlanSearchResponse,
    type MarketplacePlanSearchParams as MarketplacePlanSearchParams,
  };
}
