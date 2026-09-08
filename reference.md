# Reference
## Auth
<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">issueAccessToken</a>({ ...params }) -> VitableConnect.AccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Issues a short-lived access token from the authenticated API key. Access tokens can optionally be bound to a specific employer or employee for scoped access. Tokens expire after 15 minutes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.issueAccessToken({
    grant_type: "client_credentials"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.IssueAccessTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Employees
<details><summary><code>client.employees.<a href="/src/api/resources/employees/client/Client.ts">get</a>({ ...params }) -> VitableConnect.EmployeeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves detailed information for a specific employee by ID. Returns employee details including personal information, employment status, classification and compensation-type effective dates, compensation type, and payroll deductions from the most recent statement period. Deductions reflect a snapshot of the current period and are replaced when a new statement is generated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employees.get({
    employee_id: "empl_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetEmployeesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employees.<a href="/src/api/resources/employees/client/Client.ts">update</a>({ ...params }) -> VitableConnect.EmployeeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates employee personal, contact, address, and employment fields. This endpoint currently supports email, phone, gender, address, employee_class, start_date, and compensation_type. effective_date is required and applies to employee_class and compensation_type when those fields are included in the request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employees.update({
    employee_id: "empl_abc123def456",
    employee_class: "Full Time",
    start_date: "2023-01-15",
    compensation_type: "Salary",
    effective_date: "2023-03-01"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.PatchedUpdateEmployeeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employees.<a href="/src/api/resources/employees/client/Client.ts">listEnrollments</a>({ ...params }) -> core.Page&lt;VitableConnect.Enrollment, VitableConnect.EnrollmentListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of benefit enrollments for an employee.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.employees.listEnrollments({
    employee_id: "empl_abc123def456",
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.employees.listEnrollments({
    employee_id: "empl_abc123def456",
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListEnrollmentsEmployeesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Employers
<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;VitableConnect.OrganizationEmployer, VitableConnect.OrganizationEmployerListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the caller's employer book — every employer with its computed columns (enrollment-rate summary, benefit-family tags, HRIS connection, benefit-lifecycle stage) merged with the employer's flat CRM fields (legal name, EIN, contact, address, timestamps). The book is derived from the authenticated principal: one organization's employers, or every organization's for a caller whose reach is not a single organization. Supports search by display name, legal name, or exact EIN, employer id or contact email, benefit-family/lifecycle/HRIS filters, and page/limit pagination.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.employers.list({
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.employers.list({
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">create</a>({ ...params }) -> VitableConnect.EmployerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new employer for the authenticated organization. Requires employer name, legal name, EIN, email, and address information. Returns the created employer with its assigned ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.create({
    name: "NewCo Industries",
    legal_name: "NewCo Industries LLC",
    ein: "12-3456789",
    email: "hr@newco.com",
    address: {
        address_line_1: "789 Business Blvd",
        address_line_2: "Floor 5",
        city: "Seattle",
        state: "WA",
        zipcode: "98101"
    },
    phone_number: "2065550100",
    reference_id: "partner-emp-001"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.CreateEmployerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">get</a>({ ...params }) -> VitableConnect.EmployerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves detailed information for a specific employer by ID. The employer must belong to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.get({
    employer_id: "empr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">update</a>({ ...params }) -> VitableConnect.EmployerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing employer. All fields are optional — only provided fields are updated. PO Box addresses are rejected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.update({
    employer_id: "empr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.UpdateEmployerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">listBenefitPlanYears</a>({ ...params }) -> VitableConnect.EmployerBenefitPlanYearsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the employer's benefit plan years (all years, or one when `year` is given), each with its benefits, offered states, benefit families, and the year-level enrollment roll-up. The caller must be authorized for the employer; an unknown or unauthorized employer returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.listBenefitPlanYears({
    employer_id: "empr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListBenefitPlanYearsEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">getBenefitPlanYear</a>({ ...params }) -> VitableConnect.EmployerBenefitPlanYearResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one benefit plan year in full — its benefit details plus the per-benefit enrollment rate and SPD link — addressed by its `benefit_plan_year_id`. The caller must be authorized for the employer; an unknown or unauthorized plan year returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.getBenefitPlanYear({
    employer_id: "empr_abc123def456",
    benefit_plan_year_id: "plyr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetBenefitPlanYearEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">listBenefitPlanYearEnrollments</a>({ ...params }) -> core.Page&lt;VitableConnect.PlanYearEnrollment, VitableConnect.PlanYearEnrollmentListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of every member with an enrollment in one of an employer's plan years, any election status: what they elected, where their coverage stands, dependent count, carrier, plan, tier, and the plan's total monthly cost. The caller must be authorized for the employer `empr_<...>`; an unknown or unauthorized employer, or an unknown plan year `plyr_<...>`, returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.employers.listBenefitPlanYearEnrollments({
    employer_id: "empr_abc123def456",
    benefit_plan_year_id: "plyr_abc123def456",
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.employers.listBenefitPlanYearEnrollments({
    employer_id: "empr_abc123def456",
    benefit_plan_year_id: "plyr_abc123def456",
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListBenefitPlanYearEnrollmentsEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">submitCensusSync</a>({ ...params }) -> VitableConnect.CensusSyncDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits a census sync payload for the specified employer. The employees in the payload will be queued for processing. Returns an accepted response with the timestamp of acceptance.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.submitCensusSync({
    employer_id: "empr_abc123def456",
    employees: [{
            reference_id: "EMP-001",
            first_name: "Jane",
            last_name: "Doe",
            date_of_birth: "1990-05-15",
            email: "jane.doe@acme.com",
            phone: "4155550100",
            address: {
                address_line_1: "123 Main Street",
                address_line_2: "Apt 4B",
                city: "San Francisco",
                state: "CA",
                zipcode: "94102"
            },
            start_date: "2024-01-15",
            employee_class: "Full Time",
            compensation_type: "Salary"
        }, {
            first_name: "John",
            last_name: "Smith",
            date_of_birth: "1985-11-20",
            email: "john.smith@acme.com",
            phone: "4155550101",
            start_date: "2024-03-01",
            employee_class: "Part Time",
            compensation_type: "Hourly"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.CensusSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">listEmployees</a>({ ...params }) -> core.Page&lt;VitableConnect.Employee, VitableConnect.EmployeeListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of employees for a specific employer. The caller must be authorized for the employer; an unknown or unauthorized employer returns 404. Results are paginated using page and limit parameters and can be narrowed with a case-insensitive `search` (first name, last name, or email) and an `employment_status` filter (active or terminated). Each employee includes payroll deductions from the most recent statement period. When a new deduction statement is generated, previous period deductions are replaced.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.employers.listEmployees({
    employer_id: "empr_abc123def456",
    limit: 20,
    page: 1,
    search: "jane"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.employers.listEmployees({
    employer_id: "empr_abc123def456",
    limit: 20,
    page: 1,
    search: "jane"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListEmployeesEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">getHris</a>({ ...params }) -> VitableConnect.EmployerHrisResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the employer's HRIS connection — provider, status, last sync, and synced row count — or null when the employer has no integration. The caller must be authorized for the employer; an unknown or unauthorized employer returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.getHris({
    employer_id: "empr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetHrisEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">listInvoices</a>({ ...params }) -> VitableConnect.EmployerInvoicesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a cursor-paginated page of the employer's billing invoices, newest first. Pass the `next_offset` from a previous page as `offset` to fetch the next page. The caller must be authorized for the employer; an unknown or unauthorized employer returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.listInvoices({
    employer_id: "empr_abc123def456",
    limit: 20
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListInvoicesEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">getInvoicePdf</a>({ ...params }) -> VitableConnect.EmployerInvoicePdfResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the time-limited PDF download link for a single invoice belonging to the employer's billing customer. `invoice_id` is the external Chargebee id (not a prefixed UUID). The caller must be authorized for the employer; an unknown or unauthorized employer or invoice returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.getInvoicePdf({
    employer_id: "empr_abc123def456",
    invoice_id: "INV-00042"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetInvoicePdfEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">getPayrollAccessSetup</a>({ ...params }) -> VitableConnect.PayrollAccessSetupStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return whether the employer has submitted payroll access setup.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.getPayrollAccessSetup({
    employer_id: "empr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetPayrollAccessSetupEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">submitPayrollAccessSetup</a>({ ...params }) -> VitableConnect.PayrollAccessSetupStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit the employer's payroll access setup answers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.submitPayrollAccessSetup({
    employer_id: "empr_abc123def456",
    employees_in_payroll_acknowledged: true,
    payroll_data_impacts_eligibility_acknowledged: true,
    classifications_accurate: true,
    all_benefit_eligible_employees_present: true,
    is_controlled_group: true,
    access_method: "SELF_SETUP",
    has_additional_payroll_system: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.SubmitPayrollAccessSetupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">listPayrollDeductionStatements</a>({ ...params }) -> core.Page&lt;VitableConnect.PayrollDeductionStatement, VitableConnect.EmployerPayrollDeductionStatementListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of the employer's payroll-deduction statements, newest period first, each with its period, generation date, distinct employee count, total deduction, change-file link, and deduction frequency. Statements superseded by a later correction are excluded. The caller must be authorized for the employer; an unknown or unauthorized employer returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.employers.listPayrollDeductionStatements({
    employer_id: "empr_abc123def456",
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.employers.listPayrollDeductionStatements({
    employer_id: "empr_abc123def456",
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListPayrollDeductionStatementsEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">ensurePayrollIntegrationEmail</a>({ ...params }) -> VitableConnect.PayrollIntegrationEmailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Provision and return the employer's payroll integration email.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.ensurePayrollIntegrationEmail({
    employer_id: "empr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.EnsurePayrollIntegrationEmailEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">updateSettings</a>({ ...params }) -> VitableConnect.EmployerSettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates configuration settings for a specific employer. The employer must belong to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.updateSettings({
    employer_id: "empr_abc123def456",
    pay_frequency: "bi_weekly"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.UpdateEmployerSettingsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.employers.<a href="/src/api/resources/employers/client/Client.ts">listHrisProviders</a>({ ...params }) -> VitableConnect.OrganizationHrisProvidersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the distinct HRIS/payroll providers across the same book `GET /v1/employers` returns, sorted for display. Use these as the values for the employers list's `hris_provider` filter — filter on `provider`, show `provider_label`. The stored providers are free text, so they cannot be enumerated in advance.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.employers.listHrisProviders();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListHrisProvidersEmployersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Enrollments
<details><summary><code>client.enrollments.<a href="/src/api/resources/enrollments/client/Client.ts">get</a>({ ...params }) -> VitableConnect.EnrollmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single enrollment: the employee and employer it belongs to, the benefit product, its status, the coverage period, the employee payroll deduction and employer contribution, and the enrolled plan's Summary of Benefits and Coverage document when one is on file. An enrollment the caller cannot reach is indistinguishable from one that does not exist.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.enrollments.get({
    enrollment_id: "enrl_AAAAAAAAAAAAAAAAAAAAAQ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetEnrollmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnrollmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.enrollments.<a href="/src/api/resources/enrollments/client/Client.ts">reissue</a>({ ...params }) -> VitableConnect.ReissueEnrollmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Closes the targeted enrollment and creates a new unanswered enrollment for the same member and plan year. VPC never requires a qualifying life event; other products require an accepted, member-owned event outside open enrollment. User-backed callers must provide a reason; it is optional for organization API-key callers. Tenant mismatches return a non-disclosing 404 before the request body is validated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.enrollments.reissue({
    enrollment_id: "enrl_AAAAAAAAAAAAAAAAAAAAAQ",
    reason: "Member needs a new election after a qualifying event.",
    ticket_number: "BPT-1234",
    qualifying_life_event_id: "qle_AAAAAAAAAAAAAAAAAAAAAQ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ReissueEnrollmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnrollmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.enrollments.<a href="/src/api/resources/enrollments/client/Client.ts">terminate</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Terminates enrolled coverage immediately. An accepted qualifying life event owned by the enrollment member is required unless the plan is VPC or ICHRA. User-backed callers must provide a reason; it is optional for organization API-key callers. API keys may act across the caller organization's book. Tenant mismatches return the same non-disclosing 404 before the request body is validated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.enrollments.terminate({
    enrollment_id: "enrl_AAAAAAAAAAAAAAAAAAAAAQ",
    reason: "Member requested coverage termination after a qualifying event.",
    ticket_number: "BPT-1234",
    qualifying_life_event_id: "qle_AAAAAAAAAAAAAAAAAAAAAQ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.TerminateEnrollmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnrollmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Groups
<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;VitableConnect.Group, VitableConnect.GroupListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of groups belonging to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.groups.list({
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.groups.list({
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">create</a>({ ...params }) -> VitableConnect.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new group scoped to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.create({
    name: "Tier 1",
    external_reference_id: "mol_seg_001"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.CreateGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">get</a>({ ...params }) -> VitableConnect.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single group by its prefixed ID. Returns 404 if the group does not belong to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.get({
    group_id: "grp_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">update</a>({ ...params }) -> VitableConnect.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Partially updates a group's name or external reference ID. Returns 404 if the group does not belong to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.update({
    group_id: "grp_abc123def456",
    name: "Tier 1 (renamed)",
    external_reference_id: "mol_seg_001_v2"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.PatchedUpdateGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Members
<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">get</a>({ ...params }) -> VitableConnect.MemberResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a member's profile by ID — identity, demographics, address, contact details, tobacco status, and profile status. Access is scoped to the authenticated principal; a member not visible to the caller returns a 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.members.get({
    member_id: "mbr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">listDependents</a>({ ...params }) -> VitableConnect.MemberDependentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a member's active legal dependents — name, relationship, date of birth, age, and sex at birth. Access is scoped to the authenticated principal; a member not visible to the caller returns a 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.members.listDependents({
    member_id: "mbr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListDependentsMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">listEmployments</a>({ ...params }) -> VitableConnect.MemberEmploymentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a member's employment across every employer — the same employee record shape as the employer's employees list, plus the employer name. For an organization caller the rows are scoped to companies in that organization's book; a member (self/household) or Vitable Admin sees all employments. A member not visible to the caller returns a 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.members.listEmployments({
    member_id: "mbr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListEmploymentsMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">listEnrollments</a>({ ...params }) -> VitableConnect.MemberEnrollmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a member's benefit enrollments across every employer — benefit type and product, employer, carrier, plan, tier, employee deduction, employer contribution and total premium, the individual enrollment coverage boundary (`coverage_end`), the separate pre-effective cancellation boundary (`cancelled_date`), and the distinct benefit plan-year boundary (`plan_year_coverage_end`) used to determine whether the plan year itself has ended, the date the enrollment record was created (`issued_date`, the value Ops labels Issued on, reported for every row whatever the member answered), the window the member could answer in -- which never opens before the enrollment was issued, so a row issued mid-open-enrollment starts its window on its issue date -- whether a qualifying life event would currently be required for reissue under the product/open-enrollment rule, enrollment/open-enrollment window, and two statuses: `election_status` (what the member answered) and `policy_status` (what became of their coverage, null unless they enrolled). Every row includes a stable enrollment ID and the exact employer and benefit plan-year IDs used to fetch that row's plan-year detail. The full list is returned across all states so the client derives active plans (effective and upcoming) and the enrollment history from those per-row statuses. For an organization caller the rows are scoped to companies in that organization's book; a member (self/household) or Vitable Admin sees all enrollments. A member not visible to the caller returns a 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.members.listEnrollments({
    member_id: "mbr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListEnrollmentsMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">getHousehold</a>({ ...params }) -> VitableConnect.HouseholdMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a member's household as a per-participant table — the account holder plus each active household member, with name, relationship, member type, date of birth, and household-admin flag. Access is scoped to the authenticated principal; a member not visible to the caller (or with no household) returns a 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.members.getHousehold({
    member_id: "mbr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetHouseholdMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">listIdCards</a>({ ...params }) -> VitableConnect.MemberDigitalBenefitCardsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a member's benefit ID cards — card type (medical, dental, vision, or rx), employer, plan, provider network, claims payer, carrier contact details, and the disclaimers printed on the card. Medical, dental and vision cards come from the member's active digital benefit cards; the rx card from the member's Ventegra pharmacy benefit (omitted when the member has no free-medication coverage), which carries no plan, network, or carrier details. Access is scoped to the authenticated principal, and an organization caller sees only cards from employers in its book; a member not visible to the caller returns a 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.members.listIdCards({
    member_id: "mbr_abc123def456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListIdCardsMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">listQualifyingLifeEvents</a>({ ...params }) -> core.Page&lt;VitableConnect.MemberQualifyingLifeEvent, VitableConnect.MemberQualifyingLifeEventListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a member's qualifying life events, including events already used for another enrollment. Returns all statuses by default; pass the status query param to filter to one (e.g. approved). Events are ordered newest submission first with stable paging. Custom text is present only when submitted and is otherwise null. A member not visible to the caller returns a 404. API keys and unbound access tokens have organization-wide access. Employer-bound tokens require employment at the bound employer, and employee-bound tokens require the exact employee-member relationship. Organization or scope mismatches return a 404 before pagination is validated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.members.listQualifyingLifeEvents({
    member_id: "mbr_abc123def456",
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.members.listQualifyingLifeEvents({
    member_id: "mbr_abc123def456",
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListQualifyingLifeEventsMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;VitableConnect.MemberListItem, VitableConnect.MemberListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of the members in the authenticated organization's book — identity, contact details, and address. The book covers members reached through an employer in the organization's book as well as members of a group it owns. Supports free-text search (name, email, phone number, or exact member id).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.members.list({
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.members.list({
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations
<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">list</a>() -> VitableConnect.OrganizationsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the organizations the authenticated caller is an active member of (paginated). Returns an empty list when the caller belongs to no organizations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `OrganizationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">create</a>({ ...params }) -> VitableConnect.Organization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Onboards the authenticated user's partner Organization: creates the local Organization + the creator's admin membership atomically, then mirrors it to WorkOS (creates the WorkOS org and binds the creator as admin). A user may hold several organizations and selects which one a request acts as with the `X-Vitable-Organization` header. The founder's email domain is claimed only when no other organization holds it, so a taken domain is left with its owner rather than rejected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.create({
    name: "Acme Brokerage",
    type: "BROKERAGE"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.CreateOrganizationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Plans
<details><summary><code>client.plans.<a href="/src/api/resources/plans/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;VitableConnect.Plan, VitableConnect.PlanListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of benefit plans linked to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.plans.list({
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.plans.list({
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListPlansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webhook Events
<details><summary><code>client.webhookEvents.<a href="/src/api/resources/webhookEvents/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;VitableConnect.WebhookEvent, VitableConnect.WebhookEventListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of webhook events for the authenticated organization. Supports filtering by event name, resource type, resource ID, and date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.webhookEvents.list({
    limit: 20,
    page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.webhookEvents.list({
    limit: 20,
    page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListWebhookEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhookEvents.<a href="/src/api/resources/webhookEvents/client/Client.ts">get</a>({ ...params }) -> VitableConnect.WebhookEventResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single webhook event by its prefixed ID. Returns 404 if the event does not exist or belongs to a different organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEvents.get({
    event_id: "event_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.GetWebhookEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhookEvents.<a href="/src/api/resources/webhookEvents/client/Client.ts">listDeliveries</a>({ ...params }) -> VitableConnect.ListWebhookEventDeliveriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all delivery attempts for a webhook event. Returns up to 100 deliveries. Each delivery includes a computed status field (Pending, In Progress, Delivered, or Failed).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhookEvents.listDeliveries({
    event_id: "event_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.ListDeliveriesWebhookEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Groups Members Sync
<details><summary><code>client.groups.members.sync.<a href="/src/api/resources/groups/resources/members/resources/sync/client/Client.ts">submit</a>({ ...params }) -> VitableConnect.GroupMemberSyncDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits a member sync payload for the specified group. Members in the payload will be queued for processing asynchronously. Returns HTTP 202 with the batch ID and acceptance timestamp.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.members.sync.submit({
    group_id: "grp_abc123def456",
    members: [{
            reference_id: "EMP-001",
            first_name: "Jane",
            last_name: "Doe",
            date_of_birth: "1990-05-15",
            phone: "4155550100",
            plan_id: "pln_abc123def456",
            address: {
                address_line_1: "123 Main Street",
                address_line_2: "Apt 4B",
                city: "San Francisco",
                state: "CA",
                zipcode: "94102"
            },
            email: "jane.doe@acme.com"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.groups.members.GroupMemberSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.groups.members.sync.<a href="/src/api/resources/groups/resources/members/resources/sync/client/Client.ts">get</a>({ ...params }) -> VitableConnect.GroupMemberSyncRequestDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously-submitted group member sync request by its `grpmsr_` ID. Returns the acceptance timestamp, completion timestamp (if processing has finished), and the per-member `results` once available. While processing is in flight, `completed_at` and `results` are `null`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.members.sync.get({
    group_id: "grp_abc123def456",
    request_id: "request_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `VitableConnect.groups.members.GetSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

