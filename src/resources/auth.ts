// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class Auth extends APIResource {
  /**
   * Collects the required profile fields (first_name, last_name, phone) for a
   * verified IdP identity and provisions the asclepius user: creates the BaseUser
   * (of the app-context's user_type, with the real phone) + the OrganizationUser
   * persona (name). An optional `user_type` narrows provisioning/resolution to a
   * single persona type. When a same-email account already exists (verified email)
   * it links + finishes that account instead. Returns the auth session. Domain
   * failures surface as the normalized error envelope with an `app_error_code`: 403
   * `email_verification_required` / `user_type_not_allowed`; 409 `identity_conflict`
   * / `needs_selection` (fetch candidates via `/personas`); 422 `invalid_phone`.
   *
   * @example
   * ```ts
   * const response = await client.auth.completeProfile({
   *   first_name: 'first_name',
   *   last_name: 'last_name',
   *   phone: 'phone',
   * });
   * ```
   */
  completeProfile(
    body: AuthCompleteProfileParams,
    options?: RequestOptions,
  ): APIPromise<AuthCompleteProfileResponse> {
    return this._client.post(
      '/v1/auth/complete-profile',
      maybeMultipartFormRequestOptions({ body, ...options, __security: {} }, this._client),
    );
  }

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

  /**
   * Returns the personas linked to the bearer's IdP identity that the current
   * application is allowed to serve — the candidate set for a 'continue as'
   * selection when sign-up returns `needs_selection`. Single-type apps usually get 0
   * or 1 entry.
   *
   * @example
   * ```ts
   * const response = await client.auth.listPersonas();
   * ```
   */
  listPersonas(options?: RequestOptions): APIPromise<AuthListPersonasResponse> {
    return this._client.get('/v1/auth/personas', { ...options, __security: {} });
  }

  /**
   * One body-driven sign-in endpoint. Supply `email_or_phone` + `password` for the
   * standard flow, or `email_or_phone` (no password) for the passwordless OTP flow.
   * When the account has MFA enabled — or on the first passwordless step — an OTP
   * challenge is issued and the response is a 200
   * `{"pending_2fa": true, "destination_hint": "…"}`; resubmit the same credentials
   * plus `two_factor_token` to complete sign-in and receive a session with a freshly
   * minted access/refresh token pair. Domain failures surface as the normalized
   * error envelope with an `app_error_code`: 401 `invalid_credentials`; 403
   * `user_type_not_allowed` or `auth_user_disabled`; 409 `no_organization`; 429
   * `otp_cooldown`.
   *
   * @example
   * ```ts
   * const response = await client.auth.login({
   *   email_or_phone: 'email_or_phone',
   *   user_type: 'Member',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post(
      '/v1/auth/login',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns the authenticated caller's IdP identity (email, name, provider).
   * Identity-only — no persona (persona selection is `/v1/auth/personas`);
   * organization membership and companies are fetched via dedicated endpoints.
   *
   * @example
   * ```ts
   * const response = await client.auth.retrieveMe();
   * ```
   */
  retrieveMe(options?: RequestOptions): APIPromise<AuthRetrieveMeResponse> {
    return this._client.get('/v1/auth/me', { ...options, __security: {} });
  }

  /**
   * Validates the IdP bearer and resolves the session. An optional `user_type` body
   * field pins resolution to a single persona (strict login). Domain failures
   * surface as the normalized error envelope with an `app_error_code`: 409
   * `profile_required` (no BaseUser yet) / `no_organization` / `needs_selection`
   * (fetch candidates via `/personas`) / `identity_conflict`; 403
   * `email_verification_required` / `user_type_not_allowed`; 404
   * `persona_not_found`.
   *
   * @example
   * ```ts
   * const response = await client.auth.signUp();
   * ```
   */
  signUp(
    body: AuthSignUpParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthSignUpResponse> {
    return this._client.post(
      '/v1/auth/sign-up',
      maybeMultipartFormRequestOptions({ body, ...options, __security: {} }, this._client),
    );
  }
}

