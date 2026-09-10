# Finance Nexus Context Map

## What it is

Finance Nexus is defined in the source material as a hybrid financial operating system for Chilean Mipymes. It combines an agency service layer with a cloud-based SaaS ERP layer. It is not defined as a traditional closed ERP and does not replace an accountant or regulated financial, tax, accounting, or investment advice.

## Purpose and problem

The product exists to address the gap between Chilean digital tax obligations and disordered day-to-day cash-flow and record-keeping practices. Its intended operational focus is the real available balance, cash flow, bank balances, liquidity projection, and contextual decision support in Chilean Spanish.

## Model and core concepts

- **Service-First:** administrative cleanup and operational ordering precede software licensing; the software should not merely digitize disorder.
- **SaaS ERP layer:** a web platform for financial operations after the service layer.
- **Nexus IA:** contextual AI support for financial workflows. It is not professional financial or tax advice.
- **Caja Libre del Día:** a named decision-oriented focus for real available balance.
- **Agency layer:** on-site or remote operational accompaniment and historical-account cleanup.
- **Finance Nexus SpA:** the contemplated commercial entity; the source material distinguishes it from the creator's technology ownership.

## Functional scope documented

The dossier identifies modules for dashboarding, income, expenses, transfers, bank balances, savings, investments, debts, debt strategy, dates, cash flow, reports, documents with AI, Nexus IA, profile/collaborators, configuration, and security/sessions.

Reports are intended to support PDF and spreadsheet/CSV export. The sources also describe authentication, tenant-aware data access, notification/history records, and contextual AI workflows.

## Financial model

The documented commercial model is freemium SaaS with a service-first operating sequence. Plans, costs, market research, break-even estimates, projected revenue, and investment assumptions are documented in the private originals. They must not be treated as public claims or copied into this portfolio repository.

## Spreadsheet role

The sources identify spreadsheet/CSV export as an output of reports and refer to financial projections. They do not provide a specific spreadsheet template, input schema, calculation sequence, formulas, categories, scenarios, periods, or dependency graph.

**Status: NO DEFINIDO.** Do not implement, alter, or infer spreadsheet formulas until its dedicated specification or workbook is supplied.

## Architecture context

The technical documentation describes a separate Finance Nexus application using React, Vite, Firebase Authentication and Firestore, a lightweight SPA router, charting, PDF/spreadsheet export, and Gemini integration. It describes realtime collections/listeners for profile, transactions, accounts, goals, investments, debts, budgets, AI chats, notifications, settings, and sessions.

This portfolio repository is not that application. Its `/finance-nexus` route is a portfolio page and must not be confused with the Finance Nexus product codebase.

## Rules explicitly documented

- Maintain data isolation between companies/users.
- Do not break the authenticated flow or realtime cleanup mechanisms when working in the Finance Nexus codebase.
- Every realtime subscription must have cleanup.
- AI assistance must have a financial-advice disclaimer and preserve client responsibility for decisions.
- Preserve intellectual-property, privacy, and contractual boundaries described in the private originals.

## Confirmed information

- The product is designed for Chilean Mipymes.
- The service-first sequence is a central operating principle.
- The product includes a software layer and AI-assisted workflows.
- The documented target includes cash flow, liquidity, banking, transaction, debt, reporting, and operational-control concerns.
- The portfolio may present Finance Nexus as an independent project, but must not expose confidential implementation or commercial material.

## Ambiguous information

- **Planilla:** no formula-level or template-level specification was provided.
- **Current production state:** the documents describe an operational version, but no current repository, deployment, or runtime was inspected in this session.
- **Exact Firestore enforcement:** documents use both `activeUid` wording and a rule based on the authenticated user's UID and record user ID. The intended relationship is not sufficiently specified here.
- **Entity status:** the documentation describes contemplated/defined governance and commercial structures; the current legal incorporation status was not independently verified.

## Contradictions requiring a product-owner decision

### Commercial price figures

- **Document 01:** lists plan figures with rounded values.
- **Document 04:** lists professional and enterprise prices with a different rounded convention.
- **Document 05:** repeats a third presentation of the plan figures.
- **Difference:** price values are not identical across the sources.
- **Impact:** no price must be published, coded, or used for billing until confirmed.
- **Status:** REQUIRES DECISION.

### Technical-debt status

- **Document 03:** describes several lint, naming, dependency, and dynamic-data corrections as completed.
- **Document 05:** lists corresponding matters as pending technical debt and immediate actions.
- **Difference:** completion status is inconsistent.
- **Impact:** an implementation agent must inspect the actual Finance Nexus repository before acting.
- **Status:** REQUIRES DECISION.

### Tenant-isolation implementation

- **Document 02:** refers to isolation through an `activeUid`-based approach.
- **Document 05:** describes an authenticated-UID-to-record-user-ID rule.
- **Difference:** the exact schema and security-rule contract is not confirmed.
- **Impact:** do not alter Firestore queries or rules from this map.
- **Status:** REQUIRES DECISION.

## Information pending

1. Dedicated spreadsheet/workbook specification.
2. Access to the actual Finance Nexus source repository and current deployment configuration.
3. Product-owner confirmation of current plans/prices and legal-entity status.
4. Current Firestore schema, rules, indexes, and tenant-isolation contract.
5. Confirmation of which historical audit items are still open.
