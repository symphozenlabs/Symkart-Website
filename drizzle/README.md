# Database migrations

Migrations are forward-only and live in this directory. Review generated SQL before applying it, then run `npm run db:migrate` against the intended Neon environment. Never use `drizzle-kit push` in shared or production environments, and never rewrite an applied migration.
