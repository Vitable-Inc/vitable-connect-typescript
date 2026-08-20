# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthCompleteProfileResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthIssueAccessTokenResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthListPersonasResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRetrieveMeResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthSignUpResponse</a></code>

Methods:

- <code title="post /v1/auth/complete-profile">client.auth.<a href="./src/resources/auth.ts">completeProfile</a>({ ...params }) -> AuthCompleteProfileResponse</code>
- <code title="post /v1/auth/access-tokens">client.auth.<a href="./src/resources/auth.ts">issueAccessToken</a>({ ...params }) -> AuthIssueAccessTokenResponse</code>
- <code title="get /v1/auth/personas">client.auth.<a href="./src/resources/auth.ts">listPersonas</a>() -> AuthListPersonasResponse</code>
- <code title="post /v1/auth/login">client.auth.<a href="./src/resources/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="get /v1/auth/me">client.auth.<a href="./src/resources/auth.ts">retrieveMe</a>() -> AuthRetrieveMeResponse</code>
- <code title="post /v1/auth/sign-up">client.auth.<a href="./src/resources/auth.ts">signUp</a>({ ...params }) -> AuthSignUpResponse</code>

# Employees

Types:

- <code><a href="./src/resources/employees.ts">Employee</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeClass</a></code>
- <code><a href="./src/resources/employees.ts">Pagination</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeRetrieveResponse</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeUpdateResponse</a></code>

Methods:

- <code title="get /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees.ts">retrieve</a>(employeeID) -> EmployeeRetrieveResponse</code>
- <code title="patch /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees.ts">update</a>(employeeID, { ...params }) -> EmployeeUpdateResponse</code>
- <code title="get /v1/employees/{employee_id}/enrollments">client.employees.<a href="./src/resources/employees.ts">listEnrollments</a>(employeeID, { ...params }) -> EnrollmentsPageNumberPage</code>

# Employers

Types:

- <code><a href="./src/resources/employers.ts">Employer</a></code>
- <code><a href="./src/resources/employers.ts">EmployerResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerListResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerEnsurePayrollIntegrationEmailResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerListBenefitPlanYearEnrollmentsResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerListBenefitPlanYearsResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerListHRISProvidersResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerListInvoicesResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerListPayrollDeductionStatementsResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerRetrieveBenefitPlanYearResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerRetrieveHRISResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerRetrieveInvoicePdfResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerRetrievePayrollAccessSetupResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerSubmitCensusSyncResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerSubmitPayrollAccessSetupResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerUpdateSettingsResponse</a></code>

Methods:

