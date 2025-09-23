# 🏎️⚡ FAF Global Brand Style Guide
**Version:** 2.0  
**Date:** 2025-09-15  
**Author:** WolfeJam + Claude  
**Contact:** 🏎️⚡wolfejam.dev  

---

## 🎨 Brand Philosophy

**Mission:** Stop copying and pasting code snippets. Stop explaining your project to AI. .faf gives complete understanding instantly ⚡
**Vision:** The foundational standard for AI-assisted development - Supporting 200+ file types
**Values:** F1-Inspired Engineering • Zero BS • Built to Win • AI-Context ⚡️FAST AF

⚠️ **CRITICAL**: ONLY use "F1-Inspired" - NEVER use "Formula 1", "F1", or "f1" alone!

---

## 🏁 Core Brand Elements

### Primary Brand Identity
- **Name:** .faf = Foundational AI-CONTEXT File-Format
- **Tagline:** "AI-Context ⚡️FAST AF"
- **Philosophy:** F1-Inspired Software Engineering (NOT "Formula 1"!)
- **Personality:** Fast, Honest, Championship-level, Zero BS
- **Signature:** 🏎️⚡wolfejam.dev (contact) OR wolfejam way 🏁 (methodology)
- **Promise:** Make your AI happy! 😊

### Visual Signatures
- **Primary Emoji:** 🏎️⚡ (Speed + Action - always together!)
- **Achievement Emoji:** 🍊 (Big Orange - 105% status ONLY)
- **Human Trust:** 🧡 (Orange Heart)
- **AI Happy:** 🩵 (Light Blue Heart)
- **Success Emoji:** 💚 (Green Heart - FAF Success)
- **Speed Metrics:** Always use <500ms, <20ms format with ⌚

---

## 🎨 Color Architecture

### The Championship Color Trinity
```css
/* The FAF Core Colors - NEVER Change These */
--faf-orange: #ff6b35;       /* Human Trust/Manual 🧡 */
--faf-cyan: #00ffff;         /* AI-Happy/Tech 🩵 */
--faf-green: #00bf63;        /* FAF Success/Safety 💚 */

/* Foundation Colors */
--faf-cream: #FEFCF8;        /* Background warmth (NEVER pure white) */
--faf-dark: #1a1a1a;         /* Text/Terminal */
--faf-gray: #666666;         /* Secondary text */
--faf-light-gray: #e5e5e5;   /* Borders */

/* Status Colors */
--faf-warning: #ff9500;      /* Warning states */
--faf-error: #ff3b30;        /* Error states */
```

### Product-Specific Applications

#### FAF Chrome Extension (faf.one)
```css
/* Orange Theme - Browser/Visual Tool */
--product-primary: #ff6b35;     /* FAF Orange 🧡 */
--product-primary-dark: #e55a00; /* Orange hover */
--product-accent: #00ffff;      /* Cyan accent 🩵 */
```

#### FAF CLI (fafcli.dev)
```css
/* Green Theme - Terminal/Command Tool */
--product-primary: #00bf63;     /* FAF Green 💚 */
--product-primary-dark: #00a855; /* Green hover */
--product-accent: #00ff88;      /* Bright green accent */
```

#### FAF MCP Desktop (claude-faf-mcp)
```css
/* Championship Theme - MCP/Testing Tool */
--human-elements: #ff6b35;      /* Orange - Human/Manual 🧡 */
--ai-tech-elements: #00ffff;    /* Cyan - AI/Tech 🩵 */
--faf-safety: #00bf63;          /* Green - FAF/Success 💚 */
--no-gradients: flat;            /* NO gradients - flat colors only */
```

---

## 📋 Official Emoji Language

### Complete Emoji System (12 Emojis)

