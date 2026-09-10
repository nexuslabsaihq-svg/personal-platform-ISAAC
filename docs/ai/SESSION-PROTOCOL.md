# Session Protocol

## 1. Enter and recover

1. Confirm the repository, branch, remote, and working-tree status.
2. Read `AGENTS.md`, this protocol, and the newest `WORKLOG.md` entry.
3. Identify the previous goal, verified state, open risks, and next action.
4. Inspect only the code and configuration relevant to the request before proposing a change.

## 2. Verify and plan

1. Map the affected components, routes, dependencies, and user-visible behavior.
2. Look for existing utilities or patterns before creating new ones.
3. Check the affected area for security risks, dead code, duplicate logic, generated artifacts, and stale documentation.
4. For material changes, record the goal, approach, alternatives, risk, and acceptance criteria in the work log before closing the session.

## 3. Work safely

1. Make focused, reversible changes.
2. Preserve existing user work and unrelated modifications.
3. Do not invent professional claims or publish sensitive data.
4. Keep animations performant: use motion values or browser APIs for high-frequency input; avoid state updates on mouse and scroll events.
5. Keep deployment secrets outside the repository and remember that `VITE_*` variables are exposed to the browser.

## 4. Validate

1. Run the smallest relevant validation command. For application code, run `npm run build`.
2. Inspect build warnings and fix warnings caused by the change.
3. Manually inspect changed user flows when a local server is available.
4. State any validation that could not be performed rather than assuming success.

## 5. Back up and synchronize

1. Review `git diff` and `git status --short`.
2. Confirm no sensitive or temporary files are staged or tracked.
3. Create a coherent commit only when requested or when the task explicitly includes synchronization.
4. Push only after a successful commit and report the actual remote result.
5. Treat Vercel as `NOT VERIFIED` until its deployment status and intended URL are confirmed.

## 6. Close the session

Append a work-log entry using this format:

```md
## YYYY-MM-DD — Short session title

**Status:** completed | in progress | blocked
**Goal:** One factual sentence.

### Completed
- `path/to/file`: behavior changed and reason.

### Decisions
- **Decision:** ...
  **Why:** ...
  **Alternative not used:** ...

### Validation
- `command`: pass | fail | not run, with the factual result.
- Manual verification: ...

### Security and hygiene
- Scope reviewed: ...
- Result: no exposed secrets detected | issue found | not fully verified.

### Git and deployment
- Branch: ...
- Commit/push: ...
- Vercel: success | failed | not verified.

### Remaining work
1. ...

### Next action
Exact first action for the next session.
```

The session is closed cleanly only when changes, validation, security scope, backup/synchronization status, and the next action are recorded. Otherwise, mark it as closed with warnings.
