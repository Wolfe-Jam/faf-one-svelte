<script>
	import { onMount } from 'svelte';
	
	let activeSection = $state('quickstart');
	
	function scrollToSection(id) {
		activeSection = id;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>.faf Documentation - The JPEG for AI™</title>
	<meta name="description" content="Complete documentation for .faf format - setup, usage, and API reference">
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="docs-layout">
	<aside class="docs-sidebar">
		<div class="sidebar-header">
			<h3>.faf Docs</h3>
			<span class="version">v2.2.0</span>
		</div>
		
		<nav class="sidebar-nav">
			<button class="nav-item" class:active={activeSection === 'quickstart'} onclick={() => scrollToSection('quickstart')}>
				Quick Start
			</button>
			<button class="nav-item" class:active={activeSection === 'installation'} onclick={() => scrollToSection('installation')}>
				Installation
			</button>
			<button class="nav-item" class:active={activeSection === 'usage'} onclick={() => scrollToSection('usage')}>
				Basic Usage
			</button>
			<button class="nav-item" class:active={activeSection === 'format'} onclick={() => scrollToSection('format')}>
				Format Spec
			</button>
			<button class="nav-item" class:active={activeSection === 'cli'} onclick={() => scrollToSection('cli')}>
				CLI Commands
			</button>
			<button class="nav-item" class:active={activeSection === 'mcp'} onclick={() => scrollToSection('mcp')}>
				MCP Server
			</button>
			<button class="nav-item" class:active={activeSection === 'extension'} onclick={() => scrollToSection('extension')}>
				Chrome Extension
			</button>
			<button class="nav-item" class:active={activeSection === 'api'} onclick={() => scrollToSection('api')}>
				API Reference
			</button>
		</nav>
	</aside>
	
	<main class="docs-content">
		<section id="quickstart" class="doc-section">
			<h1>📚 .faf Documentation</h1>
			<p class="lead">The complete guide to using .faf - The JPEG for AI™</p>
			
			<div class="quickstart-box">
				<h2>⚡ Quick Start</h2>
				<p>Get started with .faf in seconds:</p>
				
				<div class="code-block">
					<pre><code># Install globally
npm install -g claude-faf-mcp

# Create your first .faf
faf init my-project

# Add to existing project
cd your-project
faf init .</code></pre>
				</div>
			</div>
		</section>
		
		<section id="installation" class="doc-section">
			<h2>🔧 Installation</h2>
			
			<h3>CLI Installation</h3>
			<div class="code-block">
				<pre><code># NPM
npm install -g claude-faf-mcp

# Yarn
yarn global add claude-faf-mcp

# PNPM
pnpm add -g claude-faf-mcp</code></pre>
			</div>
			
			<h3>Chrome Extension</h3>
			<p>Install directly from the Chrome Web Store:</p>
			<a href="https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm" class="btn-docs" target="_blank">
				Install Chrome Extension →
			</a>
			
			<h3>MCP Server</h3>
			<div class="code-block">
				<pre><code># Clone and setup
git clone https://github.com/Wolfe-Jam/faf
cd faf
npm install
npm run build</code></pre>
			</div>
		</section>
		
		<section id="usage" class="doc-section">
			<h2>💻 Basic Usage</h2>
			
			<h3>Creating a .faf file</h3>
			<div class="code-block">
				<pre><code># Interactive mode
faf init

# With project name
faf init my-awesome-project

# In current directory
faf init .</code></pre>
			</div>
			
			<h3>Updating .faf</h3>
			<div class="code-block">
				<pre><code># Auto-detect and update
faf update

# Force regeneration
faf update --force

# Custom depth
faf update --depth 5</code></pre>
			</div>
		</section>
		
		<section id="format" class="doc-section">
			<h2>📋 Format Specification</h2>
			
			<h3>Structure</h3>
			<p>A .faf file uses YAML format with these key sections:</p>
			
			<div class="code-block">
				<pre><code>project: "Your Project Name"
version: "1.0.0"
description: "Project description"
stack:
  - technology: "Framework/Language"
    version: "x.x.x"

structure:
  type: "tree"
  root: "."
  
rules:
  include:
    - "src/**"
    - "*.config.js"
  exclude:
    - "node_modules"
    - ".git"
    
context: |
  Additional context about your project
  Can be multiple lines</code></pre>
			</div>
			
			<h3>.fafignore</h3>
			<p>Control what gets included in your context:</p>
			<div class="code-block">
				<pre><code># Dependencies
node_modules/
vendor/

# Build outputs  
dist/
build/

# Environment
.env
.env.local

# IDE
.vscode/
.idea/</code></pre>
			</div>
		</section>
		
		<section id="cli" class="doc-section">
			<h2>⌨️ CLI Commands</h2>
			
			<table class="command-table">
				<thead>
					<tr>
						<th>Command</th>
						<th>Description</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>faf init</code></td>
						<td>Initialize a new .faf file</td>
						<td><code>--force</code>, <code>--minimal</code></td>
					</tr>
					<tr>
						<td><code>faf update</code></td>
						<td>Update existing .faf</td>
						<td><code>--force</code>, <code>--depth</code></td>
					</tr>
					<tr>
						<td><code>faf validate</code></td>
						<td>Validate .faf format</td>
						<td><code>--strict</code></td>
					</tr>
					<tr>
						<td><code>faf stats</code></td>
						<td>Show project statistics</td>
						<td><code>--json</code></td>
					</tr>
					<tr>
						<td><code>faf export</code></td>
						<td>Export to other formats</td>
						<td><code>--format</code></td>
					</tr>
				</tbody>
			</table>
		</section>
		
		<section id="mcp" class="doc-section">
			<h2>🤖 MCP Server</h2>
			<p>The Model Context Protocol server enables AI models to understand your project structure instantly.</p>
			
			<h3>Configuration</h3>
			<div class="code-block">
				<pre><code>{`{
  "mcpServers": {
    "faf": {
      "command": "node",
      "args": ["path/to/faf-mcp/dist/index.js"],
      "env": {
        "FAF_ROOT": "/path/to/projects"
      }
    }
  }
}`}</code></pre>
			</div>
			
			<h3>Available Tools</h3>
			<ul>
				<li><code>faf_read</code> - Read .faf file contents</li>
				<li><code>faf_update</code> - Update .faf file</li>
				<li><code>faf_validate</code> - Validate format</li>
				<li><code>faf_stats</code> - Get project statistics</li>
			</ul>
		</section>
		
		<section id="extension" class="doc-section">
			<h2>🌐 Chrome Extension</h2>
			<p>The Chrome Extension adds .faf support directly to your browser.</p>
			
			<h3>Features</h3>
			<ul>
				<li>☑️ Auto-detect .faf files on GitHub</li>
				<li>☑️ One-click copy to clipboard</li>
				<li>☑️ Format validation</li>
				<li>☑️ Stats overlay</li>
			</ul>
			
			<h3>Keyboard Shortcuts</h3>
			<table class="command-table">
				<thead>
					<tr>
						<th>Shortcut</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>Alt+F</code></td>
						<td>Toggle .faf viewer</td>
					</tr>
					<tr>
						<td><code>Alt+C</code></td>
						<td>Copy .faf content</td>
					</tr>
					<tr>
						<td><code>Alt+S</code></td>
						<td>Show stats</td>
					</tr>
				</tbody>
			</table>
		</section>
		
		<section id="api" class="doc-section">
			<h2>🔌 API Reference</h2>
			
			<h3>Node.js API</h3>
			<div class="code-block">
				<pre><code>{`import { FAF } from 'faf-cli';

// Read .faf file
const faf = await FAF.read('./project.faf');

// Generate .faf
const generated = await FAF.generate({
  path: './my-project',
  depth: 3,
  exclude: ['node_modules']
});

// Validate
const isValid = await FAF.validate(fafContent);

// Get stats
const stats = await FAF.stats('./project.faf');`}</code></pre>
			</div>
			
			<h3>Response Format</h3>
			<div class="code-block">
				<pre><code>{`{
  "success": true,
  "data": {
    "project": "string",
    "version": "string",
    "files": number,
    "directories": number,
    "score": number
  },
  "performance": {
    "time": "45ms"
  }
}`}</code></pre>
			</div>
		</section>
		
		<div class="docs-footer">
			<p>Need help? <a href="/support">Contact Support</a> or check our <a href="https://github.com/Wolfe-Jam/faf" target="_blank">GitHub</a></p>
		</div>
	</main>
</div>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
		transform: translateX(-2px);
	}

	.docs-layout {
		display: grid;
		grid-template-columns: 250px 1fr;
		min-height: calc(100vh - 80px);
		background: var(--faf-white);
	}
	
	.docs-sidebar {
		background: #f8f8f8;
		border-right: 1px solid #e0e0e0;
		padding: 2rem 0;
		position: sticky;
		top: 80px;
		height: calc(100vh - 80px);
		overflow-y: auto;
	}
	
	.sidebar-header {
		padding: 0 1.5rem 1.5rem;
		border-bottom: 1px solid #e0e0e0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.sidebar-header h3 {
		margin: 0;
		font-size: 1.25rem;
		color: var(--faf-black);
	}
	
	.version {
		background: var(--faf-orange);
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 700;
	}
	
	.sidebar-nav {
		padding: 1.5rem 0;
	}
	
	.nav-item {
		display: block;
		width: 100%;
		padding: 0.75rem 1.5rem;
		background: none;
		border: none;
		text-align: left;
		color: #666;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 0.925rem;
	}
	
	.nav-item:hover {
		background: #f0f0f0;
		color: var(--faf-black);
	}
	
	.nav-item.active {
		background: var(--faf-orange);
		color: white;
		font-weight: 600;
	}
	
	.docs-content {
		padding: 3rem;
		max-width: 900px;
		margin: 0 auto;
	}
	
	.doc-section {
		margin-bottom: 4rem;
		scroll-margin-top: 100px;
	}
	
	.doc-section h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}
	
	.doc-section h2 {
		font-size: 1.75rem;
		margin: 2rem 0 1rem;
		color: var(--faf-black);
		border-bottom: 2px solid var(--faf-orange);
		padding-bottom: 0.5rem;
	}
	
	.doc-section h3 {
		font-size: 1.25rem;
		margin: 1.5rem 0 1rem;
		color: var(--faf-black);
	}
	
	.lead {
		font-size: 1.25rem;
		color: #666;
		margin-bottom: 2rem;
	}
	
	.quickstart-box {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border: 3px solid var(--faf-orange);
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}
	
	.code-block {
		background: var(--faf-black);
		color: white;
		padding: 1.5rem;
		border-radius: 8px;
		margin: 1rem 0;
		overflow-x: auto;
	}
	
	.code-block pre {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		line-height: 1.6;
	}
	
	.code-block code {
		color: white;
	}
	
	.btn-docs {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: var(--faf-orange);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: all 0.2s ease;
	}
	
	.btn-docs:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0,0,0,0.2);
	}
	
	.command-table {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
	}
	
	.command-table th {
		background: var(--faf-black);
		color: white;
		padding: 0.75rem;
		text-align: left;
		font-weight: 600;
	}
	
	.command-table td {
		padding: 0.75rem;
		border-bottom: 1px solid #e0e0e0;
	}
	
	.command-table code {
		background: #f0f0f0;
		padding: 0.125rem 0.375rem;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.875rem;
	}
	
	.doc-section ul {
		list-style: none;
		padding: 0;
		margin: 1rem 0;
	}
	
	.doc-section ul li {
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		position: relative;
	}
	
	.doc-section ul li:before {
		content: "☑️";
		position: absolute;
		left: 0;
	}
	
	.docs-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e0e0e0;
		text-align: center;
		color: #666;
	}
	
	.docs-footer a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}
	
	.docs-footer a:hover {
		text-decoration: underline;
	}
	
	@media (max-width: 768px) {
		.docs-layout {
			grid-template-columns: 1fr;
		}
		
		.docs-sidebar {
			display: none;
		}
		
		.docs-content {
			padding: 2rem 1rem;
		}
	}
</style>