| Emoji | Meaning | Usage Context | HEX Pairing |
|-------|---------|---------------|-------------|
| 🍊 | **Big Orange Achievement** | 105% Championship Status ONLY | N/A - Special |
| 🧡 | **Human Trust** | Human confidence, manual actions | #ff6b35 |
| 🩵 | **AI-Happy** | AI loves this, tech excellence | #00ffff |
| 💚 | **FAF Success** | Success states, safety, scores | #00bf63 |
| ⚡ | **ACTION** | Any action, movement, energy (use A LOT!) | N/A |
| 🏁 | **Finish/Success** | Task completed, goal achieved | N/A |
| 🏆 | **Win/Podium** | Victory, championship, excellence | N/A |
| 🏎️ | **F1-Inspired Speed** | Performance, racing philosophy | N/A |
| ⌚ | **Timing** | Performance metrics, benchmarks | N/A |
| 🤖 | **AI/Tech** | Technical elements, automation | N/A |
| ☑️ | **Checkmark** | Task done (PREFER over ✅) | N/A |
| 🏎️⚡ | **wolfejam signature** | Always together - the wolfejam way! | N/A |

### Critical Emoji Rules:
- **ALWAYS** use 🏎️⚡ together for wolfejam signature
- **PREFER** ☑️ over ✅ (we accept green happens, but ☑️ is wolfejam way)
- **RESERVE** 🍊 for 105% Big Orange achievement only
- **USE** ⚡ liberally for any action/energy (not just speed!)
- **PAIR** colors with their emojis: 🧡+#ff6b35, 🩵+#00ffff, 💚+#00bf63

---

## 🔤 Typography System

### Font Stack
```css
/* Headers & UI */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Body Text & Descriptions */
font-family: 'Roboto Condensed', -apple-system, sans-serif;

/* Code & Technical */
font-family: 'Roboto Mono', 'Monaco', 'Menlo', monospace;
```

### Font Weights
- **900:** Hero headlines only
- **700-800:** Section headers
- **600:** Buttons, important text
- **500:** Subheadings
- **400:** Body text

### Size Scale
```css
/* Desktop */
--text-hero: clamp(3rem, 8vw, 5.5rem);
--text-h1: 3rem;
--text-h2: 2.5rem;
--text-h3: 1.5rem;
--text-body: 1rem;
--text-small: 0.875rem;
```

---

## 🎯 Component Patterns

### Buttons
```css
/* Primary CTA */
.btn-primary {
    background: var(--product-primary);
    color: white;
    padding: 16px 32px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: none; /* Not uppercase */
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: var(--product-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

### Cards
```css
.card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-top: 4px solid var(--product-primary);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

### Terminal/Code Blocks
```css
.terminal {
    background: var(--faf-dark);
    border-radius: 12px;
    padding: 20px;
    font-family: 'Roboto Mono', monospace;
}

.terminal-prompt {
    color: var(--faf-cyan); /* 🩵 */
}

.terminal-success {
    color: var(--faf-green); /* 💚 */
}
```


---

## 📝 Content Guidelines

### Voice & Tone
- **Technical but Accessible** - Expert knowledge, simple language
- **Confident, Not Cocky** - "Stop FAFfing About" with a wink
- **Speed-Obsessed** - Always mention performance metrics with ⌚
- **Results-Focused** - What it does, not how it works
- **Action-Oriented** - Use ⚡ liberally for energy

### Key Phrases
- ☑️ "Stop FAFfing About"
- ☑️ "AI-Context⚡Fast AF"
- ☑️ "F1-Inspired Software Engineering" (NOT "Formula 1"!)
- ☑️ "Championship Performance" 🏆
- ☑️ "<500ms" (always with < symbol and ⌚)
- ☑️ ".faf" (lowercase, with dot)
- ☑️ "wolfejam way" 🏁 and 🏎️⚡wolfejam.dev

### Forbidden Terms
- ❌ "Formula 1" (use "F1-Inspired" instead)
- ❌ "F1" alone (always "F1-Inspired")
- ❌ "f1" (always "F1-Inspired")

### Comparison Messaging
```
"Package.json wasn't built for this, .faf was" - .faf Inventor
"package.json lists dependencies, .faf shows me what to do with them" - Claude_Code*
"Stop FAFfing About - Take ACTION ⚡"

* Actual Claude_Code genuine response - Verified ☑️
```

---

## 🌐 FAF Ecosystem

