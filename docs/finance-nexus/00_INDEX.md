# Finance Nexus Context Index

## Purpose

This index records the relationship and scope of the Finance Nexus source documents supplied on 2026-09-10. It does not replace them.

## Security boundary

The original documents contain personal identifiers, account contact details, commercially sensitive pricing/projections, and material designated as industrial secrets. They are intentionally **not copied into this portfolio repository**.

Store the originals in a private, access-controlled Finance Nexus repository or encrypted document store. Before a Finance Nexus implementation task, an agent must request access to those originals and read all of them before drawing conclusions.

## Source documents

| ID | Original document | Scope | Relationship |
| --- | --- | --- | --- |
| 01 | `finance-nexus-1-propiedad-intelectual-y-genesis.md` | Authorship, intellectual property, governance, demonstration protocol, and documentation stages. | Defines ownership and commercial protection boundaries for all other documents. |
| 02 | `finance-nexus-2-marco-legal-y-cumplimiento.md` | Contracts, privacy, personal-data handling, fiscal compliance, cancellation, and refunds. | Defines legal and data-handling constraints for the software and commercial model. |
| 03 | `finance-nexus-3-arquitectura-tecnica-y-software.md` | Application stack, routes, Firestore listeners, audit history, and visual tokens. | Describes the technical implementation referenced by the master dossier. |
| 04 | `finance-nexus-4-estrategia-comercial-y-operaciones.md` | Service-first model, value proposition, commercial model, market validation, operations, and roadmap. | Defines why the product exists and the sequence between agency service and SaaS enablement. |
| 05 | `finance-nexus-proyecto-completo-antigravity.md` | Consolidated dossier: product thesis, technical architecture, modules, data model, commercial model, and agent mandates. | Consolidates and sometimes overlaps or conflicts with documents 01–04. |

## Required reading order

1. Read all five original documents.
2. Read `01_CONTEXT_MAP.md`.
3. Treat explicit contradictions as unresolved until the product owner decides.
4. Do not use the portfolio repository as a source of confidential Finance Nexus implementation details.
