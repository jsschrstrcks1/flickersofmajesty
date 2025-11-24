# VoltAgent Subagents for Flickers of Majesty

**Source:** https://github.com/VoltAgent/awesome-claude-code-subagents
**Installed:** 2025-11-24
**Purpose:** Specialized agents for photography e-commerce site

## Installed Agents (8)

### Core 5 (Essential for All Sites)
1. **seo-specialist** - Search engine optimization expert
2. **content-marketer** - Content marketing specialist
3. **accessibility-tester** - A11y compliance expert
4. **performance-engineer** - Performance optimization expert
5. **technical-writer** - Technical documentation specialist

### FOM-Specific (3)
6. **ui-designer** - Visual design and interaction specialist
7. **payment-integration** - Payment systems expert (future e-commerce)
8. **frontend-developer** - UI/UX specialist for React/Vue/Angular

## Usage

Agents auto-activate based on context, or invoke explicitly:

```
# Auto-activation (based on file type, keywords)
Edit products/mountain-majesty.html

# Explicit invocation
"Use the seo-specialist agent to audit this product page"
"Have the ui-designer review this gallery layout"
```

## Integration with FOM-Lite Philosophy

All agents respect FOM-Lite guardrails:
- AI-first, Human-first, Google-second priority order
- Technical SEO over keyword stuffing
- Authentic content over robotic copy
- Accessibility as foundation, not afterthought

## Agent Details

Each agent is a markdown file with:
- **YAML frontmatter** (name, description, tools)
- **Communication protocol** (context gathering)
- **Execution flow** (structured approach)
- **Handoff documentation** (deliverables)

See individual .md files for full specifications.

## Tool Permissions

Agents have access to these tools:
- **Read, Glob, Grep** - File exploration
- **WebFetch, WebSearch** - Research and validation
- **Edit, Write** - Code modifications (when appropriate)

---

**Soli Deo Gloria**