export interface AuthCompleteProfileResponse {
  user: AuthCompleteProfileResponse.User;
}

export namespace AuthCompleteProfileResponse {
  export interface User {
    base_user_id: string;

    email: string;

    first_name: string | null;

    /**
     * - `workos` - WorkOS
     * - `vitable` - Vitable
     */
    idp_provider: 'workos' | 'vitable';

    idp_user_id: string;

    last_name: string | null;

    phone: string | null;

    /**
     * - `Member` - Member
     * - `NursePractitioner` - Provider
     * - `CompanyAdmin` - Company Admin
     * - `VitableAdmin` - Vitable Admin
     * - `ClinicalAdmin` - Clinical Admin
     * - `PartnerEmployee` - Partner Employee
     * - `OrganizationUser` - Organization User
     * - `ExternalAdmin` - External Admin
     */
    user_type:
      | 'Member'
      | 'NursePractitioner'
      | 'CompanyAdmin'
      | 'VitableAdmin'
      | 'ClinicalAdmin'
      | 'PartnerEmployee'
      | 'OrganizationUser'
      | 'ExternalAdmin';
  }
}

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
    type: 'employer' | 'employee';
  }
}

export type AuthListPersonasResponse = Array<AuthListPersonasResponse.AuthListPersonasResponseItem>;

export namespace AuthListPersonasResponse {
  export interface AuthListPersonasResponseItem {
    display_name: string;

    /**
     * - `Member` - Member
     * - `NursePractitioner` - Provider
     * - `CompanyAdmin` - Company Admin
     * - `VitableAdmin` - Vitable Admin
     * - `ClinicalAdmin` - Clinical Admin
     * - `PartnerEmployee` - Partner Employee
     * - `OrganizationUser` - Organization User
     * - `ExternalAdmin` - External Admin
     */
    user_type:
      | 'Member'
      | 'NursePractitioner'
      | 'CompanyAdmin'
      | 'VitableAdmin'
      | 'ClinicalAdmin'
      | 'PartnerEmployee'
      | 'OrganizationUser'
      | 'ExternalAdmin';
  }
}

export interface AuthLoginResponse {
  access_token: string;

  refresh_token: string;

  user: AuthLoginResponse.User;
}

export namespace AuthLoginResponse {
  export interface User {
    base_user_id: string;

    email: string;

    first_name: string | null;

    /**
     * - `workos` - WorkOS
     * - `vitable` - Vitable
     */
    idp_provider: 'workos' | 'vitable';

    idp_user_id: string;

    last_name: string | null;

    phone: string | null;

    /**
     * - `Member` - Member
     * - `NursePractitioner` - Provider
     * - `CompanyAdmin` - Company Admin
     * - `VitableAdmin` - Vitable Admin
     * - `ClinicalAdmin` - Clinical Admin
     * - `PartnerEmployee` - Partner Employee
     * - `OrganizationUser` - Organization User
     * - `ExternalAdmin` - External Admin
     */
    user_type:
      | 'Member'
      | 'NursePractitioner'
      | 'CompanyAdmin'
      | 'VitableAdmin'
      | 'ClinicalAdmin'
      | 'PartnerEmployee'
      | 'OrganizationUser'
      | 'ExternalAdmin';
  }
}

export interface AuthRetrieveMeResponse {
  /**
   * The authenticated IdP identity — no persona (no base_user_id / user_type).
   */
  user: AuthRetrieveMeResponse.User;
}

export namespace AuthRetrieveMeResponse {
  /**
   * The authenticated IdP identity — no persona (no base_user_id / user_type).
   */
  export interface User {
    email: string;

    first_name: string | null;

    idp_provider: string;

    idp_user_id: string;

    last_name: string | null;
  }
}

export interface AuthSignUpResponse {
  user: AuthSignUpResponse.User;
}

export namespace AuthSignUpResponse {
  export interface User {
    base_user_id: string;

    email: string;

