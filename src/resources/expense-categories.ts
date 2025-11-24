// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ExpenseCategories extends APIResource {
  /**
   * Retrieve expense categories that are eligible for reimbursement based on benefit
   * type code. This endpoint provides the standard expense categories available for
   * different types of benefits (HSA, FSA, HRA, etc.) rather than the specific
   * categories configured for a particular company benefit plan. Useful for
   * understanding general eligibility rules by benefit type.
   */
  list(query: ExpenseCategoryListParams, options?: RequestOptions): APIPromise<ExpenseCategoryListResponse> {
    return this._client.get('/v1/expense-categories', { query, ...options });
  }
}

/**
 * A category of eligible expenses for reimbursement
 */
export interface ExpenseCategory {
  /**
   * Unique identifier for the expense category
   */
  id: string;

  /**
   * Creation timestamp
   */
  created: string;

  /**
   * Name of the expense category (e.g., "Medical", "Dental", "Vision")
   */
  name: string;

  /**
   * Last update timestamp
   */
  updated: string;

  /**
   * Detailed description of what expenses are covered
   */
  description?: string | null;
}

/**
 * Response containing expense categories eligible for a benefit type
 */
export interface ExpenseCategoryListResponse {
  /**
   * List of expense categories eligible for the benefit type
   */
  expense_categories: Array<ExpenseCategory>;
}

export interface ExpenseCategoryListParams {
  /**
   * Benefit type code to filter eligible expense categories:
   *
   * - `EBA` - Employee Benefit Administrator MEC
   * - `VPC` - VPC Enhanced
   * - `VPC_CORE` - VPC Core
   * - `MEC` - VPC MEC
   * - `MEC2` - MEC2
   * - `MEC_PLUS` - MEC Plus
   * - `MVP` - MVP
   * - `MVP2` - MVP2
   * - `MVPSL` - MVPSL
   * - `MVPSL2` - MVPSL2
   * - `VD` - Dental
   * - `VV` - Vision
   * - `ICHRA` - Individual Coverage HRA
   * - `ICHRA_PREMIUM_PLUS` - ICHRA Premium Plus
   */
  benefit_code:
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
    | 'ICHRA_PREMIUM_PLUS';
}

export declare namespace ExpenseCategories {
  export {
    type ExpenseCategory as ExpenseCategory,
    type ExpenseCategoryListResponse as ExpenseCategoryListResponse,
    type ExpenseCategoryListParams as ExpenseCategoryListParams,
  };
}
