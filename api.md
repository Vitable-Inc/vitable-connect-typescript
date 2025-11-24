# Companies

Types:

- <code><a href="./src/resources/companies/companies.ts">Address</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyMember</a></code>
- <code><a href="./src/resources/companies/companies.ts">EmployeeBenefitEligibilityPolicyClassification</a></code>
- <code><a href="./src/resources/companies/companies.ts">EmployeeBenefitEligibilityPolicyWaitingPeriod</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyCreateBenefitEligibilityPolicyResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyCreateEmployeeResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyListBenefitEligibilitiesResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyListPayrollDeductionStatementsResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanySearchBenefitsResponse</a></code>

Methods:

- <code title="post /v1/companies/{company_id}/benefit-eligibility-policies">client.companies.<a href="./src/resources/companies/companies.ts">createBenefitEligibilityPolicy</a>(companyID, { ...params }) -> CompanyCreateBenefitEligibilityPolicyResponse</code>
- <code title="post /v1/companies/{company_id}/employees">client.companies.<a href="./src/resources/companies/companies.ts">createEmployee</a>(companyID, { ...params }) -> CompanyCreateEmployeeResponse</code>
- <code title="get /v1/companies/{company_id}/benefit-eligibilities">client.companies.<a href="./src/resources/companies/companies.ts">listBenefitEligibilities</a>(companyID, { ...params }) -> CompanyListBenefitEligibilitiesResponse</code>
- <code title="get /v1/companies/{company_id}/payroll-deduction-statements">client.companies.<a href="./src/resources/companies/companies.ts">listPayrollDeductionStatements</a>(companyID, { ...params }) -> CompanyListPayrollDeductionStatementsResponse</code>
- <code title="get /v1/companies/{company_id}/company-benefits">client.companies.<a href="./src/resources/companies/companies.ts">searchBenefits</a>(companyID, { ...params }) -> CompanySearchBenefitsResponse</code>

## Benefits

Types:

- <code><a href="./src/resources/companies/benefits.ts">CompanyBenefitDto</a></code>
- <code><a href="./src/resources/companies/benefits.ts">CompanyBenefitPlan</a></code>
- <code><a href="./src/resources/companies/benefits.ts">CompanyBenefitSchema</a></code>
- <code><a href="./src/resources/companies/benefits.ts">PaginationInfo</a></code>
- <code><a href="./src/resources/companies/benefits.ts">BenefitRetrieveResponse</a></code>
- <code><a href="./src/resources/companies/benefits.ts">BenefitListActiveResponse</a></code>
- <code><a href="./src/resources/companies/benefits.ts">BenefitListEligibleExpenseCategoriesResponse</a></code>
- <code><a href="./src/resources/companies/benefits.ts">BenefitListEnrollmentsResponse</a></code>
- <code><a href="./src/resources/companies/benefits.ts">BenefitListUpcomingResponse</a></code>

Methods:

- <code title="get /v1/company-benefits/{company_benefit_id}">client.companies.benefits.<a href="./src/resources/companies/benefits.ts">retrieve</a>(companyBenefitID) -> BenefitRetrieveResponse</code>
- <code title="post /v1/company-benefits/{company_benefit_id}/configuration">client.companies.benefits.<a href="./src/resources/companies/benefits.ts">configure</a>(companyBenefitID, { ...params }) -> void</code>
- <code title="get /v1/companies/{company_id}/benefits">client.companies.benefits.<a href="./src/resources/companies/benefits.ts">listActive</a>(companyID) -> BenefitListActiveResponse</code>
- <code title="get /v1/company-benefits/{company_benefit_id}/eligible-expense-categories">client.companies.benefits.<a href="./src/resources/companies/benefits.ts">listEligibleExpenseCategories</a>(companyBenefitID) -> BenefitListEligibleExpenseCategoriesResponse</code>
- <code title="get /v1/company-benefits/{company_benefit_id}/enrollments">client.companies.benefits.<a href="./src/resources/companies/benefits.ts">listEnrollments</a>(companyBenefitID, { ...params }) -> BenefitListEnrollmentsResponse</code>
- <code title="get /v1/companies/{company_id}/benefits/upcoming">client.companies.benefits.<a href="./src/resources/companies/benefits.ts">listUpcoming</a>(companyID) -> BenefitListUpcomingResponse</code>

# ExpenseCategories

Types:

- <code><a href="./src/resources/expense-categories.ts">ExpenseCategory</a></code>
- <code><a href="./src/resources/expense-categories.ts">ExpenseCategoryListResponse</a></code>

Methods:

