# BenefitEligibilityPolicy

Types:

- <code><a href="./src/resources/benefit-eligibility-policy.ts">BenefitEligibilityPolicy</a></code>

Methods:

- <code title="get /v1/benefit-eligibility-policy/{policy_id}">client.benefitEligibilityPolicy.<a href="./src/resources/benefit-eligibility-policy.ts">retrieve</a>(policyID) -> BenefitEligibilityPolicy</code>

# BenefitProducts

Types:

- <code><a href="./src/resources/benefit-products/benefit-products.ts">Category</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">ProductCode</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">BenefitProductListResponse</a></code>

Methods:

- <code title="get /v1/benefit-products">client.benefitProducts.<a href="./src/resources/benefit-products/benefit-products.ts">list</a>({ ...params }) -> BenefitProductListResponse</code>

## PlanYears

Types:

- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanYear</a></code>
- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanYearStatus</a></code>
- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanYearListResponse</a></code>

Methods:

- <code title="post /v1/benefit-products/{benefit_product_id}/plan-years">client.benefitProducts.planYears.<a href="./src/resources/benefit-products/plan-years.ts">create</a>(benefitProductID, { ...params }) -> PlanYear</code>
- <code title="get /v1/benefit-products/{benefit_product_id}/plan-years">client.benefitProducts.planYears.<a href="./src/resources/benefit-products/plan-years.ts">list</a>(benefitProductID, { ...params }) -> PlanYearListResponse</code>

# Dependents

Types:

- <code><a href="./src/resources/dependents.ts">Dependent</a></code>
- <code><a href="./src/resources/dependents.ts">Sex</a></code>

Methods:

- <code title="get /v1/dependents/{dependent_id}">client.dependents.<a href="./src/resources/dependents.ts">retrieve</a>(dependentID) -> Dependent</code>
- <code title="put /v1/dependents/{dependent_id}">client.dependents.<a href="./src/resources/dependents.ts">update</a>(dependentID, { ...params }) -> Dependent</code>

# Employees

Types:

- <code><a href="./src/resources/employees/employees.ts">Employee</a></code>

Methods:

- <code title="get /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees/employees.ts">retrieve</a>(employeeID) -> Employee</code>
- <code title="put /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees/employees.ts">update</a>(employeeID, { ...params }) -> Employee</code>
- <code title="delete /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees/employees.ts">terminate</a>(employeeID) -> void</code>

## Enrollments

Types:

- <code><a href="./src/resources/employees/enrollments.ts">EnrollmentStatus</a></code>
- <code><a href="./src/resources/employees/enrollments.ts">EnrollmentListResponse</a></code>
- <code><a href="./src/resources/employees/enrollments.ts">EnrollmentSubmitElectionsResponse</a></code>

Methods:

- <code title="get /v1/employees/{employee_id}/enrollments">client.employees.enrollments.<a href="./src/resources/employees/enrollments.ts">list</a>(employeeID, { ...params }) -> EnrollmentListResponse</code>
- <code title="post /v1/employees/{employee_id}/enrollments/elect">client.employees.enrollments.<a href="./src/resources/employees/enrollments.ts">submitElections</a>(employeeID, { ...params }) -> EnrollmentSubmitElectionsResponse</code>

# Employers

Types:

- <code><a href="./src/resources/employers/employers.ts">Employer</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerListResponse</a></code>

Methods:

- <code title="post /v1/employers">client.employers.<a href="./src/resources/employers/employers.ts">create</a>({ ...params }) -> Employer</code>
- <code title="get /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers/employers.ts">retrieve</a>(employerID) -> Employer</code>
- <code title="put /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers/employers.ts">update</a>(employerID, { ...params }) -> Employer</code>
- <code title="get /v1/employers">client.employers.<a href="./src/resources/employers/employers.ts">list</a>({ ...params }) -> EmployerListResponse</code>
- <code title="post /v1/employers/{employer_id}/benefit-eligibility-policy">client.employers.<a href="./src/resources/employers/employers.ts">createEligibilityPolicy</a>(employerID, { ...params }) -> BenefitEligibilityPolicy</code>