    first_name: string | null;

    /**
     * - `workos` - WorkOS
     * - `vitable` - Vitable
     */
    idp_provider: 'workos' | 'vitable';

    idp_user_id: string;

    last_name: string | null;

    phone: string | null;

    /**
     * - `Member` - Member
     * - `NursePractitioner` - Provider
     * - `CompanyAdmin` - Company Admin
     * - `VitableAdmin` - Vitable Admin
     * - `ClinicalAdmin` - Clinical Admin
     * - `PartnerEmployee` - Partner Employee
     * - `OrganizationUser` - Organization User
     * - `ExternalAdmin` - External Admin
     */
    user_type:
      | 'Member'
      | 'NursePractitioner'
      | 'CompanyAdmin'
      | 'VitableAdmin'
      | 'ClinicalAdmin'
      | 'PartnerEmployee'
      | 'OrganizationUser'
      | 'ExternalAdmin';
  }
}

export interface AuthCompleteProfileParams {
  first_name: string;

  last_name: string;

  phone: string;

  /**
   * - `Member` - Member
   * - `NursePractitioner` - Provider
   * - `CompanyAdmin` - Company Admin
   * - `VitableAdmin` - Vitable Admin
   * - `ClinicalAdmin` - Clinical Admin
   * - `PartnerEmployee` - Partner Employee
   * - `OrganizationUser` - Organization User
   * - `ExternalAdmin` - External Admin
   */
  user_type?:
    | 'Member'
    | 'NursePractitioner'
    | 'CompanyAdmin'
    | 'VitableAdmin'
    | 'ClinicalAdmin'
    | 'PartnerEmployee'
    | 'OrganizationUser'
    | 'ExternalAdmin';
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
    type: 'employer' | 'employee';
  }
}

export interface AuthLoginParams {
  email_or_phone: string;

  /**
   * - `Member` - Member
   * - `NursePractitioner` - Provider
   * - `CompanyAdmin` - Company Admin
   * - `VitableAdmin` - Vitable Admin
   * - `ClinicalAdmin` - Clinical Admin
   * - `PartnerEmployee` - Partner Employee
   * - `OrganizationUser` - Organization User
   * - `ExternalAdmin` - External Admin
   */
  user_type:
    | 'Member'
    | 'NursePractitioner'
    | 'CompanyAdmin'
    | 'VitableAdmin'
    | 'ClinicalAdmin'
    | 'PartnerEmployee'
    | 'OrganizationUser'
    | 'ExternalAdmin';

  app_name?: string;

  app_version?: string;

  password?: string;

  two_factor_token?: string;
}

export interface AuthSignUpParams {
  /**
   * - `Member` - Member
   * - `NursePractitioner` - NursePractitioner
   * - `CompanyAdmin` - CompanyAdmin
   * - `VitableAdmin` - VitableAdmin
   * - `ClinicalAdmin` - ClinicalAdmin
   * - `PartnerEmployee` - PartnerEmployee
   * - `OrganizationUser` - OrganizationUser
   * - `ExternalAdmin` - ExternalAdmin
   */
  user_type?:
    | 'Member'
    | 'NursePractitioner'
    | 'CompanyAdmin'
    | 'VitableAdmin'
    | 'ClinicalAdmin'
    | 'PartnerEmployee'
    | 'OrganizationUser'
    | 'ExternalAdmin'
    | null;
}

export declare namespace Auth {
  export {
    type AuthCompleteProfileResponse as AuthCompleteProfileResponse,
    type AuthIssueAccessTokenResponse as AuthIssueAccessTokenResponse,
    type AuthListPersonasResponse as AuthListPersonasResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthRetrieveMeResponse as AuthRetrieveMeResponse,
    type AuthSignUpResponse as AuthSignUpResponse,
    type AuthCompleteProfileParams as AuthCompleteProfileParams,
    type AuthIssueAccessTokenParams as AuthIssueAccessTokenParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthSignUpParams as AuthSignUpParams,
  };
}
