// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PageNumberPage, type PageNumberPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Plans extends APIResource {
  /**
   * Returns a paginated list of benefit plans linked to the authenticated
   * organization.
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanListResponsesPageNumberPage, PlanListResponse> {
    return this._client.getAPIList('/v1/plans', PageNumberPage<PlanListResponse>, { query, ...options });
  }
}

export type PlanListResponsesPageNumberPage = PageNumberPage<PlanListResponse>;

export interface PlanListResponse {
  id: string;

  name: string;
}

export interface PlanListParams extends PageNumberPageParams {}

export declare namespace Plans {
  export {
    type PlanListResponse as PlanListResponse,
    type PlanListResponsesPageNumberPage as PlanListResponsesPageNumberPage,
    type PlanListParams as PlanListParams,
  };
}
