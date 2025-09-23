# .faf Format Specification v1.0

## Universal AI Context Format

**Official Definition:** FAF - Foundational AI-context Format

**Description:** Universal, shareable AI-Context for any AI, human or team, regardless of size, location, languages, stack, setup or documentation.

---

## Core Philosophy

**.faf solves the universal problem:** Getting AI to understand your project context instantly.

**Before .faf:**
```
Developer: "Help me build authentication"
AI: "What framework? What language? What's your setup?"
[20 minutes of context building]
```

**After .faf:**
```
[Upload .faf file]
Developer: "Help me build authentication"
AI: "I see you're building a React app with Node.js backend. Let me help..."
[Instant perfect context]
```

---

## Format Specification

### File Format
- **Extension:** `.faf`
- **Format:** YAML or JSON
- **Encoding:** UTF-8
- **Location:** Project root directory

### Minimal Valid .faf

```yaml
# Minimal .faf v1.0
faf_version: "1.0"
project:
  name: "my-project"
  type: "web-app"
```

That's it. Two required fields. Everything else is optional and enhances AI understanding.

### Complete v1.0 Structure

```yaml
# Complete .faf v1.0 Specification
faf_version: "1.0"                    # REQUIRED - Format version
generated: "2025-01-23T10:30:00Z"     # Recommended - ISO 8601 timestamp

# Project Identity - REQUIRED
project:
  name: "project-name"                # REQUIRED - Project identifier
  type: "web-app"                     # REQUIRED - Project type (see types below)
  description: "What this project does" # Optional - One-line description
  version: "1.0.0"                     # Optional - Project version
  
# Technology Stack - Optional but Recommended
stack:
  frontend: "React 18"                # Frontend technology
  backend: "Node.js"                  # Backend technology
  runtime: "Vercel"                   # Deployment platform
  build: "Vite"                       # Build tool
  
# AI Context - Optional but Powerful
ai:
  context_file: "CLAUDE.md"           # Path to detailed context
  score: 85                           # AI-readiness score (0-100)
  
# Metadata - Optional
metadata:
  author: "developer-name"            # Project author
  repository: "github.com/user/repo"  # Source repository
  license: "MIT"                      # License type
```

---

## Field Definitions

### Required Fields

#### `faf_version`
- **Type:** String
- **Required:** Yes
- **Description:** Specification version this file follows
- **Example:** `"1.0"`

#### `project.name`
- **Type:** String
- **Required:** Yes
- **Description:** Human-readable project name
- **Example:** `"my-awesome-app"`

#### `project.type`
- **Type:** String (Enum)
- **Required:** Yes
- **Description:** Project category for AI to understand context
- **Valid Values:**
  - `"web-app"` - Web application
  - `"mobile-app"` - Mobile application
  - `"cli"` - Command-line tool
  - `"library"` - Reusable library/package
  - `"api"` - API/Backend service
  - `"desktop-app"` - Desktop application
  - `"ml-model"` - Machine learning project
  - `"documentation"` - Documentation project
  - `"other"` - Anything else

### Optional Fields

#### `stack` Object
Universal 4-card model that works for any project:
- **frontend:** Client-side technology
- **backend:** Server-side technology
- **runtime:** Where it runs/deploys
- **build:** How it's built

#### `ai` Object
AI-specific context:
- **context_file:** Path to detailed context (e.g., CLAUDE.md)
- **score:** AI-readiness score (0-100)

---

## AI-Readiness Score

The `.faf` score answers: **"How AI-ready is this project?"**

### Score Ranges
- **0-40:** Minimal context - AI will need lots of clarification
- **41-60:** Basic context - AI can help with general tasks
- **61-80:** Good context - AI understands the project well
- **81-90:** Excellent context - AI can be highly effective
- **91-100:** Perfect context - AI has everything needed

### What Increases Score
- Complete technology stack information
- Clear project type and description
- Link to repository
- Reference to context documentation
- Well-defined project structure

---

## Examples

### Minimal Web App
```yaml
faf_version: "1.0"
project:
  name: "my-portfolio"
  type: "web-app"
```

### React + Node.js Project
```yaml
faf_version: "1.0"
generated: "2025-01-23T10:30:00Z"

project:
  name: "task-manager"
  type: "web-app"
  description: "Team task management platform"
  version: "2.1.0"
  
stack:
  frontend: "React 18 + TypeScript"
  backend: "Express.js"
  runtime: "AWS EC2"
  build: "Webpack"
  
ai:
  context_file: "CLAUDE.md"
  score: 87
  
metadata:
  author: "john-doe"
  repository: "github.com/john/task-manager"
  license: "MIT"
```

### Python ML Project
```yaml
faf_version: "1.0"
project:
  name: "sentiment-analyzer"
  type: "ml-model"
  description: "Customer sentiment analysis model"
  
stack:
  frontend: "Jupyter Notebook"
  backend: "Python 3.11"
  runtime: "Google Colab"
  build: "Poetry"
  
ai:
  score: 76
```

### CLI Tool
```yaml
faf_version: "1.0"
project:
  name: "file-organizer"
  type: "cli"
  description: "Automated file organization utility"
  
stack:
  frontend: "Terminal UI"
  backend: "Go"
  runtime: "Cross-platform binary"
  build: "Go Build"
```

---

## Implementation Guidelines

### For Developers
1. Create a `.faf` file in your project root
2. Start with minimal required fields
3. Add optional fields as needed
4. Update when project structure changes

### For AI Tools
1. Look for `.faf` file in project root
2. Parse YAML/JSON structure
3. Use information to understand project context
4. Adapt responses based on stack and preferences

### For Platforms
1. Auto-generate `.faf` from project analysis
2. Suggest improvements to increase AI-readiness score
3. Use `.faf` for better AI integration

---

## Adoption Path

### Individual Developers
- Add `.faf` to personal projects
- Include in GitHub repositories
- Share with team members

### Teams
- Standardize `.faf` in all projects
- Include in project templates
- Use for onboarding

### Organizations
- Mandate `.faf` in development standards
- Auto-generate from CI/CD
- Use for documentation

---

## Future Compatibility

Version 1.0 is intentionally simple. Future versions may add:
- Network awareness (projects talking to each other)
- Detailed scoring breakdowns
- Platform-specific extensions
- Team collaboration features

All v1.0 files will remain valid in future versions.

---

## Resources

- **Specification Home:** [faf.one](https://faf.one)
- **GitHub Repository:** [github.com/Wolfe-Jam/faf](https://github.com/Wolfe-Jam/faf)
- **Examples:** [faf.one/examples](https://faf.one/examples)
- **Validator:** [faf.one/validate](https://faf.one/validate)

---

## License

The .faf specification is open and free for everyone to use.

---

*Universal AI Context for Everyone, Everywhere*

**Stop FAFFing About - Get AI-Ready!** ⚡️