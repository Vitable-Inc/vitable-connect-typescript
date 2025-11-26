// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnrollmentsAPI from '../enrollments';
import * as PlanYearsAPI from './plan-years';
import {
  CreatePlanYearRequest,
  PlanContributionClass,
  PlanCost,
  PlanYear,
  PlanYearCreateParams,
  PlanYearListParams,
  PlanYearListResponse,
  PlanYears,
} from './plan-years';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BenefitProducts extends APIResource {
  planYears: PlanYearsAPI.PlanYears = new PlanYearsAPI.PlanYears(this._client);

  /**
   * Lists all Benefit Products that an Organization has access to that they can
   * offer to their Employers.
   */
  list(
    query: BenefitProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BenefitProductListResponse> {
    return this._client.get('/benefit-products', { query, ...options });
  }

  /**
   * Generates a quote with pricing for an Employer with metadata for a specific
   * Product. Employer/metadata would be in request body.
   */
  generateQuote(
    id: string,
    body: BenefitProductGenerateQuoteParams,
    options?: RequestOptions,
  ): APIPromise<Quote> {
    return this._client.post(path`/benefit-products/${id}/quote`, { body, ...options });
  }
}

export interface BenefitProduct {
  id: string;

  name: string;

  product_type: string;

  plans?: Array<EnrollmentsAPI.Plan>;
}

export interface Plan {
  id: string;

  /**
   * Plan name (e.g., MEC, MEC Plus)
   */
  plan_name: string;
}

export interface Quote {
  benefit_product_id: string;

  employer_id: string;

  total_cost_in_cents: number;

  breakdown?: { [key: string]: unknown };
}

export interface QuoteRequest {
  employer_id: string;

  /**
   * Additional metadata for quote generation
   */
  metadata?: { [key: string]: unknown };
}

export interface BenefitProductListResponse {
  data?: Array<BenefitProduct>;

  pagination?: BenefitProductListResponse.Pagination;
}

export namespace BenefitProductListResponse {
  export interface Pagination {
    limit: number;

    offset: number;

    total: number;
  }
}

export interface BenefitProductListParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export interface BenefitProductGenerateQuoteParams {
  employer_id: string;

  /**
   * Additional metadata for quote generation
   */
  metadata?: { [key: string]: unknown };
}

BenefitProducts.PlanYears = PlanYears;

export declare namespace BenefitProducts {
  export {
    type BenefitProduct as BenefitProduct,
    type Plan as Plan,
    type Quote as Quote,
    type QuoteRequest as QuoteRequest,
    type BenefitProductListResponse as BenefitProductListResponse,
    type BenefitProductListParams as BenefitProductListParams,
    type BenefitProductGenerateQuoteParams as BenefitProductGenerateQuoteParams,
  };

  export {
    PlanYears as PlanYears,
    type CreatePlanYearRequest as CreatePlanYearRequest,
    type PlanContributionClass as PlanContributionClass,
    type PlanCost as PlanCost,
    type PlanYear as PlanYear,
    type PlanYearListResponse as PlanYearListResponse,
    type PlanYearCreateParams as PlanYearCreateParams,
    type PlanYearListParams as PlanYearListParams,
  };
}
