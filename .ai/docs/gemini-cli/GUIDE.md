# Gemini CLI Guide for Software Development

Gemini CLI provides an agentic experience for software development, focusing on structured workflows and multi-agent orchestration.

## Core Components

1. **Mandates (`GEMINI.md`)**: The root instruction file that defines project-specific rules, tech stacks, and architectural requirements.
2. **Sub-Agents**: Specialized agents like `generalist` (for batch tasks) and `codebase_investigator` (for research).
3. **Skills**: Modular capabilities (e.g., `release-manager`, `context-updater`) that extend the agent's functionality with procedural knowledge.
4. **Toolbox**: A collection of built-in tools like `read_file`, `grep_search`, and `run_shell_command` for interacting with the codebase.

## Standard Workflow (SOP)
The most effective way to use Gemini CLI is through an 8-phase SOP:
- **Planning**: Understanding requirements before touching code.
- **Issues**: Tracking progress via GitHub Issues.
- **TDD**: Writing failing tests before implementation.
- **Reviews**: Using specialized agents for security, code style, and accessibility.
- **PRs**: Staging changes and creating pull requests with user approval.

---
*Refer to the `examples/` directory for ready-to-use blueprints.*