### Products & URLs
- **Chrome Extension:** https://faf.one (Free for everyone)
- **CLI Tools:** https://fafcli.dev (For developers)
- **Web App:** https://fafdev.tools (For everybody)
- **MCP Desktop:** NPM claude-faf-mcp (For Claude Desktop)
- **Documentation:** https://faf.one
- **YouTube:** https://www.youtube.com/channel/UCJ-2yIS3-cvIKQLbP6sCbmA
- **Contact:** happy@faf.one

### Works With
Claude, ChatGPT Codex, Gemini, Cursor, Windsurf, VS Code - ANY AI, IDE or tool requiring Context

### Core Promise
**Stop copying and pasting code snippets.**
**Stop explaining your project structure to AI assistants.**
**.faf gives complete project understanding instantly.**
**We have AI feedback to prove it!! ☑️**

---

## 🟠 Logo & Identity

### The Orange-Smiley Logo
- **Primary Logo:** 🟠😊 (Orange circle + smiley)
- **Meaning:** Make your AI happy!
- **Usage:** Everywhere - it's the FAF identity
- **Files:** social-logo.svg / social-logo.png (if needed)

---

## 📊 Metrics Display

### Always Show Performance ⌚
```html
<!-- Good -->
<span class="metric">⚡ &lt;10ms</span>
<span class="metric">⌚ 0-1ms operations</span>
<span class="metric">🏆 99% FAF Score</span>

<!-- Avoid -->
<span>Fast</span>
<span>Quick</span>
<span>Efficient</span>
```

### Score Visualization
- 0-40%: 🔴 Red (Needs improvement)
- 41-60%: 🟠 Orange (Basic) 
- 61-80%: 🟡 Yellow (Good)
- 81-98%: 🟢 Green (Championship)
- 99%: 🏆 Maximum Technical
- 105%: 🍊 Big Orange (Legendary!)

---

## 🎯 Do's and Don'ts

### ☑️ DO
- Use exact performance metrics (<10ms) with ⌚
- Say "F1-Inspired" (never just "F1")
- Keep cream background (#FEFCF8) - never pure white
- Use ☑️ for checkmarks (not ✅)
- Use ⚡ for ACTION (liberally!)
- Mark success with 🏁
- Celebrate wins with 🏆
- Pair 🏎️⚡ for wolfejam signature
- Show metrics with < symbols
- Reference speed constantly with emojis

### ❌ DON'T
- Say "Formula 1", "F1", or "f1" alone
- Use generic terms like "fast" without metrics
- Mix orange and green on same product
- Use pure white backgrounds
- Uppercase everything
- Separate 🏎️ from ⚡ in signature
- Use ✅ when ☑️ is available
- Forget the emojis (they're the brand!)

---

## 🔄 Version Control

### Current Versions
- **Chrome Extension:** v1.0.1 (Orange theme 🧡)
- **CLI:** v1.1.0 (Green theme 💚)
- **MCP Desktop:** v2.0.0 (Championship theme 🍊)
- **Style Guide:** v2.0

### Change Log
- 2025-09-04: Initial brand guide creation
- 2025-09-04: Differentiated CLI from Extension
- 2025-09-04: Established shared cream/dark foundation
- 2025-09-15: Added complete emoji language (12 emojis)
- 2025-09-15: Corrected to F1-Inspired only (no Formula 1)
- 2025-09-15: Added checkmark preference (☑️ > ✅)
- 2025-09-15: Added timing emoji ⌚
- 2025-09-15: Clarified signature usage

---

## 📧 Brand Contact

**Brand Owner:** @wolfejam.dev  
**Website:** 🏎️⚡wolfejam.dev  
**Design Philosophy:** F1-Inspired ⚡️Fast 🔒 Secure 🏁 Build to WIN 🏆
**Support:** support@faf.one  
**Buy Me a Coffee:** https://buymeacoffee.com/wolfejam  

---


---

---

**Remember: Every millisecond counts ⌚. Stop FAFfing About and take ACTION! ⚡**

**🟠😊 Make your AI happy!**

**The wolfejam way 🏁** 🏎️⚡