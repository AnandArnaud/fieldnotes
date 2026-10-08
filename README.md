# fieldnotes

Fieldnotes is a minimal notes app — sign up, jot notes, pin the important ones, archive the rest.

**Stack:** Next.js 15 (App Router, TypeScript)

It is realistic but intentionally small, and 
## Key user actions

sign up · log in · create note · pin note · archive note

## Running it

```bash
npm install
npm run dev   # http://localhost:3000
```

## Analytics

Heap is loaded in `app/layout.tsx` and autocaptures clicks, form submissions and page views. `app/analytics.ts` adds the named events we rely on (`sign_up`, `log_in`, `note_created`, `note_pinned`, `note_archived`) and identifies the user by email. The app id comes from `NEXT_PUBLIC_HEAP_APP_ID` (see `.env.example`).
