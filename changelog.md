## 2.1.0 - 2026-09-08
### Added
* **`XVitableOrganization`** — new string type representing the `X-Vitable-Organization` request header, used to scope requests to a specific organization when credentials span multiple organizations.
* **`"X-Vitable-Organization"` header field** — optional property added to all employer, enrollment, and member request interfaces (e.g. `ListEmployersRequest`, `GetEnrollmentsRequest`, `ListMembersRequest`), allowing callers to target a specific organization per request.
* **`ListHrisProvidersEmployersRequest`** — new request interface for the list HRIS providers endpoint, supporting the optional `X-Vitable-Organization` header; passed as an optional parameter to `employers.listHrisProviders()` with no impact on existing call sites.

## 2.0.0 - 2026-09-08
### Breaking Changes
* **`Operation`** has been removed and replaced by **`GroupMemberSyncFailureOperation`**. Update any imports or references from `Operation` to `GroupMemberSyncFailureOperation`; the values (`add`, `remove`) remain the same.
* **`GroupMemberSyncFailure.operation`** now has type `GroupMemberSyncFailureOperation` instead of `Operation`. Callers that type-annotate this field must update the annotation accordingly.

