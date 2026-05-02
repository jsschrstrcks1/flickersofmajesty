---
name: voice-audit
description: "Post-draft diagnostic for photography content. Scans for machine tells, assesses authenticity risk, checks voice continuity against the photographer's voice standard. Fires before committing content changes. For during-writing standards, see like-a-human."
version: 1.0.0
---

# Voice Audit — Post-Draft Diagnostics (Photography)

*Fires before committing content. Evaluates what was produced.*

**Relationship to other guardrails:**

- **like-a-human** shapes the *writing* — voice markers, rhythms, vocabulary, visual precision.
- **voice-audit** (this file) reviews the *output* — scanning for drift, flagging machine tells, assessing authenticity.

When drift is detected, the response is **restoration, not rewriting.** A few targeted edits — not a wholesale rewrite that introduces new machine patterns.

---

## Machine Tell Scan

Run this scan against any content written or edited with AI assistance.

### Structural tells

- [ ] Uniform sentence length throughout — mid-length sentences with no spikes or drops
- [ ] Paragraph template loops: thesis line → 2-3 supports → tidy restatement, repeated section after section
- [ ] Visible symmetry: every product description the same length, every gallery text the same number of sentences
- [ ] The sandwich: intro promises what it will say, body says it, conclusion summarizes what it said

### Transition tells

- [ ] "Moreover," "Furthermore," "Additionally," "It's worth noting," "In conclusion," "In essence," "Let's dive in"
- [ ] Any transition smoother than a gear grind — this voice uses: "And then." "But —" "Look closer." "What you don't see:" "The real subject is..."

### Word-level tells

- [ ] Hedging stacks: "It's important to note that," "One might argue," "It seems like," "Perhaps"
- [ ] Adverb inflation: "truly stunning," "deeply moving," "incredibly powerful"
- [ ] Thesaurus syndrome: three words where one would do
- [ ] AI-overrepresented vocabulary: *robust, comprehensive, landscape (as metaphor), realm, leveraging, framework, holistic, narrative, nuanced, multifaceted, foster, delve, tapestry, pivotal, navigate, unpack, resonate, embark, curate, elevate, streamline, harness*
- [ ] Art-world clichés: *captures the essence, evokes a sense of, invites the viewer, explores the interplay, juxtaposition of, speaks to the human condition, transcends the ordinary, a meditation on, pays homage to, celebrates the beauty of, a testament to, breathtaking, mesmerizing*
- [ ] Vague emotional swaps: "contemplative mood" for grief, "tranquil scene" for solitude, "the passage of time" for decay, "a visual journey" for struggle

### Rhythm tells

- [ ] Even sentence length from start to finish
- [ ] Fragment stacking every time emphasis is needed (occasional = human; constant = machine)
- [ ] False variation: complex/simple alternation in a mechanical pattern

### Substance tells

- [ ] Everything important, nothing specific: "This beautiful photograph captures a stunning moment in nature"
- [ ] Interchangeable descriptions that could be swapped onto any photographer's product page
- [ ] Correct but bloodless: subject identified, technique noted, but no one who took the shot would recognize the description
- [ ] No rough edges: every paragraph resolves cleanly
- [ ] Generic beauty language where specific visual observation belongs

### Seam detection

- [ ] One or more paragraphs shift to a more abstract, polished, or catalog-like register
- [ ] Paragraphs whose sentences all open the same way
- [ ] A section that feels "inserted" rather than grown from the artist's perspective

---

## Voice Continuity Check

Compare the draft against the like-a-human voice standard. The baseline voice has these markers:

### Must be present

- **Photographer's eye:** Descriptions that reference what the light was doing, where the eye lands, what was happening off-frame
- **At least one concrete, specific detail per piece:** Location, time of day, weather, technical choice that shaped the image
- **Restraint:** More unsaid than said. The image carries the weight; the words serve it
- **Visual precision over emotional generality:** "The fog sat about three feet off the water" vs. "a misty morning"
- **Reverence without preaching:** Creation honored as His. Not every piece names God, but none treats the subject as mere decoration

### Must be absent

- AI-overrepresented vocabulary (see Machine Tell Scan)
- Art-world cliché language (see Machine Tell Scan)
- Promotional drift ("perfect for," "must-have," "you'll love")
- Generic beauty ("stunning views," "breathtaking scenery," "awe-inspiring")
- Hedging stacks
- Catalog-speak ("This exquisite piece will complement any living space")
- Road-map paragraphs that announce what's coming

### Drift indicators

If three or more of the "must be present" markers are missing, or two or more of the "must be absent" items appear, the draft has drifted. Flag specific locations and suggest minimal restoration edits.

---

## Precision Check

1. **Visual specificity present?** Light quality, time of day, weather, physical details about the scene. If the description could apply to any photograph of similar subject matter, it hasn't been sharpened.

2. **The competitor test.** Could this description be copy-pasted onto another photographer's site and still work? If yes, add a pinning detail or flag for rewrite.

3. **Technical details earned?** When technique is mentioned, does it illuminate the image ("wide open, so the background dissolves") or just display credentials ("shot at f/2.8, 1/250s, ISO 400")?

4. **Emotional words match emotional reality?** When the image depicts solitude, is "solitude" on the page — or has it been swapped for "peaceful serenity"? The sharp word is the right word.

5. **Product descriptions practical?** For prints: Does the buyer know the size, medium, and what the medium does to this specific image? "On metal, the blacks go absolute" is useful. "Printed on premium materials" is catalog-speak.

---

## Authenticity Risk Assessment

After completing all checks, assign an overall rating:

**Authenticity Risk: Low / Medium / High**

Evaluate based on:

- Machine tell density
- Voice continuity (photographer's eye present or absent)
- Precision density (specific visual details or generic claims)
- Art-cliché density
- Emotional register accuracy
- Promotional drift
- Catalog-speak contamination

**High risk if:**

- More than 5 machine tells flagged
- Three or more voice markers missing
- No concrete visual details in the entire piece
- Every description is the same length (visible symmetry)
- The piece could survive on a stock photography site unchanged
- No rough edges anywhere
- Art-world clichés appear more than twice
- Product descriptions read like a department store catalog

**Output:** Flag specific locations. Suggest 3-5 minimal restoration edits. Do not rewrite. Restore the voice.

*This assessment is internal and never published.*

---

*Soli Deo Gloria*