## Employees

Types:

- <code><a href="./src/resources/employers/employees.ts">EmployeeClass</a></code>
- <code><a href="./src/resources/employers/employees.ts">EmployeeListResponse</a></code>

Methods:

- <code title="post /v1/employers/{employer_id}/employees">client.employers.employees.<a href="./src/resources/employers/employees.ts">create</a>(employerID, { ...params }) -> Employee</code>
- <code title="get /v1/employers/{employer_id}/employees">client.employers.employees.<a href="./src/resources/employers/employees.ts">list</a>(employerID, { ...params }) -> EmployeeListResponse</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">CoverageTier</a></code>
- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>
- <code><a href="./src/resources/enrollments.ts">PlanTier</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentListPlansResponse</a></code>

Methods:

- <code title="get /v1/enrollments/{enrollment_id}">client.enrollments.<a href="./src/resources/enrollments.ts">retrieve</a>(enrollmentID) -> Enrollment</code>
- <code title="get /v1/enrollments/{enrollment_id}/plans">client.enrollments.<a href="./src/resources/enrollments.ts">listPlans</a>(enrollmentID) -> EnrollmentListPlansResponse</code>
- <code title="post /v1/enrollments/{enrollment_id}/reissue">client.enrollments.<a href="./src/resources/enrollments.ts">reissue</a>(enrollmentID, { ...params }) -> Enrollment</code>

# Members

## Dependents

Types:

- <code><a href="./src/resources/members/dependents.ts">Relationship</a></code>
- <code><a href="./src/resources/members/dependents.ts">DependentListResponse</a></code>

Methods:

- <code title="post /v1/members/{member_id}/dependents">client.members.dependents.<a href="./src/resources/members/dependents.ts">create</a>(memberID, { ...params }) -> Dependent</code>
- <code title="get /v1/members/{member_id}/dependents">client.members.dependents.<a href="./src/resources/members/dependents.ts">list</a>(memberID, { ...params }) -> DependentListResponse</code>

## QualifyingLifeEvents

Types:

- <code><a href="./src/resources/members/qualifying-life-events.ts">EventType</a></code>
- <code><a href="./src/resources/members/qualifying-life-events.ts">QualifyingLifeEvent</a></code>
- <code><a href="./src/resources/members/qualifying-life-events.ts">QualifyingLifeEventStatus</a></code>
- <code><a href="./src/resources/members/qualifying-life-events.ts">QualifyingLifeEventListResponse</a></code>

Methods:

- <code title="get /v1/members/{member_id}/qualifying-life-events">client.members.qualifyingLifeEvents.<a href="./src/resources/members/qualifying-life-events.ts">list</a>(memberID, { ...params }) -> QualifyingLifeEventListResponse</code>
- <code title="post /v1/members/{member_id}/qualifying-life-events">client.members.qualifyingLifeEvents.<a href="./src/resources/members/qualifying-life-events.ts">record</a>(memberID, { ...params }) -> QualifyingLifeEvent</code>

# PlanYears

Methods:

- <code title="get /v1/plan-years/{plan_year_id}">client.planYears.<a href="./src/resources/plan-years.ts">retrieve</a>(planYearID) -> PlanYear</code>
- <code title="put /v1/plan-years/{plan_year_id}">client.planYears.<a href="./src/resources/plan-years.ts">update</a>(planYearID, { ...params }) -> PlanYear</code>

# QualifyingLifeEvents

Methods:

- <code title="get /v1/qualifying-life-events/{qle_id}">client.qualifyingLifeEvents.<a href="./src/resources/qualifying-life-events.ts">retrieve</a>(qleID) -> QualifyingLifeEvent</code>
