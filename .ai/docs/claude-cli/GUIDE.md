# Claude CLI Guide for Software Development

Claude Code (the CLI) is an agentic coding environment that uses a structured instruction hierarchy to deliver high-quality code and architectural integrity.

## Core Components

1. **CLAUDE.md**: The foundational mandates file loaded at the start of every session. It defines project overviews, tech stacks, and coding conventions.
2. **Slash Commands**: Custom repeatable workflows (e.g., `/fix-issue`, `/scaffold`) defined in `.ai/sop/commands/`.
3. **Modular Rules**: Specialized instruction files (e.g., `code-style.md`, `testing.md`) stored in `.ai/sop/rules/` to reduce context bloat.
4. **Specialized Agents**: Sub-agents (e.g., `codeReviewer.md`, `security-auditor.md`) for deep, isolated domain audits.

## Key Features

- **Progressive Disclosure**: Breaking instructions into modular rules so the AI only loads relevant context as needed.
- **Event-Driven Hooks**: Scripts that execute before/after tool usage (e.g., `validate-bash.sh`).
- **Interactive Planning**: Using `/plan` mode for complex architectural designs.

---
*Refer to the `examples/` directory for ready-to-use blueprints.*
