# Auth

Types:

- <code><a href="./src/resources/auth.ts">Type</a></code>
- <code><a href="./src/resources/auth.ts">AuthIssueAccessTokenResponse</a></code>

Methods:

- <code title="post /v1/auth/access-tokens">client.auth.<a href="./src/resources/auth.ts">issueAccessToken</a>({ ...params }) -> AuthIssueAccessTokenResponse</code>

# BenefitEligibilityPolicies

Types:

- <code><a href="./src/resources/benefit-eligibility-policies.ts">BenefitEligibilityPolicy</a></code>
- <code><a href="./src/resources/benefit-eligibility-policies.ts">BenefitEligibilityPolicyResponse</a></code>

Methods:

- <code title="get /v1/benefit-eligibility-policies/{policy_id}">client.benefitEligibilityPolicies.<a href="./src/resources/benefit-eligibility-policies.ts">retrieve</a>(policyID) -> BenefitEligibilityPolicyResponse</code>

# Employees

Types:

- <code><a href="./src/resources/employees.ts">Employee</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeClass</a></code>
- <code><a href="./src/resources/employees.ts">Pagination</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeRetrieveResponse</a></code>

Methods:

- <code title="get /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees.ts">retrieve</a>(employeeID) -> EmployeeRetrieveResponse</code>
- <code title="get /v1/employees/{employee_id}/enrollments">client.employees.<a href="./src/resources/employees.ts">listEnrollments</a>(employeeID, { ...params }) -> EnrollmentsPageNumberPage</code>

# Employers

Types:

- <code><a href="./src/resources/employers.ts">Employer</a></code>
- <code><a href="./src/resources/employers.ts">EmployerResponse</a></code>
- <code><a href="./src/resources/employers.ts">EmployerSubmitCensusSyncResponse</a></code>

Methods:

- <code title="post /v1/employers">client.employers.<a href="./src/resources/employers.ts">create</a>({ ...params }) -> EmployerResponse</code>
- <code title="get /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers.ts">retrieve</a>(employerID) -> EmployerResponse</code>
- <code title="get /v1/employers">client.employers.<a href="./src/resources/employers.ts">list</a>({ ...params }) -> EmployersPageNumberPage</code>
- <code title="post /v1/employers/{employer_id}/benefit-eligibility-policies">client.employers.<a href="./src/resources/employers.ts">createBenefitEligibilityPolicy</a>(employerID, { ...params }) -> BenefitEligibilityPolicyResponse</code>
- <code title="get /v1/employers/{employer_id}/employees">client.employers.<a href="./src/resources/employers.ts">listEmployees</a>(employerID, { ...params }) -> EmployeesPageNumberPage</code>
- <code title="post /v1/employers/{employer_id}/census-sync">client.employers.<a href="./src/resources/employers.ts">submitCensusSync</a>(employerID, { ...params }) -> EmployerSubmitCensusSyncResponse</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentStatus</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentRetrieveResponse</a></code>

Methods:

- <code title="get /v1/enrollments/{enrollment_id}">client.enrollments.<a href="./src/resources/enrollments.ts">retrieve</a>(enrollmentID) -> EnrollmentRetrieveResponse</code>
