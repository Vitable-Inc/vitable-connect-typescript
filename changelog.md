## 2.0.0 - 2026-09-08
### Breaking Changes
* **`Operation`** has been removed and replaced by **`GroupMemberSyncFailureOperation`**. Update any imports or references from `Operation` to `GroupMemberSyncFailureOperation`; the values (`add`, `remove`) remain the same.
* **`GroupMemberSyncFailure.operation`** now has type `GroupMemberSyncFailureOperation` instead of `Operation`. Callers that type-annotate this field must update the annotation accordingly.

