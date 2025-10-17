<script>
	import { onMount } from 'svelte';
	import FafLogo from '$lib/components/FafLogo.svelte';
	
	let isMobileMenuOpen = $state(false);
	let isScrolled = $state(false);
	let showFooterButton = $state(true);
	let isAtBottom = $state(false);

	const navItems = [
		{ label: 'About', href: '/about' },
		{ label: 'Features', href: '#features' },
		{ label: 'Demo', href: '#demo' },
		{ label: 'Journey', href: '#journey' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'n8n', href: '/n8n' }
	];

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;

			// Check if at bottom (within 100px of bottom)
			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;
			const clientHeight = window.innerHeight;
			isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	
	function handleNavClick(e, href) {
		// If it's an anchor link (starts with #), smooth scroll
		if (href.startsWith('#')) {
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		}
		// For regular links, just close mobile menu
		isMobileMenuOpen = false;
	}
	
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function scrollToFooter() {
		const footer = document.querySelector('#footer');
		if (footer) {
			footer.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<nav class="navigation" class:scrolled={isScrolled}>
	<div class="nav-container">
		<a href="/" class="nav-brand">
			<FafLogo size="tiny" color="black" />
		</a>
		
		<div class="nav-menu" class:open={isMobileMenuOpen}>
			{#each navItems as item}
				<a 
					href={item.href} 
					class="nav-link"
					onclick={(e) => handleNavClick(e, item.href)}
				>
					{item.label}
				</a>
			{/each}
			
			<div class="nav-cta">
				<button class="btn btn-ghost btn-small">
					Sign In
				</button>
				<button class="btn btn-primary btn-small">
					Get Started
				</button>
			</div>
		</div>
		
		<button class="mobile-toggle" onclick={toggleMobileMenu} aria-label="Toggle navigation menu">
			<span class="hamburger" class:open={isMobileMenuOpen}></span>
		</button>
	</div>
</nav>

{#if showFooterButton}
	<button
		class="footer-button"
		onclick={isAtBottom ? scrollToTop : scrollToFooter}
		aria-label={isAtBottom ? "Scroll to top" : "Scroll to footer"}
	>
		{isAtBottom ? '⏫' : '⏬'}
	</button>
{/if}

<style>
	.navigation {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: var(--faf-cream);
		transition: all 0.3s ease;
		border-bottom: 1px solid var(--faf-gray-light);
	}
	
	.navigation.scrolled {
		background: var(--faf-cream);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
		border-bottom: none;
	}
	
	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.nav-brand {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: transform 0.3s ease;
	}
	
	.nav-brand:hover {
		transform: scale(1.05);
	}
	
	.nav-menu {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	
	.nav-link {
		color: var(--faf-gray-dark);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease;
		position: relative;
	}
	
	.nav-link:hover {
		color: var(--faf-orange);
	}
	
	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--faf-orange);
		transition: width 0.3s ease;
	}
	
	.nav-link:hover::after {
		width: 100%;
	}
	
	.nav-cta {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-left: 2rem;
		padding-left: 2rem;
		border-left: 1px solid var(--faf-gray-medium);
	}
	
	.btn-small {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}
	
	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}
	
	.hamburger {
		display: block;
		width: 24px;
		height: 2px;
		background: var(--faf-black);
		position: relative;
		transition: all 0.3s ease;
	}
	
	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		width: 24px;
		height: 2px;
		background: var(--faf-black);
		transition: all 0.3s ease;
	}
	
	.hamburger::before {
		top: -8px;
	}
	
	.hamburger::after {
		top: 8px;
	}
	
	.hamburger.open {
		background: transparent;
	}
	
	.hamburger.open::before {
		top: 0;
		transform: rotate(45deg);
	}
	
	.hamburger.open::after {
		top: 0;
		transform: rotate(-45deg);
	}
	
	@media (max-width: 768px) {
		.mobile-toggle {
			display: block;
		}
		
		.nav-menu {
			position: fixed;
			top: 60px;
			left: 0;
			right: 0;
			background: var(--faf-white);
			flex-direction: column;
			padding: 2rem;
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
			transform: translateY(-100%);
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s ease;
		}
		
		.nav-menu.open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}
		
		.nav-cta {
			margin-left: 0;
			padding-left: 0;
			border-left: none;
			border-top: 1px solid var(--faf-gray-medium);
			padding-top: 1rem;
			width: 100%;
			justify-content: center;
		}
	}

	.footer-button {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 3.5rem;
		height: 3.5rem;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		border: none;
		border-radius: 50%;
		font-size: 1.5rem;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeIn 0.3s ease;
	}

	.footer-button:hover {
		transform: translateY(2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
		background: var(--faf-orange);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.footer-button {
			bottom: 1.5rem;
			right: 1.5rem;
			width: 3rem;
			height: 3rem;
			font-size: 1.25rem;
		}
	}
</style>