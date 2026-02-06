// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BenefitProductsAPI from './benefit-products';
import * as PlanYearsAPI from './plan-years';
import {
  PlanYear,
  PlanYearCreateParams,
  PlanYearListParams,
  PlanYearListResponse,
  PlanYearResponse,
  PlanYearStatus,
  PlanYears,
} from './plan-years';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BenefitProducts extends APIResource {
  planYears: PlanYearsAPI.PlanYears = new PlanYearsAPI.PlanYears(this._client);

  /**
   * Retrieves a paginated list of all benefit products that the authenticated
   * organization has access to and can offer to their employers. Use query
   * parameters to filter by category, product code, or active status.
   *
   * @example
   * ```ts
   * const benefitProducts = await client.benefitProducts.list();
   * ```
   */
  list(
    query: BenefitProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BenefitProductListResponse> {
    return this._client.get('/v1/benefit-products', { query, ...options });
  }
}

/**
 * - `Medical` - Medical
 * - `Dental` - Dental
 * - `Vision` - Vision
 * - `Hospital` - Hospital
 */
export type Category = 'Medical' | 'Dental' | 'Vision' | 'Hospital';

/**
 * Pagination metadata for list responses.
 */
export interface Pagination {
  /**
   * Items per page
   */
  limit: number;

  /**
   * Current page number
   */
  page: number;

  /**
   * Total number of items
   */
  total: number;

  /**
   * Total number of pages
   */
  total_pages: number;
}

/**
 * - `EBA` - Eba Mec
 * - `VPC` - Vpc Enhanced
 * - `VPC_CORE` - Vpc Core
 * - `MEC` - Vpc Mec
 * - `MEC2` - Mec2
 * - `MEC_PLUS` - Mec Plus
 * - `MVP` - Mvp
 * - `MVP2` - Mvp2
 * - `MVPSL` - Mvpsl
 * - `MVPSL2` - Mvpsl2
 * - `VD` - Dental
 * - `VV` - Vision
 * - `ICHRA` - Ichra
 * - `ICHRA_PREMIUM_PLUS` - Ichra Premium Plus
 * - `ICHRA_REIMBURSEMENT_ONLY` - Ichra Reimbursement Only
 */
export type ProductCode =
  | 'EBA'
  | 'VPC'
  | 'VPC_CORE'
  | 'MEC'
  | 'MEC2'
  | 'MEC_PLUS'
  | 'MVP'
  | 'MVP2'
  | 'MVPSL'
  | 'MVPSL2'
  | 'VD'
  | 'VV'
  | 'ICHRA'
  | 'ICHRA_PREMIUM_PLUS'
  | 'ICHRA_REIMBURSEMENT_ONLY';

/**
 * Paginated list response containing benefit product resources.
 */
export interface BenefitProductListResponse {
  data: Array<BenefitProductListResponse.Data>;

  /**
   * Pagination metadata for list responses.
   */
  pagination: Pagination;
}

export namespace BenefitProductListResponse {
  /**
   * Serializer for Benefit Product entity in public API responses.
   *
   * Benefit Products represent types of benefits (dental, vision, medical, etc.)
   * that an Organization can offer to their Employers.
   */
  export interface Data {
    /**
     * Unique benefit product identifier with 'bprd\_' prefix
     */
    id: string;

    /**
     * Whether this product is currently available for offering
     */
    active_in: boolean;

    /**
     * - `Medical` - Medical
     * - `Dental` - Dental
     * - `Vision` - Vision
     * - `Hospital` - Hospital
     */
    category: BenefitProductsAPI.Category;

    /**
     * Timestamp when the product was created
     */
    created_at: string;

    /**
     * Display name of the benefit product
     */
    name: string;

    /**
     * - `EBA` - Eba Mec
     * - `VPC` - Vpc Enhanced
     * - `VPC_CORE` - Vpc Core
     * - `MEC` - Vpc Mec
     * - `MEC2` - Mec2
     * - `MEC_PLUS` - Mec Plus
     * - `MVP` - Mvp
     * - `MVP2` - Mvp2
     * - `MVPSL` - Mvpsl
     * - `MVPSL2` - Mvpsl2
     * - `VD` - Dental
     * - `VV` - Vision
     * - `ICHRA` - Ichra
     * - `ICHRA_PREMIUM_PLUS` - Ichra Premium Plus
     * - `ICHRA_REIMBURSEMENT_ONLY` - Ichra Reimbursement Only
     */
    product_code: BenefitProductsAPI.ProductCode;

    /**
     * Timestamp when the product was last updated
     */
    updated_at: string;

    /**
     * Name of the carrier providing this product
     */
    carrier_name?: string | null;

    /**
     * Detailed description of the benefit product
     */
    description?: string | null;
  }
}

export interface BenefitProductListParams {
  /**
   * Filter by active status
   */
  active_in?: boolean;

  /**
   * Filter by product category
   */
  category?: Category;

  /**
   * Items per page (default: 20, max: 100)
   */
  limit?: number;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Filter by product code
   */
  product_code?: ProductCode;
}

BenefitProducts.PlanYears = PlanYears;

export declare namespace BenefitProducts {
  export {
    type Category as Category,
    type Pagination as Pagination,
    type ProductCode as ProductCode,
    type BenefitProductListResponse as BenefitProductListResponse,
    type BenefitProductListParams as BenefitProductListParams,
  };

  export {
    PlanYears as PlanYears,
    type PlanYear as PlanYear,
    type PlanYearResponse as PlanYearResponse,
    type PlanYearStatus as PlanYearStatus,
    type PlanYearListResponse as PlanYearListResponse,
    type PlanYearCreateParams as PlanYearCreateParams,
    type PlanYearListParams as PlanYearListParams,
  };
}
