// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthAPI from './auth';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Issues a short-lived access token from the authenticated API key. Access tokens
   * can optionally be bound to a specific employer or employee for scoped access.
   * Tokens expire after 15 minutes.
   *
   * @example
   * ```ts
   * const response = await client.auth.issueAccessToken({
   *   grant_type: 'client_credentials',
   * });
   * ```
   */
  issueAccessToken(
    body: AuthIssueAccessTokenParams,
    options?: RequestOptions,
  ): APIPromise<AuthIssueAccessTokenResponse> {
    return this._client.post('/v1/auth/access-tokens', { body, ...options });
  }
}

/**
 * - `employer` - employer
 * - `employee` - employee
 */
export type Type = 'employer' | 'employee';

export interface AuthIssueAccessTokenResponse {
  /**
   * The issued access token (vit*at*\*)
   */
  access_token: string;

  /**
   * Token lifetime in seconds
   */
  expires_in: number;

  /**
   * Token type, always 'Bearer'
   */
  token_type: string;

  /**
   * Entity the token is bound to, if any
   */
  bound_entity?: AuthIssueAccessTokenResponse.BoundEntity | null;
}

export namespace AuthIssueAccessTokenResponse {
  /**
   * Entity the token is bound to, if any
   */
  export interface BoundEntity {
    /**
     * Prefixed entity ID the token is bound to (empr*\* or empl*\*)
     */
    id: string;

    /**
     * - `employer` - employer
     * - `employee` - employee
     */
    type: AuthAPI.Type;
  }
}

export interface AuthIssueAccessTokenParams {
  /**
   * - `client_credentials` - client_credentials
   */
  grant_type: 'client_credentials';

  /**
   * Optional entity to bind the token to for scoped access
   */
  bound_entity?: AuthIssueAccessTokenParams.BoundEntity | null;
}

export namespace AuthIssueAccessTokenParams {
  /**
   * Optional entity to bind the token to for scoped access
   */
  export interface BoundEntity {
    /**
     * Prefixed entity ID to bind the token to (empr*\* for employer, empl*\* for
     * employee)
     */
    id: string;

    /**
     * - `employer` - employer
     * - `employee` - employee
     */
    type: AuthAPI.Type;
  }
}

export declare namespace Auth {
  export {
    type Type as Type,
    type AuthIssueAccessTokenResponse as AuthIssueAccessTokenResponse,
    type AuthIssueAccessTokenParams as AuthIssueAccessTokenParams,
  };
}
