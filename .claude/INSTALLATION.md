# Claude Code Enhancement Installation

**Project:** Flickers of Majesty
**Date:** 2025-11-24
**Protocol:** FOM-Lite v1.0

## Installation Summary

This document details the 6-layer Claude Code enhancement system installed on this repository.

### Installed Components

**Total Skills:** 6
**Total Plugins:** 8
**Total Commands:** 6
**Total Hooks:** 2
**Configuration Files:** 3

---

## Layer 1: Foundation (Auto-Activation System)

**Source:** diet103/claude-code-infrastructure-showcase

**Components Installed:**
- `.claude/hooks/skill-activation-prompt.sh` - Intelligently loads skills based on context
- `.claude/hooks/post-tool-use-tracker.sh` - Tracks tool usage to optimize future loads
- `.claude/settings.json` - Hook configuration
- `.claude/skill-rules.json` - Skill activation rules (customized for photography e-commerce)

**Skills Included:**
- `skill-developer` - Meta-skill for creating and managing Claude Code skills
- `frontend-dev-guidelines` - HTML/CSS/JavaScript best practices

**Purpose:** Provides auto-activation system for intelligent skill loading

---

## Layer 2: Official Anthropic Patterns

**Source:** anthropics/skills

**Skills Installed:**
- `skill-creator` - Official pattern for creating new skills
- `web-artifacts-builder` - Web component generation
- `frontend-design` - Frontend design patterns
- `pdf` - PDF document generation

**Purpose:** Official Anthropic skill patterns and document generation

---

## Layer 3: Granular Plugins (Content Focus)

**Source:** wshobson/agents

**Plugins Installed:**
1. `accessibility-compliance` - WCAG AA compliance checking
2. `content-marketing` - Content strategy and marketing
3. `seo-analysis-monitoring` - SEO analysis and monitoring
4. `seo-content-creation` - SEO-optimized content creation
5. `seo-technical-optimization` - Technical SEO optimization
6. `frontend-mobile-development` - Mobile-first frontend development
7. `code-documentation` - Code documentation generation
8. `performance-testing-review` - Performance testing and review

**Purpose:** Token-optimized, specialized plugins for photography e-commerce site

**Why These Plugins:**
- SEO is critical for e-commerce visibility
- Accessibility ensures broad audience reach
- Content marketing supports product storytelling
- Performance affects conversion rates

---

## Layer 4: Workflow Automation

**Source:** wshobson/spec-workflow

**Commands Installed:**
- `/spec-create` - Generate project specifications
- `/spec-execute` - Execute specifications

**Configuration:**
- `.claude/spec-config.json` - Workflow configuration
- `.claude/templates/tasks-template.md` - Task templates

**Purpose:** Requirements → Design → Tasks → Implementation pipeline

**Usage:**
```bash
/spec-create "Add newsletter signup to homepage"
/spec-execute newsletter-signup
```

---

## Layer 5: UI/UX Pattern References

**Source:** mustafakendiguzel/claude-code-ui-agents

**References Installed:**
- `.claude/references/ui-patterns/accessibility/` - Accessibility patterns
- `.claude/references/ui-patterns/responsive/` - Responsive design patterns
- `.claude/references/ui-patterns/ui-design/` - UI design patterns
- `.claude/references/ui-patterns/components/` - Component patterns
- `.claude/references/ui-patterns/animation/` - Animation patterns
- `.claude/references/ui-patterns/ux-research/` - UX research patterns
- `.claude/references/ui-patterns/web-development/` - Web development patterns

**Purpose:** Reference library for common UI/UX tasks

**Usage:** Point Claude to specific patterns when needed

---

## Layer 6: Utilities

**Source:** hesreallyhim/awesome-claude-code

**Commands Installed:**
- `/add-to-changelog` - Add entries to CHANGELOG.md
- `/update-docs` - Update documentation
- `/create-pr` - Create pull requests
- `/commit` - Commit helper

**Purpose:** Community-curated utilities for common tasks

---

## Skill Activation Rules

The `.claude/skill-rules.json` has been customized for photography e-commerce with **FOM-Lite guardrails**:

### Active Skills:

1. **skill-developer** (High Priority)
   - Triggers: "skill system", "create skill", "skill rules"
   - Purpose: Meta-skill for managing Claude Code skills