- <code title="post /v1/employers">client.employers.<a href="./src/resources/employers.ts">create</a>({ ...params }) -> EmployerResponse</code>
- <code title="get /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers.ts">retrieve</a>(employerID) -> EmployerResponse</code>
- <code title="put /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers.ts">update</a>(employerID, { ...params }) -> EmployerResponse</code>
- <code title="get /v1/employers">client.employers.<a href="./src/resources/employers.ts">list</a>({ ...params }) -> EmployerListResponsesPageNumberPage</code>
- <code title="put /v1/employers/{employer_id}/payroll-integration-email">client.employers.<a href="./src/resources/employers.ts">ensurePayrollIntegrationEmail</a>(employerID) -> EmployerEnsurePayrollIntegrationEmailResponse</code>
- <code title="get /v1/employers/{employer_id}/benefit-plan-years/{benefit_plan_year_id}/enrollments">client.employers.<a href="./src/resources/employers.ts">listBenefitPlanYearEnrollments</a>(benefitPlanYearID, { ...params }) -> EmployerListBenefitPlanYearEnrollmentsResponsesPageNumberPage</code>
- <code title="get /v1/employers/{employer_id}/benefit-plan-years">client.employers.<a href="./src/resources/employers.ts">listBenefitPlanYears</a>(employerID) -> EmployerListBenefitPlanYearsResponse</code>
- <code title="get /v1/employers/{employer_id}/employees">client.employers.<a href="./src/resources/employers.ts">listEmployees</a>(employerID, { ...params }) -> EmployeesPageNumberPage</code>
- <code title="get /v1/employers/hris-providers">client.employers.<a href="./src/resources/employers.ts">listHRISProviders</a>() -> EmployerListHRISProvidersResponse</code>
- <code title="get /v1/employers/{employer_id}/invoices">client.employers.<a href="./src/resources/employers.ts">listInvoices</a>(employerID, { ...params }) -> EmployerListInvoicesResponse</code>
- <code title="get /v1/employers/{employer_id}/payroll-deduction-statements">client.employers.<a href="./src/resources/employers.ts">listPayrollDeductionStatements</a>(employerID, { ...params }) -> EmployerListPayrollDeductionStatementsResponsesPageNumberPage</code>
- <code title="get /v1/employers/{employer_id}/benefit-plan-years/{benefit_plan_year_id}">client.employers.<a href="./src/resources/employers.ts">retrieveBenefitPlanYear</a>(benefitPlanYearID, { ...params }) -> EmployerRetrieveBenefitPlanYearResponse</code>
- <code title="get /v1/employers/{employer_id}/hris">client.employers.<a href="./src/resources/employers.ts">retrieveHRIS</a>(employerID) -> EmployerRetrieveHRISResponse</code>
- <code title="get /v1/employers/{employer_id}/invoices/{invoice_id}/pdf">client.employers.<a href="./src/resources/employers.ts">retrieveInvoicePdf</a>(invoiceID, { ...params }) -> EmployerRetrieveInvoicePdfResponse</code>
- <code title="get /v1/employers/{employer_id}/payroll-access-setup">client.employers.<a href="./src/resources/employers.ts">retrievePayrollAccessSetup</a>(employerID) -> EmployerRetrievePayrollAccessSetupResponse</code>
- <code title="post /v1/employers/{employer_id}/census-sync">client.employers.<a href="./src/resources/employers.ts">submitCensusSync</a>(employerID, { ...params }) -> EmployerSubmitCensusSyncResponse</code>
- <code title="put /v1/employers/{employer_id}/payroll-access-setup">client.employers.<a href="./src/resources/employers.ts">submitPayrollAccessSetup</a>(employerID, { ...params }) -> EmployerSubmitPayrollAccessSetupResponse</code>
- <code title="put /v1/employers/{employer_id}/settings">client.employers.<a href="./src/resources/employers.ts">updateSettings</a>(employerID, { ...params }) -> EmployerUpdateSettingsResponse</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentStatus</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentRetrieveResponse</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentReissueResponse</a></code>

Methods:

- <code title="get /v1/enrollments/{enrollment_id}">client.enrollments.<a href="./src/resources/enrollments.ts">retrieve</a>(enrollmentID) -> EnrollmentRetrieveResponse</code>
- <code title="post /v1/enrollments/{enrollment_id}/reissue">client.enrollments.<a href="./src/resources/enrollments.ts">reissue</a>(enrollmentID, { ...params }) -> EnrollmentReissueResponse</code>
- <code title="post /v1/enrollments/{enrollment_id}/terminate">client.enrollments.<a href="./src/resources/enrollments.ts">terminate</a>(enrollmentID, { ...params }) -> void</code>

# WebhookEvents

Types:

- <code><a href="./src/resources/webhook-events.ts">WebhookEvent</a></code>
- <code><a href="./src/resources/webhook-events.ts">WebhookEventRetrieveResponse</a></code>
- <code><a href="./src/resources/webhook-events.ts">WebhookEventListDeliveriesResponse</a></code>

Methods:

