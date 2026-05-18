// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MembersAPI from './members/members';
import { Members } from './members/members';
import { APIPromise } from '../../core/api-promise';
import { PageNumberPage, type PageNumberPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);

  /**
   * Creates a new group scoped to the authenticated organization.
   *
   * @example
   * ```ts
   * const groupResponse = await client.groups.create({
   *   external_reference_id: 'x',
   *   name: 'x',
   * });
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<GroupResponse> {
    return this._client.post('/v1/groups', { body, ...options });
  }

  /**
   * Retrieves a single group by its prefixed ID. Returns 404 if the group does not
   * belong to the authenticated organization.
   *
   * @example
   * ```ts
   * const groupResponse = await client.groups.retrieve(
   *   'grp_abc123def456',
   * );
   * ```
   */
  retrieve(groupID: string, options?: RequestOptions): APIPromise<GroupResponse> {
    return this._client.get(path`/v1/groups/${groupID}`, options);
  }

  /**
   * Partially updates a group's name or external reference ID. Returns 404 if the
   * group does not belong to the authenticated organization.
   *
   * @example
   * ```ts
   * const groupResponse = await client.groups.update(
   *   'grp_abc123def456',
   * );
   * ```
   */
  update(
    groupID: string,
    body: GroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupResponse> {
    return this._client.patch(path`/v1/groups/${groupID}`, { body, ...options });
  }

  /**
   * Returns a paginated list of groups belonging to the authenticated organization.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const group of client.groups.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GroupsPageNumberPage, Group> {
    return this._client.getAPIList('/v1/groups', PageNumberPage<Group>, { query, ...options });
  }
}

export type GroupsPageNumberPage = PageNumberPage<Group>;

export interface Group {
  id: string;

  created_at: string | null;

  external_reference_id: string;

  name: string;

  organization_id: string;

  updated_at: string | null;
}

/**
 * Response containing a single group resource.
 */
export interface GroupResponse {
  data: Group;
}

export interface GroupCreateParams {
  external_reference_id: string;

  name: string;
}

export interface GroupUpdateParams {
  external_reference_id?: string | null;

  name?: string | null;
}

export interface GroupListParams extends PageNumberPageParams {}

Groups.Members = Members;

export declare namespace Groups {
  export {
    type Group as Group,
    type GroupResponse as GroupResponse,
    type GroupsPageNumberPage as GroupsPageNumberPage,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };

  export { Members as Members };
}
