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
					<li><a href="https://github.com/Wolfe-Jam" target="_blank">.faf CLI</a></li>
					<li><a href="https://github.com/Wolfe-Jam" target="_blank">Chrome Extension</a></li>
					<li><a href="https://github.com/Wolfe-Jam" target="_blank">MCP Server</a></li>
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
			<a href="https://linkedin.com/company/fafformat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
				</svg>
			</a>
			<a href="https://discord.gg/fafformat" target="_blank" rel="noopener noreferrer" aria-label="Discord">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
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