- <code title="get /v1/webhook-events/{event_id}">client.webhookEvents.<a href="./src/resources/webhook-events.ts">retrieve</a>(eventID) -> WebhookEventRetrieveResponse</code>
- <code title="get /v1/webhook-events">client.webhookEvents.<a href="./src/resources/webhook-events.ts">list</a>({ ...params }) -> WebhookEventsPageNumberPage</code>
- <code title="get /v1/webhook-events/{event_id}/deliveries">client.webhookEvents.<a href="./src/resources/webhook-events.ts">listDeliveries</a>(eventID) -> WebhookEventListDeliveriesResponse</code>

# Groups

Types:

- <code><a href="./src/resources/groups/groups.ts">Group</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupResponse</a></code>

Methods:

- <code title="post /v1/groups">client.groups.<a href="./src/resources/groups/groups.ts">create</a>({ ...params }) -> GroupResponse</code>
- <code title="get /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">retrieve</a>(groupID) -> GroupResponse</code>
- <code title="patch /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">update</a>(groupID, { ...params }) -> GroupResponse</code>
- <code title="get /v1/groups">client.groups.<a href="./src/resources/groups/groups.ts">list</a>({ ...params }) -> GroupsPageNumberPage</code>

## Members

### Sync

Types:

- <code><a href="./src/resources/groups/members/sync.ts">SyncRetrieveResponse</a></code>
- <code><a href="./src/resources/groups/members/sync.ts">SyncSubmitResponse</a></code>

Methods:

- <code title="get /v1/groups/{group_id}/members/sync/{request_id}">client.groups.members.sync.<a href="./src/resources/groups/members/sync.ts">retrieve</a>(requestID, { ...params }) -> SyncRetrieveResponse</code>
- <code title="post /v1/groups/{group_id}/members/sync">client.groups.members.sync.<a href="./src/resources/groups/members/sync.ts">submit</a>(groupID, { ...params }) -> SyncSubmitResponse</code>

# Members

Types:

- <code><a href="./src/resources/members.ts">MemberRetrieveResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListDependentsResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListEmploymentsResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListEnrollmentsResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListIDCardsResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListQualifyingLifeEventsResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberRetrieveHouseholdResponse</a></code>

Methods:

- <code title="get /v1/members/{member_id}">client.members.<a href="./src/resources/members.ts">retrieve</a>(memberID) -> MemberRetrieveResponse</code>
- <code title="get /v2/members">client.members.<a href="./src/resources/members.ts">list</a>({ ...params }) -> MemberListResponsesPageNumberPage</code>
- <code title="get /v1/members/{member_id}/dependents">client.members.<a href="./src/resources/members.ts">listDependents</a>(memberID) -> MemberListDependentsResponse</code>
- <code title="get /v1/members/{member_id}/employments">client.members.<a href="./src/resources/members.ts">listEmployments</a>(memberID) -> MemberListEmploymentsResponse</code>
- <code title="get /v1/members/{member_id}/enrollments">client.members.<a href="./src/resources/members.ts">listEnrollments</a>(memberID) -> MemberListEnrollmentsResponse</code>
- <code title="get /v1/members/{member_id}/id-cards">client.members.<a href="./src/resources/members.ts">listIDCards</a>(memberID) -> MemberListIDCardsResponse</code>
- <code title="get /v1/members/{member_id}/qualifying-life-events">client.members.<a href="./src/resources/members.ts">listQualifyingLifeEvents</a>(memberID, { ...params }) -> MemberListQualifyingLifeEventsResponsesPageNumberPage</code>
- <code title="get /v1/members/{member_id}/household">client.members.<a href="./src/resources/members.ts">retrieveHousehold</a>(memberID) -> MemberRetrieveHouseholdResponse</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">OrganizationCreateResponse</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="post /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> OrganizationCreateResponse</code>
- <code title="get /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">list</a>() -> OrganizationListResponse</code>

# Plans

Types:

- <code><a href="./src/resources/plans.ts">PlanListResponse</a></code>

Methods:

- <code title="get /v1/plans">client.plans.<a href="./src/resources/plans.ts">list</a>({ ...params }) -> PlanListResponsesPageNumberPage</code>
