# Pull Request: Add .faf MCP Server to Registry

## Title
Add .faf MCP server to registry

## Description
This PR adds the .faf (Foundational AI-context Format) MCP server to the official registry.

### What is .faf?
.faf is a YAML-based file format specifically designed for AI context. Often described as "The JPEG for AI", it provides project structure, dependencies, and configuration in a format optimized for LLMs to understand.

### MCP Server Details
- **Repository**: https://github.com/fafdev/mcp-server
- **Language**: TypeScript
- **Purpose**: Enables AI assistants (like Claude Desktop) to directly read and understand .faf files in a project
- **Key Features**:
  - Automatic .faf file discovery
  - Project context extraction
  - Dependency mapping
  - Configuration understanding
  - Local-only processing for security

### Why include .faf?
- Approved by Anthropic's MCP team
- Growing adoption in AI development workflows
- Fills a gap for AI-optimized project context
- Open source and actively maintained

### Testing
The server has been tested with:
- Claude Desktop
- Various project structures
- Multiple .faf file formats

### Checklist
- [x] Server is publicly available on GitHub
- [x] Follows MCP protocol standards
- [x] Includes documentation and installation instructions
- [x] Added alphabetically to maintain order
- [x] Includes appropriate logo/favicon

## Changes
- Added .faf entry to README.md in alphabetical order under 'F' (or potentially under '.' for dot-prefixed entries)