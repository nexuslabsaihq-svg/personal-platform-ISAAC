# Agent Working Agreement

## Read first

1. Read this file.
2. Read `docs/ai/README.md`.
3. Read the latest entry in `docs/ai/WORKLOG.md`.
4. Inspect `git status --short`, the active branch, and the relevant source before editing.

## Project

Personal professional portfolio for Isaac Pasten Diaz. It is a React single-page application with dedicated `/cv` and `/finance-nexus` routes.

Stack:

- React 18, Vite 5, React Router 6
- Tailwind CSS 3 and Framer Motion
- React Three Fiber / Three.js for optional decorative scenes
- Vercel deploys the `main` branch

Important directories:

- `src/components/`: home-page sections and reusable UI
- `src/components/hero/`: Hero 3D decoration
- `src/pages/`: CV and Finance Nexus routes
- `src/hooks/`: accessibility and pointer helpers
- `public/`: public static assets
- `docs/ai/`: agent continuity documentation and work log
- `docs/finance-nexus/`: safe index for private Finance Nexus context; not product source code

## Commands

```powershell
npm install
npm run dev
npm run build
```

There is no configured linter or test suite. Run `npm run build` after code changes. Do not claim a Vercel deployment succeeded unless it was verified externally.

## Engineering rules

- Inspect and reuse existing components before creating a new abstraction.
- Make the smallest complete change that solves the verified problem.
- Preserve the existing routes: `/`, `/cv`, and `/finance-nexus`.
- Preserve accessibility: semantic HTML, keyboard-operable controls, meaningful image alternatives, and `prefers-reduced-motion` support.
- Treat visual effects as optional. Do not add continuous animation, high-frequency React state updates, expensive blur layers, or new 3D scenes without a measured user benefit.
- The Hero Canvas must remain lazy-loaded, use React Three Fiber pointer state rather than React state for pointer movement, and pause outside the visible Hero section.
- Do not add employment claims, metrics, dates, certifications, client details, or testimonials unless the owner supplied or verified them.
- Do not add personal contact data beyond what is already intentionally public. Never store identity numbers, exact addresses, passwords, tokens, private keys, or credentials.
- For Finance Nexus tasks, read `docs/finance-nexus/00_INDEX.md` and `01_CONTEXT_MAP.md`, then obtain the private originals and the actual Finance Nexus repository. Do not infer missing product rules or put confidential documents in this portfolio repository.
- Do not change dependencies, Vercel configuration, public URLs, or deployment settings without explaining the impact and obtaining approval when the change is material.
- Do not delete existing files or rewrite history unless explicitly requested.

## Security and repository hygiene

- Before meaningful work, inspect relevant changes and identify obsolete or duplicate code in the affected area.
- Never commit `.env*`, `.vercel/`, logs, private keys, service accounts, credentials, or generated build output.
- Keep secrets in the hosting provider's environment-variable manager. Client-side `VITE_*` values are public by design and must never contain secrets.
- Do not paste secrets, unredacted logs, or personal data into `docs/ai/WORKLOG.md`.

## Required session lifecycle

Follow the detailed workflow in `docs/ai/SESSION-PROTOCOL.md`:

`ENTRAR -> RECUPERAR -> VERIFICAR -> TRABAJAR -> VALIDAR -> RESPALDAR -> SINCRONIZAR -> LIMPIAR SECRETOS -> GENERAR BITACORA -> CERRAR`

At the end of a meaningful session, append a concise entry to `docs/ai/WORKLOG.md` with the goal, changes, decisions, validation, security scope, Git/Vercel status, remaining work, and exact next action.