- <code title="get /v1/expense-categories">client.expenseCategories.<a href="./src/resources/expense-categories.ts">list</a>({ ...params }) -> ExpenseCategoryListResponse</code>

# CompanyMembers

Types:

- <code><a href="./src/resources/company-members.ts">CompanyMemberRetrieveResponse</a></code>
- <code><a href="./src/resources/company-members.ts">CompanyMemberUpdateResponse</a></code>
- <code><a href="./src/resources/company-members.ts">CompanyMemberListResponse</a></code>

Methods:

- <code title="get /v1/company-members/{company_member_id}">client.companyMembers.<a href="./src/resources/company-members.ts">retrieve</a>(companyMemberID) -> CompanyMemberRetrieveResponse</code>
- <code title="put /v1/company-members/{company_member_id}">client.companyMembers.<a href="./src/resources/company-members.ts">update</a>(companyMemberID, { ...params }) -> CompanyMemberUpdateResponse</code>
- <code title="get /v1/company-members">client.companyMembers.<a href="./src/resources/company-members.ts">list</a>({ ...params }) -> CompanyMemberListResponse</code>
- <code title="post /v1/company-members/{company_member_id}/deactivate">client.companyMembers.<a href="./src/resources/company-members.ts">deactivate</a>(companyMemberID, { ...params }) -> void</code>

# ExternalQualifyingLifeEvents

Types:

- <code><a href="./src/resources/external-qualifying-life-events.ts">ExternalQualifyingLifeEventType</a></code>
- <code><a href="./src/resources/external-qualifying-life-events.ts">ExternalQualifyingLifeEventSubmitResponse</a></code>

Methods:

- <code title="post /v1/external-qualifying-life-events/submission">client.externalQualifyingLifeEvents.<a href="./src/resources/external-qualifying-life-events.ts">submit</a>({ ...params }) -> ExternalQualifyingLifeEventSubmitResponse</code>

# Members

Types:

- <code><a href="./src/resources/members.ts">MemberListActiveBenefitsResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListOpenEnrollmentBenefitsResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListPendingBenefitEnrollmentsResponse</a></code>

Methods:

- <code title="get /v1/members/{member_id}/benefits">client.members.<a href="./src/resources/members.ts">listActiveBenefits</a>(memberID) -> MemberListActiveBenefitsResponse</code>
- <code title="get /v1/members/{member_id}/open-enrollment-benefits">client.members.<a href="./src/resources/members.ts">listOpenEnrollmentBenefits</a>(memberID) -> MemberListOpenEnrollmentBenefitsResponse</code>
- <code title="get /v1/members/{member_id}/pending-company-benefit-enrollments">client.members.<a href="./src/resources/members.ts">listPendingBenefitEnrollments</a>(memberID) -> MemberListPendingBenefitEnrollmentsResponse</code>

# MarketplacePlans

Types:

- <code><a href="./src/resources/marketplace-plans.ts">MarketplacePlanSearchResponse</a></code>

Methods:

- <code title="post /v1/marketplace-plans/search">client.marketplacePlans.<a href="./src/resources/marketplace-plans.ts">search</a>({ ...params }) -> MarketplacePlanSearchResponse</code>

# CompanyBenefitsEnrollments

Types:

- <code><a href="./src/resources/company-benefits-enrollments.ts">BenefitEnrollment</a></code>
- <code><a href="./src/resources/company-benefits-enrollments.ts">CompanyBenefitsEnrollmentListResponse</a></code>
- <code><a href="./src/resources/company-benefits-enrollments.ts">CompanyBenefitsEnrollmentElectResponse</a></code>
- <code><a href="./src/resources/company-benefits-enrollments.ts">CompanyBenefitsEnrollmentReissueResponse</a></code>

Methods:

- <code title="get /v1/company-benefits-enrollments">client.companyBenefitsEnrollments.<a href="./src/resources/company-benefits-enrollments.ts">list</a>({ ...params }) -> CompanyBenefitsEnrollmentListResponse</code>
- <code title="post /v1/company-benefit-enrollments/elect">client.companyBenefitsEnrollments.<a href="./src/resources/company-benefits-enrollments.ts">elect</a>({ ...params }) -> CompanyBenefitsEnrollmentElectResponse</code>
- <code title="post /v1/company-benefit-enrollments/{company_benefit_enrollment_id}/reissue">client.companyBenefitsEnrollments.<a href="./src/resources/company-benefits-enrollments.ts">reissue</a>(companyBenefitEnrollmentID, { ...params }) -> CompanyBenefitsEnrollmentReissueResponse</code>