2. **frontend-dev-guidelines** (High Priority)
   - Triggers: HTML, CSS, JavaScript, accessibility, WCAG
   - Files: *.html, *.css, *.js
   - Purpose: HTML/CSS/JS best practices

3. **seo-optimizer** (High Priority) ⚠️ **WITH FOM-LITE GUARDRAILS**
   - Triggers: SEO, meta tags, schema.org, structured data
   - Files: *.html, products/**, categories/**
   - Purpose: SEO optimization that supports FOM-Lite philosophy
   - **Guardrails:**
     - ✅ ACCEPT: Schema.org, semantic HTML, natural meta descriptions, meaningful alt text
     - ❌ REJECT: Keyword stuffing, readability compromises, removing AI-first meta tags

4. **accessibility-auditor** (High Priority)
   - Triggers: accessibility, a11y, WCAG, aria
   - Files: *.html
   - Purpose: Web accessibility compliance

5. **content-strategy** (High Priority) ⚠️ **WITH FOM-LITE GUARDRAILS**
   - Triggers: content, product description, copywriting
   - Files: products/**, categories/**, index.html
   - Purpose: Content strategy aligned with FOM-Lite philosophy
   - **Guardrails:**
     - ✅ ACCEPT: Natural language, storytelling, fit-guidance, authentic voice
     - ❌ REJECT: Keyword-stuffed descriptions, robotic copy, template-based content

6. **performance-analyzer** (Medium Priority)
   - Triggers: performance, lighthouse, core web vitals
   - Purpose: Web performance optimization

---

## FOM-Lite Philosophy Integration

All skills have been configured to respect the FOM-Lite philosophy:

### Priority Order:
1. **AI-First:** Structure content so AI can accurately understand
2. **Human-First:** NEVER compromise user experience
3. **Google Second:** SEO is tertiary, not primary

### Skill Filtering Lens:

Every skill suggestion passes through this evaluation:

```
Skill suggests something
    ↓
✅ Does it help AI understand?
✅ Does it maintain/improve human experience?
✅ Does it happen to help SEO? (Bonus!)
❌ Does it sacrifice human/AI for SEO? (REJECT!)
```

### Guardrail Principles:

**SEO Skills:**
- Focus on technical SEO (schema.org, semantic HTML, meta tags)
- Benefits AI + humans + search engines simultaneously
- Rejects keyword stuffing, readability compromises, removal of AI-helpful elements

**Content Skills:**
- Prioritize authentic, natural language for humans
- Maintain AI comprehension through structure, not robotic language
- Reject keyword-optimized, template-based copy

**Accessibility:**
- Benefits all audiences (humans, AI, assistive tech, search engines)
- Always prioritize - never compromises

**Performance:**
- Improves human experience first
- Supports all other goals
- Always prioritize

### Examples:

**✅ ACCEPTED by guardrails:**
```html
<!-- Schema.org markup - helps AI + humans + SEO -->
<script type="application/ld+json">
{
  "@type": "Product",
  "name": "Mountain Majesty",
  "description": "Golden hour light transforms ordinary peaks..."
}
</script>

<!-- Natural, human-focused description -->
<p>This photograph captures the fleeting moment when...</p>

<!-- AI-first meta + standard meta -->
<meta name="ai:summary" content="Landscape photography...">
<meta name="description" content="Landscape photography...">
```

**❌ REJECTED by guardrails:**
```html
<!-- Keyword stuffing - violates human-first -->
<h1>Buy Mountain Photography Prints Online Shop Store</h1>

<!-- Unnatural keyword density -->
<p>Mountain photography mountain prints mountain landscape...</p>

<!-- Removing AI-helpful elements -->
<meta name="description" content="...">
<!-- DON'T remove: <meta name="ai:summary" content="..."> -->
```

---

## Testing the Installation

### Test Auto-Activation:

1. **Open an HTML file** - Should auto-suggest web-artifacts-builder
2. **Mention "SEO"** - Should auto-suggest seo-optimizer
3. **Mention "accessibility"** - Should auto-suggest accessibility-auditor

### Test Workflow Commands:

```bash
# Create a specification
/spec-create "Add product grid to homepage"

# Execute specification
/spec-execute product-grid
```

### Test Utility Commands:

```bash
# Add changelog entry
/add-to-changelog

# Update documentation
/update-docs

# Create pull request
/create-pr
```

---

## Directory Structure

```
.claude/
├── hooks/
│   ├── skill-activation-prompt.sh          # Layer 1
│   └── post-tool-use-tracker.sh            # Layer 1
│
├── skill-rules.json                        # Layer 1 (customized)
├── settings.json                           # Layer 1
├── spec-config.json                        # Layer 4
│
├── skills/
│   ├── skill-developer/                    # Layer 1
│   ├── frontend-dev-guidelines/            # Layer 1
│   ├── skill-creator/                      # Layer 2
│   ├── web-artifacts-builder/              # Layer 2
│   ├── frontend-design/                    # Layer 2
│   └── pdf/                                # Layer 2
│
├── plugins/
│   ├── accessibility-compliance/           # Layer 3
│   ├── content-marketing/                  # Layer 3
│   ├── seo-analysis-monitoring/            # Layer 3
│   ├── seo-content-creation/               # Layer 3
│   ├── seo-technical-optimization/         # Layer 3
│   ├── frontend-mobile-development/        # Layer 3
│   ├── code-documentation/                 # Layer 3
│   └── performance-testing-review/         # Layer 3
│
├── commands/
│   ├── spec-create.md                     # Layer 4
│   ├── spec-execute.md                    # Layer 4
│   ├── add-to-changelog/                  # Layer 6
│   ├── update-docs/                       # Layer 6
│   ├── create-pr/                         # Layer 6
│   └── commit/                            # Layer 6
│
├── references/
│   └── ui-patterns/                       # Layer 5
│       ├── accessibility/
│       ├── responsive/
│       ├── ui-design/
│       ├── components/
│       ├── animation/
│       ├── ux-research/
│       └── web-development/
│
└── templates/
    └── tasks-template.md                  # Layer 4
```

---

## Benefits

### 1. **Intelligent Skill Loading**
- Skills auto-activate based on context
- Reduces token usage
- No manual skill selection needed

### 2. **SEO-Optimized**
- 3 dedicated SEO plugins
- Auto-triggers on SEO-related tasks
- Ensures schema.org compliance

### 3. **Accessibility-First**
- Auto-checks WCAG compliance
- Suggests improvements
- Ensures broad audience reach

### 4. **Content Strategy**
- Dedicated content marketing plugin
- Product description optimization
- Storytelling guidance

### 5. **Performance-Focused**
- Performance testing plugin
- Lighthouse optimization
- Core Web Vitals monitoring

### 6. **Workflow Automation**
- Spec → Design → Tasks pipeline
- Reduces manual planning overhead
- Consistent project structure

---

## Customization

To add more skills or modify triggers:

1. Edit `.claude/skill-rules.json`
2. Add new skills to `.claude/skills/`
3. Add new plugins to `.claude/plugins/`
4. Add new commands to `.claude/commands/`

For creating new skills:
```bash
# Use the skill-creator skill
"Use the skill-creator skill to help me build a new custom skill"
```

---

## Integration with FOM-Lite Protocol

This Claude Code enhancement system is designed to work seamlessly with the FOM-Lite v1.0 protocol:

- **SEO skills** → Optimize FOM-Lite meta tags
- **Content strategy** → Enhance fit-guidance sections
- **Accessibility** → Ensure WCAG compliance
- **Performance** → Optimize WebP images and loading

---

## Maintenance

### Regular Updates:
1. Pull latest changes from source repositories
2. Review new skills/plugins
3. Update skill-rules.json if needed
4. Test auto-activation

### Token Optimization:
- Monitor which skills are actually used
- Disable unused skills in skill-rules.json
- Keep only relevant plugins

---

## Troubleshooting

**Skills not auto-activating:**
- Check `.claude/hooks/` permissions (should be executable)
- Verify `.claude/skill-rules.json` syntax
- Check `.claude/settings.json` hook configuration

**Commands not found:**
- Ensure commands have .md extension
- Check directory structure: `.claude/commands/command-name/command-name.md`
- Verify YAML frontmatter in command files

**Performance issues:**
- Too many skills loaded? Disable unused ones in skill-rules.json
- Check plugin token usage
- Consider removing optional plugins

---

## Version History

**v1.0.0** - 2025-11-24
- Initial installation
- 6 skills installed
- 8 plugins installed
- 6 commands installed
- Custom skill-rules.json for photography e-commerce

---

**Soli Deo Gloria**
