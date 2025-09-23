# MCP Registry Submission Instructions

## Prerequisites
1. Ensure https://github.com/fafdev/mcp-server exists and is public
2. Have a GitHub account

## Steps to Submit

### 1. Fork the Repository
- Go to https://github.com/modelcontextprotocol/servers
- Click "Fork" button in top-right
- This creates your own copy

### 2. Edit the README
- In your forked repository, click on `README.md`
- Click the pencil icon to edit
- Find the alphabetical position under 'F' (probably after "Facebook" if it exists)
- Add this line:
```markdown
<img height="12" width="12" src="https://faf.one/favicon.ico" alt=".faf Logo" /> **[FAF - Foundational AI-context Format](https://github.com/fafdev/mcp-server)** - Provides AI with instant context from .faf files - the YAML-based format designed specifically for AI understanding. Reads project structure, dependencies, and configurations in a format optimized for LLMs.
```

### 3. Commit Changes
- Scroll down to "Commit changes"
- Use commit message: "Add FAF MCP server to registry"
- Select "Create a new branch for this commit and start a pull request"
- Name the branch: `add-faf-mcp-server`

### 4. Create Pull Request
- Click "Propose changes"
- Copy the content from `PR-TEMPLATE.md` into the PR description
- Submit the pull request

### 5. Alternative: Using GitHub CLI
If you prefer command line:
```bash
# Fork and clone
gh repo fork modelcontextprotocol/servers --clone

# Navigate to the repo
cd servers

# Create branch
git checkout -b add-faf-mcp-server

# Edit README.md and add the FAF entry

# Commit
git add README.md
git commit -m "Add FAF MCP server to registry"

# Push and create PR
git push origin add-faf-mcp-server
gh pr create --title "Add FAF MCP server to registry" --body-file ../mcp-registry-submission/PR-TEMPLATE.md
```

## What Happens Next?
1. The MCP team will review your PR
2. They may request changes or additional information
3. Once approved, it will be merged
4. FAF will appear in the official MCP registry!

## Important Notes
- Make sure the favicon.ico is accessible at https://faf.one/favicon.ico
- Ensure your MCP server repo has clear README with installation instructions
- Be responsive to any feedback from maintainers