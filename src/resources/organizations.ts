// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class Organizations extends APIResource {
  /**
   * Onboards the authenticated user's partner Organization: creates the local
   * Organization + the creator's admin membership atomically, then mirrors it to
   * WorkOS (creates the WorkOS org and binds the creator as admin). 409
   * `organization_already_exists` when the user already has an organization (v0: one
   * organization per user).
   *
   * @example
   * ```ts
   * const organization = await client.organizations.create({
   *   name: 'Acme Brokerage',
   *   type: 'BROKERAGE',
   * });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationCreateResponse> {
    return this._client.post(
      '/v1/organizations',
      maybeMultipartFormRequestOptions(
        { body, ...options, __security: { identityProviderBearerAuth: true } },
        this._client,
      ),
    );
  }

  /**
   * Lists the organizations the authenticated caller is an active member of
   * (paginated). Returns an empty list when the caller belongs to no organizations.
   *
   * @example
   * ```ts
   * const organizations = await client.organizations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/v1/organizations', {
      ...options,
      __security: { identityProviderBearerAuth: true },
    });
  }
}

export interface OrganizationCreateResponse {
  /**
   * Prefixed organization identifier (`org_<base64-encoded-uuid>`).
   */
  id: string;

  /**
   * IdP-issued tenant id (WorkOS org id).
   */
  idp_org_id: string | null;

  /**
   * - `workos` - WorkOS
   * - `vitable` - Vitable
   */
  idp_provider: 'workos' | 'vitable' | null;

  /**
   * Human-readable organization name.
   */
  name: string;

  /**
   * Whether this organization reads across every organization.
   */
  super_in: boolean;

  /**
   * - `BROKERAGE` - Brokerage
   * - `TPA` - TPA
   * - `GENERAL_AGENT` - General Agent
   * - `CHANNEL_PARTNER` - Channel Partner
   * - `CONSULTING_FIRM` - Consulting Firm
   * - `API_PLATFORM` - API Platform
   */
  type: 'BROKERAGE' | 'TPA' | 'GENERAL_AGENT' | 'CHANNEL_PARTNER' | 'CONSULTING_FIRM' | 'API_PLATFORM' | null;
}

/**
 * Envelope for the caller's organization memberships (paginated).
 */
export interface OrganizationListResponse {
  organizations: Array<OrganizationListResponse.Organization>;

  /**
   * Total number of organizations the caller belongs to.
   */
  total: number;
}

export namespace OrganizationListResponse {
  export interface Organization {
    /**
     * Prefixed organization identifier (`org_<base64-encoded-uuid>`).
     */
    id: string;

    /**
     * IdP-issued tenant id (WorkOS org id).
     */
    idp_org_id: string | null;

    /**
     * - `workos` - WorkOS
     * - `vitable` - Vitable
     */
    idp_provider: 'workos' | 'vitable' | null;

    /**
     * Human-readable organization name.
     */
    name: string;

    /**
     * Whether this organization reads across every organization.
     */
    super_in: boolean;

    /**
     * - `BROKERAGE` - Brokerage
     * - `TPA` - TPA
     * - `GENERAL_AGENT` - General Agent
     * - `CHANNEL_PARTNER` - Channel Partner
     * - `CONSULTING_FIRM` - Consulting Firm
     * - `API_PLATFORM` - API Platform
     */
    type:
      | 'BROKERAGE'
      | 'TPA'
      | 'GENERAL_AGENT'
      | 'CHANNEL_PARTNER'
      | 'CONSULTING_FIRM'
      | 'API_PLATFORM'
      | null;
  }
}

export interface OrganizationCreateParams {
  name: string;

  /**
   * - `BROKERAGE` - BROKERAGE
   * - `TPA` - TPA
   * - `GENERAL_AGENT` - GENERAL_AGENT
   * - `CHANNEL_PARTNER` - CHANNEL_PARTNER
   * - `CONSULTING_FIRM` - CONSULTING_FIRM
   * - `API_PLATFORM` - API_PLATFORM
   */
  type?:
    | 'BROKERAGE'
    | 'TPA'
    | 'GENERAL_AGENT'
    | 'CHANNEL_PARTNER'
    | 'CONSULTING_FIRM'
    | 'API_PLATFORM'
    | null;
}

export declare namespace Organizations {
  export {
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
  };
}
