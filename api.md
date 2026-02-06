# BenefitEligibilityPolicy

Types:

- <code><a href="./src/resources/benefit-eligibility-policy.ts">BenefitEligibilityPolicy</a></code>

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
- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanYearCreateResponse</a></code>
- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanYearListResponse</a></code>

Methods:

- <code title="post /v1/benefit-products/{benefit_product_id}/plan-years">client.benefitProducts.planYears.<a href="./src/resources/benefit-products/plan-years.ts">create</a>(benefitProductID, { ...params }) -> PlanYearCreateResponse</code>
- <code title="get /v1/benefit-products/{benefit_product_id}/plan-years">client.benefitProducts.planYears.<a href="./src/resources/benefit-products/plan-years.ts">list</a>(benefitProductID, { ...params }) -> PlanYearListResponse</code>

# Dependents

Types:

- <code><a href="./src/resources/dependents.ts">Dependent</a></code>
- <code><a href="./src/resources/dependents.ts">Sex</a></code>
- <code><a href="./src/resources/dependents.ts">DependentRetrieveResponse</a></code>
- <code><a href="./src/resources/dependents.ts">DependentUpdateResponse</a></code>

Methods:

- <code title="get /v1/dependents/{dependent_id}">client.dependents.<a href="./src/resources/dependents.ts">retrieve</a>(dependentID) -> DependentRetrieveResponse</code>
- <code title="put /v1/dependents/{dependent_id}">client.dependents.<a href="./src/resources/dependents.ts">update</a>(dependentID, { ...params }) -> DependentUpdateResponse</code>

# Employees

Types:

- <code><a href="./src/resources/employees/employees.ts">Employee</a></code>
- <code><a href="./src/resources/employees/employees.ts">EmployeeRetrieveResponse</a></code>
- <code><a href="./src/resources/employees/employees.ts">EmployeeUpdateResponse</a></code>

Methods:

- <code title="get /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees/employees.ts">retrieve</a>(employeeID) -> EmployeeRetrieveResponse</code>
- <code title="put /v1/employees/{employee_id}">client.employees.<a href="./src/resources/employees/employees.ts">update</a>(employeeID, { ...params }) -> EmployeeUpdateResponse</code>
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
- <code><a href="./src/resources/employers/employers.ts">EmployerCreateResponse</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerRetrieveResponse</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerUpdateResponse</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerListResponse</a></code>

Methods:

- <code title="post /v1/employers">client.employers.<a href="./src/resources/employers/employers.ts">create</a>({ ...params }) -> EmployerCreateResponse</code>
- <code title="get /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers/employers.ts">retrieve</a>(employerID) -> EmployerRetrieveResponse</code>
- <code title="put /v1/employers/{employer_id}">client.employers.<a href="./src/resources/employers/employers.ts">update</a>(employerID, { ...params }) -> EmployerUpdateResponse</code>
- <code title="get /v1/employers">client.employers.<a href="./src/resources/employers/employers.ts">list</a>({ ...params }) -> EmployerListResponse</code>

## Employees

Types:

- <code><a href="./src/resources/employers/employees.ts">EmployeeClass</a></code>
- <code><a href="./src/resources/employers/employees.ts">EmployeeCreateResponse</a></code>
- <code><a href="./src/resources/employers/employees.ts">EmployeeListResponse</a></code>

Methods:

- <code title="post /v1/employers/{employer_id}/employees">client.employers.employees.<a href="./src/resources/employers/employees.ts">create</a>(employerID, { ...params }) -> EmployeeCreateResponse</code>
- <code title="get /v1/employers/{employer_id}/employees">client.employers.employees.<a href="./src/resources/employers/employees.ts">list</a>(employerID, { ...params }) -> EmployeeListResponse</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">CoverageTier</a></code>
- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>
- <code><a href="./src/resources/enrollments.ts">PlanTier</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentRetrieveResponse</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentListPlansResponse</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentReissueResponse</a></code>

Methods:

- <code title="get /v1/enrollments/{enrollment_id}">client.enrollments.<a href="./src/resources/enrollments.ts">retrieve</a>(enrollmentID) -> EnrollmentRetrieveResponse</code>
- <code title="get /v1/enrollments/{enrollment_id}/plans">client.enrollments.<a href="./src/resources/enrollments.ts">listPlans</a>(enrollmentID) -> EnrollmentListPlansResponse</code>
- <code title="post /v1/enrollments/{enrollment_id}/reissue">client.enrollments.<a href="./src/resources/enrollments.ts">reissue</a>(enrollmentID, { ...params }) -> EnrollmentReissueResponse</code>

# Members

## Dependents

Types:

- <code><a href="./src/resources/members/dependents.ts">Relationship</a></code>
- <code><a href="./src/resources/members/dependents.ts">DependentCreateResponse</a></code>
- <code><a href="./src/resources/members/dependents.ts">DependentListResponse</a></code>

Methods:

- <code title="post /v1/members/{member_id}/dependents">client.members.dependents.<a href="./src/resources/members/dependents.ts">create</a>(memberID, { ...params }) -> DependentCreateResponse</code>
- <code title="get /v1/members/{member_id}/dependents">client.members.dependents.<a href="./src/resources/members/dependents.ts">list</a>(memberID, { ...params }) -> DependentListResponse</code>

## QualifyingLifeEvents

Types:

- <code><a href="./src/resources/members/qualifying-life-events.ts">EventType</a></code>
- <code><a href="./src/resources/members/qualifying-life-events.ts">QualifyingLifeEvent</a></code>
- <code><a href="./src/resources/members/qualifying-life-events.ts">QualifyingLifeEventStatus</a></code>
- <code><a href="./src/resources/members/qualifying-life-events.ts">QualifyingLifeEventListResponse</a></code>
- <code><a href="./src/resources/members/qualifying-life-events.ts">QualifyingLifeEventRecordResponse</a></code>

Methods:

- <code title="get /v1/members/{member_id}/qualifying-life-events">client.members.qualifyingLifeEvents.<a href="./src/resources/members/qualifying-life-events.ts">list</a>(memberID, { ...params }) -> QualifyingLifeEventListResponse</code>
- <code title="post /v1/members/{member_id}/qualifying-life-events">client.members.qualifyingLifeEvents.<a href="./src/resources/members/qualifying-life-events.ts">record</a>(memberID, { ...params }) -> QualifyingLifeEventRecordResponse</code>

# PlanYears

Types:

- <code><a href="./src/resources/plan-years.ts">PlanYearRetrieveResponse</a></code>
- <code><a href="./src/resources/plan-years.ts">PlanYearUpdateResponse</a></code>

Methods:

- <code title="get /v1/plan-years/{plan_year_id}">client.planYears.<a href="./src/resources/plan-years.ts">retrieve</a>(planYearID) -> PlanYearRetrieveResponse</code>
- <code title="put /v1/plan-years/{plan_year_id}">client.planYears.<a href="./src/resources/plan-years.ts">update</a>(planYearID, { ...params }) -> PlanYearUpdateResponse</code>

# QualifyingLifeEvents
