<script>
	import FafLogo from '$lib/components/FafLogo.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-brand">
				<div class="footer-logo">
					<FafLogo size="small" color="orange" />
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
					<li><a href="https://www.fafcli.dev/" target="_blank">.faf CLI</a></li>
					<li><a href="https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm" target="_blank">Chrome Extension</a></li>
					<li><a href="https://github.com/Wolfe-Jam/faf" target="_blank">MCP Server</a></li>
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
		
		<div class="footer-social">
			<a href="https://github.com/Wolfe-Jam/faf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
				</svg>
			</a>
			<a href="https://x.com/wolfe_jam" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
				</svg>
			</a>
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
		gap: 0.5rem;
		align-items: flex-start;
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
	
	.footer-social {
		display: flex;
		justify-content: center;
		gap: 2rem;
		padding: 2rem 0;
		border-bottom: 1px solid #333;
	}
	
	.footer-social a {
		color: #666;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.footer-social a:hover {
		color: var(--faf-orange);
		transform: translateY(-3px);
	}
	
	.footer-social svg {
		width: 24px;
		height: 24px;
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