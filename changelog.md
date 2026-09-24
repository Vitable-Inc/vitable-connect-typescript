## 5.0.0 - 2026-09-24
### Breaking Changes
* **`AccessMethod`** has been removed and replaced by `PayrollAccessMethod`. Update any imports or type annotations from `AccessMethod` to `PayrollAccessMethod`; the string values (`SELF_SETUP`, `NEEDS_HELP`) are unchanged.
* **`AdditionalAccessMethod`** has been removed and replaced by `PayrollAccessMethod`. Update any imports or type annotations from `AdditionalAccessMethod` to `PayrollAccessMethod`.
* **`SubmitPayrollAccessSetupRequest.access_method`** type has changed from `AccessMethod` to `PayrollAccessMethod`. Update usages accordingly.
* **`SubmitPayrollAccessSetupRequest.additional_access_method`** type has changed from `AdditionalAccessMethod` to `PayrollAccessMethod`. Update usages accordingly.
* **`BenefitPlanNetwork.address`** type has changed from `Address` to `DetailedAddress`. Callers that type-annotate this field must update to `DetailedAddress`.
### Added
* **`PayrollAccessMethod`** — new consolidated enum replacing the former `AccessMethod` and `AdditionalAccessMethod` enums, with the same `SELF_SETUP` and `NEEDS_HELP` values.
* **`DetailedAddress`** — new interface extending the address shape with optional `latitude`, `longitude`, `county_fips_code`, and `county_name` fields.

## 4.1.0 - 2026-09-22
### Added
* **`MemberEnrollment.enrolled_date`** — new nullable `string | null` field representing the date a member enrolled (YYYY-MM-DD); returns `null` for rows that are not elections.

## 4.0.0 - 2026-09-16
### Breaking Changes
* **`organizations.create()`** has been removed. The `OrganizationsClient` no longer exposes a method to onboard a new partner organization; callers must remove any invocations of this method.
* **`CreateOrganizationRequest`** interface has been removed. Any imports or type annotations referencing this interface must be deleted.
* **`Organization`** type has been removed. Callers that import or annotate with `Organization` must migrate to `OrganizationMembership`, which is the type now returned by the list endpoint.
### Changed
* **`OrganizationType`** enum value display labels have been updated to title-case (e.g. `BROKERAGE` → `Brokerage`, `GENERAL_AGENT` → `General Agent`). The underlying string values are unchanged.

## 3.0.0 - 2026-09-11
### Breaking Changes
* **`CreateOrganizationRequestType`** has been removed. The `type` field on `CreateOrganizationRequest` now uses `OrganizationType` instead. Update any imports or type annotations from `CreateOrganizationRequestType` to `OrganizationType`; the string values (`BROKERAGE`, `TPA`, etc.) are unchanged.
* **`OrganizationsListResponse.organizations`** element type has changed from `Organization` to `OrganizationMembership`. Callers that type-annotate or destructure elements of this array must update to `OrganizationMembership`.
### Added
* **`OrganizationMembership`** — new interface returned in `OrganizationsListResponse.organizations`, extending the organization shape with a `role` field indicating the caller's role in each organization.
* **`OrganizationUserRole`** — new enum with values `ADMIN`, `OPERATIONS`, `SALES`, and `ENROLLMENT_AGENT`, representing the caller's role within an organization.

## 2.1.0 - 2026-09-08
### Added
* **`XVitableOrganization`** — new string type representing the `X-Vitable-Organization` request header, used to scope requests to a specific organization when credentials span multiple organizations.
* **`"X-Vitable-Organization"` header field** — optional property added to all employer, enrollment, and member request interfaces (e.g. `ListEmployersRequest`, `GetEnrollmentsRequest`, `ListMembersRequest`), allowing callers to target a specific organization per request.
* **`ListHrisProvidersEmployersRequest`** — new request interface for the list HRIS providers endpoint, supporting the optional `X-Vitable-Organization` header; passed as an optional parameter to `employers.listHrisProviders()` with no impact on existing call sites.

## 2.0.0 - 2026-09-08
### Breaking Changes
* **`Operation`** has been removed and replaced by **`GroupMemberSyncFailureOperation`**. Update any imports or references from `Operation` to `GroupMemberSyncFailureOperation`; the values (`add`, `remove`) remain the same.
* **`GroupMemberSyncFailure.operation`** now has type `GroupMemberSyncFailureOperation` instead of `Operation`. Callers that type-annotate this field must update the annotation accordingly.

