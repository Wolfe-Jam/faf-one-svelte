<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-brand">
				<div class="footer-logo">
					<span class="logo-text">.faf</span>
					<span class="logo-tagline">The JPEG for AI™</span>
				</div>
				<p class="footer-mission">NO BS. No FAFfing About.</p>
				<div class="footer-stats">
					<div class="stat">☑️ MCP Approved</div>
					<div class="stat">☑️ Chrome Extension LIVE</div>
					<div class="stat">☑️ 10,000+ Projects</div>
				</div>
			</div>
			
			<div class="footer-column">
				<h4>Product</h4>
				<ul>
					<li><a href="https://github.com/fafformat/faf-cli" target="_blank">.faf CLI</a></li>
					<li><a href="https://github.com/fafformat/chrome-extension" target="_blank">Chrome Extension</a></li>
					<li><a href="https://github.com/fafformat/mcp-server" target="_blank">MCP Server</a></li>
					<li><a href="/docs">Documentation</a></li>
				</ul>
			</div>
			
			<div class="footer-column">
				<h4>Resources</h4>
				<ul>
					<li><a href="/support">Support</a></li>
					<li><a href="/calculator">ROI Calculator</a></li>
					<li><a href="https://billing.stripe.com/p/login/4gM3cx1NPbfo42Lab6bV600" target="_blank">Customer Portal</a></li>
					<li><a href="/founders">Founders Circle</a></li>
				</ul>
			</div>
			
			<div class="footer-column">
				<h4>Company</h4>
				<ul>
					<li><a href="/terms">Terms of Service</a></li>
					<li><a href="/privacy">Privacy Policy</a></li>
					<li><a href="mailto:support@faf.one">Contact</a></li>
					<li><a href="/press">Press Kit</a></li>
				</ul>
			</div>
		</div>
		
		<div class="footer-bottom">
			<p>© {currentYear} .faf Format Authority. Built with 🧡 in Atlanta.</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 4rem 0 2rem;
		margin-top: 4rem;
		border-top: 3px solid var(--faf-orange);
	}
	
	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid #333;
	}
	
	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	
	.footer-logo {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	
	.logo-text {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-orange);
		letter-spacing: -0.02em;
	}
	
	.logo-tagline {
		font-size: 0.875rem;
		color: var(--faf-white);
		font-weight: 700;
		text-decoration: underline;
		font-family: var(--font-mono);
	}
	
	.footer-mission {
		margin: 0;
		color: var(--faf-white);
		font-weight: 600;
		font-size: 1.125rem;
	}
	
	.footer-stats {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	
	.stat {
		color: #999;
		font-size: 0.875rem;
		font-family: var(--font-mono);
	}
	
	.footer-column h4 {
		margin: 0 0 1rem 0;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--faf-orange);
		font-weight: 700;
	}
	
	.footer-column ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	
	.footer-column li {
		margin: 0;
	}
	
	.footer-column a {
		color: #999;
		text-decoration: none;
		font-size: 0.875rem;
		transition: color 0.2s ease;
		display: inline-block;
	}
	
	.footer-column a:hover {
		color: var(--faf-orange);
		transform: translateX(2px);
	}
	
	.footer-bottom {
		text-align: center;
		padding-top: 2rem;
	}
	
	.footer-bottom p {
		margin: 0;
		color: #666;
		font-size: 0.875rem;
	}
	
	@media (max-width: 968px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
		
		.footer-brand {
			grid-column: 1 / -1;
		}
	}
	
	@media (max-width: 600px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}
		
		.footer-column ul {
			align-items: center;
		}
		
		.footer-stats {
			align-items: center;
		}
	}
</style>