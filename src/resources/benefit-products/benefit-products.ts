// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlanYearsAPI from './plan-years';
import { PlanYears } from './plan-years';

export class BenefitProducts extends APIResource {
  planYears: PlanYearsAPI.PlanYears = new PlanYearsAPI.PlanYears(this._client);
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

BenefitProducts.PlanYears = PlanYears;

export declare namespace BenefitProducts {
  export { type Category as Category, type Pagination as Pagination, type ProductCode as ProductCode };

  export { PlanYears as PlanYears };
}
