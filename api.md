# Employers

Types:

- <code><a href="./src/resources/employers/employers.ts">CreateEligibilityPolicyRequest</a></code>
- <code><a href="./src/resources/employers/employers.ts">CreateEmployerRequest</a></code>
- <code><a href="./src/resources/employers/employers.ts">EligibilityPolicy</a></code>
- <code><a href="./src/resources/employers/employers.ts">Employer</a></code>
- <code><a href="./src/resources/employers/employers.ts">UpdateEmployerRequest</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerListResponse</a></code>

Methods:

- <code title="post /employers">client.employers.<a href="./src/resources/employers/employers.ts">create</a>({ ...params }) -> Employer</code>
- <code title="get /employers/{id}">client.employers.<a href="./src/resources/employers/employers.ts">retrieve</a>(id) -> Employer</code>
- <code title="put /employers/{id}">client.employers.<a href="./src/resources/employers/employers.ts">update</a>(id, { ...params }) -> Employer</code>
- <code title="get /employers">client.employers.<a href="./src/resources/employers/employers.ts">list</a>({ ...params }) -> EmployerListResponse</code>
- <code title="post /employers/{id}/benefit-eligibility-policy">client.employers.<a href="./src/resources/employers/employers.ts">createEligibilityPolicy</a>(id, { ...params }) -> EligibilityPolicy</code>

## Employees

Types:

- <code><a href="./src/resources/employers/employees.ts">CreateEmployeeRequest</a></code>
- <code><a href="./src/resources/employers/employees.ts">UpdateEmployeeRequest</a></code>
- <code><a href="./src/resources/employers/employees.ts">EmployeeListResponse</a></code>

Methods:

- <code title="post /employers/{id}/employees">client.employers.employees.<a href="./src/resources/employers/employees.ts">create</a>(id, { ...params }) -> Employee</code>
- <code title="get /employers/{id}/employees">client.employers.employees.<a href="./src/resources/employers/employees.ts">list</a>(id, { ...params }) -> EmployeeListResponse</code>

# Employees

Types:

- <code><a href="./src/resources/employees/employees.ts">CreateQualifyingLifeEventRequest</a></code>
- <code><a href="./src/resources/employees/employees.ts">ElectBenefitsRequest</a></code>
- <code><a href="./src/resources/employees/employees.ts">Employee</a></code>
- <code><a href="./src/resources/employees/employees.ts">Member</a></code>
- <code><a href="./src/resources/employees/employees.ts">QualifyingLifeEvent</a></code>

Methods:

- <code title="get /employees/{id}">client.employees.<a href="./src/resources/employees/employees.ts">retrieve</a>(id) -> Employee</code>
- <code title="put /employees/{id}">client.employees.<a href="./src/resources/employees/employees.ts">update</a>(id, { ...params }) -> Employee</code>
- <code title="delete /employees/{id}">client.employees.<a href="./src/resources/employees/employees.ts">terminate</a>(id) -> void</code>

## Dependents

Types:

- <code><a href="./src/resources/employees/dependents.ts">DependentListResponse</a></code>

Methods:

- <code title="post /employees/{id}/dependents">client.employees.dependents.<a href="./src/resources/employees/dependents.ts">create</a>(id, { ...params }) -> Dependent</code>
- <code title="get /employees/{id}/dependents">client.employees.dependents.<a href="./src/resources/employees/dependents.ts">list</a>(id) -> DependentListResponse</code>

## QualifyingLifeEvents

Types:

- <code><a href="./src/resources/employees/qualifying-life-events.ts">QualifyingLifeEventListResponse</a></code>

Methods:

- <code title="post /employees/{id}/qualifying-life-events">client.employees.qualifyingLifeEvents.<a href="./src/resources/employees/qualifying-life-events.ts">create</a>(id, { ...params }) -> QualifyingLifeEvent</code>
- <code title="get /employees/{id}/qualifying-life-events">client.employees.qualifyingLifeEvents.<a href="./src/resources/employees/qualifying-life-events.ts">list</a>(id) -> QualifyingLifeEventListResponse</code>

## Enrollments

Types:

- <code><a href="./src/resources/employees/enrollments.ts">EnrollmentListResponse</a></code>
- <code><a href="./src/resources/employees/enrollments.ts">EnrollmentElectResponse</a></code>

Methods:

- <code title="get /employees/{id}/enrollments">client.employees.enrollments.<a href="./src/resources/employees/enrollments.ts">list</a>(id, { ...params }) -> EnrollmentListResponse</code>
- <code title="post /employees/{id}/enrollments/elect">client.employees.enrollments.<a href="./src/resources/employees/enrollments.ts">elect</a>(id, { ...params }) -> EnrollmentElectResponse</code>

# Dependents

Types:

- <code><a href="./src/resources/dependents.ts">CreateDependentRequest</a></code>
- <code><a href="./src/resources/dependents.ts">Dependent</a></code>
- <code><a href="./src/resources/dependents.ts">UpdateDependentRequest</a></code>

Methods:

- <code title="put /dependents/{id}">client.dependents.<a href="./src/resources/dependents.ts">update</a>(id, { ...params }) -> Dependent</code>

# BenefitProducts

Types:

- <code><a href="./src/resources/benefit-products/benefit-products.ts">BenefitProduct</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">Plan</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">Quote</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">QuoteRequest</a></code>
- <code><a href="./src/resources/benefit-products/benefit-products.ts">BenefitProductListResponse</a></code>

Methods:

- <code title="get /benefit-products">client.benefitProducts.<a href="./src/resources/benefit-products/benefit-products.ts">list</a>({ ...params }) -> BenefitProductListResponse</code>
- <code title="post /benefit-products/{id}/quote">client.benefitProducts.<a href="./src/resources/benefit-products/benefit-products.ts">generateQuote</a>(id, { ...params }) -> Quote</code>

## PlanYears

Types:

- <code><a href="./src/resources/benefit-products/plan-years.ts">CreatePlanYearRequest</a></code>
- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanContributionClass</a></code>
- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanCost</a></code>
- <code><a href="./src/resources/benefit-products/plan-years.ts">PlanYearListResponse</a></code>

Methods:

- <code title="post /benefit-products/{id}/plan-years">client.benefitProducts.planYears.<a href="./src/resources/benefit-products/plan-years.ts">create</a>(id, { ...params }) -> PlanYear</code>
- <code title="get /benefit-products/{id}/plan-years">client.benefitProducts.planYears.<a href="./src/resources/benefit-products/plan-years.ts">list</a>(id, { ...params }) -> PlanYearListResponse</code>

# PlanYears

Types:

- <code><a href="./src/resources/plan-years.ts">PlanYear</a></code>
- <code><a href="./src/resources/plan-years.ts">UpdatePlanYearRequest</a></code>

Methods:

- <code title="put /plan-years/{id}">client.planYears.<a href="./src/resources/plan-years.ts">update</a>(id, { ...params }) -> PlanYear</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>
- <code><a href="./src/resources/enrollments.ts">ReissueEnrollmentRequest</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentGetEligiblePlansResponse</a></code>

Methods:

- <code title="get /enrollments/{id}/plans">client.enrollments.<a href="./src/resources/enrollments.ts">getEligiblePlans</a>(id) -> EnrollmentGetEligiblePlansResponse</code>
- <code title="post /enrollments/{id}/reissue">client.enrollments.<a href="./src/resources/enrollments.ts">reissue</a>(id, { ...params }) -> Enrollment</code>
