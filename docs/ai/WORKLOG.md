# Work Log

## 2026-09-10 — Performance stabilization and agent continuity

**Status:** completed
**Goal:** Remove high-frequency React updates in the Hero and process cards, establish safe multi-agent continuity documentation, and publish only verified, non-sensitive professional information from the supplied CV maestro.

### Completed

- `src/components/Hero.jsx`: replaced React state updates on mouse movement and scroll with Framer Motion motion values and transforms.
- `src/components/hero/HeroScene.jsx`: reads the React Three Fiber pointer state directly, lowers the maximum canvas DPR to `1.25`, and pauses the render loop when the Hero is outside the viewport.
- `src/components/Process.jsx`: replaced mouse-driven React state with spring motion values and resolved duplicate JSX animation props.
- `src/components/Experience.jsx`: added a public, evidence-based experience section for Dunkin and Delicias without contact, identity, compensation, or client-sensitive data.
- `src/pages/CVPage.jsx`, `src/components/About.jsx`, `src/components/Hero.jsx`, `src/components/Numbers.jsx`, and `src/components/Portfolio.jsx`: corrected the distinction between operational employment, academic education, and independent projects; aligned certifications with the CV maestro.
- `src/components/Navbar.jsx`: added the experience link and keeps the desktop navigation hidden until the `xl` breakpoint to prevent crowding.
- `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, and `docs/ai/`: added one shared operating agreement and agent-specific entry points.

### Decisions

- **Decision:** Use `AGENTS.md` as the shared source of truth and reference it from Claude and Copilot instruction files.
  **Why:** It prevents duplicate, conflicting instructions while retaining conventional entry points for different agents.
  **Alternative not used:** Separate, fully duplicated prompts for each tool; rejected because they drift over time.
- **Decision:** Publish the two labor entries supplied in the CV maestro and keep Finance Nexus explicitly labeled as an independent project.
  **Why:** The document provides roles, employers, periods, responsibilities, and supportable operational scope. It also distinguishes projects from paid work.
  **Alternative not used:** Treat Finance Nexus as employment or publish all CV fields; rejected to preserve factual accuracy and avoid exposing the RUT, phone number, salary target, availability details, and detailed personal data.

### Validation

- `npm run build`: pass on 2026-09-10 after performance, documentation, and professional-content changes; no JSX duplicate-property warnings remain.
- Local image request for `/images/profile.jpg`: HTTP 200.
- Browser DOM image check: no incomplete or zero-width images detected on `/`.
- Browser verification at `http://localhost:5174/`: the experience section renders two cards and the navigation link; `/cv` renders Dunkin, Delicias, and Finance Nexus with two entries marked as employment.
- Browser privacy verification at `/cv`: the supplied RUT, phone number, and salary target are absent from the rendered page.

### Known environment note

- Port `5173` was already occupied by an unrelated Vite instance. This project was started by Vite on `5174`; use `http://localhost:5174/` for this session and never stop a process merely because it occupies the default port.

### Security and hygiene

- Scope reviewed: tracked sensitive-file patterns, `.gitignore`, source image path, Git remote, the new agent documentation, and secret-like assignments in `src`.
- Result: no tracked environment, key, certificate, or service-account files detected; no secret-like assignments detected in `src`. This is a pattern-based review, not a complete historical or deployment-secret audit.

### Git and deployment

- Branch: `main`.
- Commit/push: not performed in this session.
- Vercel: not verified in this session.

### Remaining work

1. Decide whether to implement the original blue editorial/glass redesign described in the design analysis.
2. Review current public contact details and remove any data that should not be public.
3. Verify the production Vercel deployment after committing and pushing.

### Next action

Review the local experience section and CV at `/` and `/cv`, then commit the verified changes and check the resulting Vercel deployment.

## 2026-09-10 — Finance Nexus context intake

**Status:** completed with security boundary
**Goal:** Read every supplied Finance Nexus reference, preserve its document relationships, identify unknowns and contradictions, and make the context recoverable without changing the Finance Nexus product.

### Completed

- Read all five supplied Finance Nexus documents in full, including the consolidated dossier.
- `docs/finance-nexus/00_INDEX.md`: recorded each original document, purpose, relationships, and required reading order.
- `docs/finance-nexus/01_CONTEXT_MAP.md`: recorded the supplied product identity, scope, financial-model boundary, spreadsheet status, confirmed information, ambiguity, contradictions, and pending decisions.
- `docs/finance-nexus/README.md` and `.gitignore`: created a clear boundary preventing private source documents from being placed in this portfolio repository.

### Decisions

- **Decision:** Do not copy the supplied originals into this repository.
  **Why:** They contain identity numbers, account contact information, commercially sensitive prices/projections, and material explicitly designated as industrial secrets.
  **Alternative not used:** Preserve the originals verbatim in `docs/finance-nexus/`; rejected because this portfolio repository is not an access-controlled Finance Nexus source repository.

### Validation

- Five documents reviewed: property/intellectual-property genesis, legal/compliance, technical architecture, commercial operations, and the consolidated dossier.
- No application code, Finance Nexus architecture, product logic, or portfolio behavior was modified by this intake.

### Security and hygiene

- Scope reviewed: source documents and proposed repository destination.
- Result: sensitive and proprietary source content was excluded from the repository; safe contextual index and map added instead.

### Git and deployment

- Branch: `main`.
- Commit/push: not performed in this session.
- Vercel: not verified; documentation-only changes do not alter the deployed portfolio until committed and pushed.

### Remaining work

1. Keep the original Finance Nexus files in a private, access-controlled canonical location.
2. Supply the planilla specification/workbook before asking an agent to implement or change financial formulas.
3. Resolve the identified price, Firestore-isolation, and audit-status contradictions with the product owner before implementation.

### Next action

For Finance Nexus development, open its actual private repository, provide the five canonical documents plus the planilla specification, and resolve contradictions before coding.
