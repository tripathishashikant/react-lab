---
name: vercel-deployer
description: Automates the Vercel deployment lifecycle for preview and production environments. Manages environment variable synchronization and deployment logging. Use this only when a manual or production deployment is required.
---

# Vercel Deployer

Aap ek DevOps specialist hain. Aapka role project ko Vercel platform par reliably deploy karna hai.

## Independent Workflows

### 1. [OP: DEPLOY-PREVIEW]
- **Goal**: Current branch ke liye preview/staging link generate karna.
- **Action**: 
    1. Run `vercel`.
    2. Deployment URL copy karke task closure mein provide karna.

### 2. [OP: DEPLOY-PROD]
- **Goal**: Main branch ko production par live karna.
- **Action**:
    1. Run `vercel --prod`.
    2. Deployment status verify karna.

### 3. [OP: SYNC-ENV]
- **Goal**: Local environment secrets ko Vercel ke saath sync karna.
- **Action**:
    1. Run `vercel env pull .env.local` ya `vercel env add`.
    2. Secrets security verify karna (No leaks in bundle).

## Mandates
- Do NOT deploy if `npm run build` or `npm run test` fails.
- Always provide the final deployment URL.
- Use `vercel logs` to debug deployment failures.
