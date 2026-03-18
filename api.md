# Auth

Types:

- <code><a href="./src/resources/auth.ts">Type</a></code>
- <code><a href="./src/resources/auth.ts">AuthIssueAccessTokenResponse</a></code>

Methods:

- <code title="post /v1/auth/access-tokens">client.auth.<a href="./src/resources/auth.ts">issueAccessToken</a>({ ...params }) -> AuthIssueAccessTokenResponse</code>

# BenefitEligibilityPolicies

Types:

- <code><a href="./src/resources/benefit-eligibility-policies.ts">BenefitEligibilityPolicy</a></code>

Methods:

- <code title="get /v1/benefit-eligibility-policies/{policy_id}">client.benefitEligibilityPolicies.<a href="./src/resources/benefit-eligibility-policies.ts">retrieve</a>(policyID) -> BenefitEligibilityPolicy</code>

# BenefitProducts

Types:

- <code><a href="./src/resources/benefit-products/benefit-products.ts">Category</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">Pagination</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">ProductCode</a></code>

## PlanYears

# Dependents

# Employees

Types:

- <code><a href="./src/resources/employees/employees.ts">Employee</a></code>
- <code><a href="./src/resources/employees/employees.ts">EmployeeClass</a></code>
- <code><a href="./src/resources/employees/employees.ts">EmployeeResponse</a></code>

Methods:

- <code title="get /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees/employees.ts">retrieve</a>(employeeID) -> EmployeeResponse</code>

## Enrollments

Types:

- <code><a href="./src/resources/employees/enrollments.ts">EnrollmentList</a></code>

Methods:

- <code title="get /v1/employees/{employee_id}/enrollments">client.employees.enrollments.<a href="./src/resources/employees/enrollments.ts">list</a>(employeeID, { ...params }) -> EnrollmentList</code>

# Employers

Types:

- <code><a href="./src/resources/employers/employers.ts">Employer</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerResponse</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerListResponse</a></code>

Methods:

- <code title="post /v1/employers">client.employers.<a href="./src/resources/employers/employers.ts">create</a>({ ...params }) -> EmployerResponse</code>
- <code title="get /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers/employers.ts">retrieve</a>(employerID) -> EmployerResponse</code>
- <code title="get /v1/employers">client.employers.<a href="./src/resources/employers/employers.ts">list</a>({ ...params }) -> EmployerListResponse</code>
- <code title="post /v1/employers/{employer_id}/benefit-eligibility-policies">client.employers.<a href="./src/resources/employers/employers.ts">createEligibilityPolicy</a>(employerID, { ...params }) -> BenefitEligibilityPolicy</code>

## Employees

Types:

- <code><a href="./src/resources/employers/employees.ts">EmployeeListResponse</a></code>

Methods:

- <code title="get /v1/employers/{employer_id}/employees">client.employers.employees.<a href="./src/resources/employers/employees.ts">list</a>(employerID, { ...params }) -> EmployeeListResponse</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentResponse</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentStatus</a></code>

Methods:

- <code title="get /v1/enrollments/{enrollment_id}">client.enrollments.<a href="./src/resources/enrollments.ts">retrieve</a>(enrollmentID) -> EnrollmentResponse</code>

# Members

## Dependents

## QualifyingLifeEvents

# PlanYears
