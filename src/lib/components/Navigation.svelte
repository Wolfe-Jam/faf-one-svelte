<script>
	import { onMount } from 'svelte';
	
	let isMobileMenuOpen = $state(false);
	let isScrolled = $state(false);
	
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};
		
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial state
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	
	const navItems = [
		{ label: 'Features', href: '#features' },
		{ label: 'Demo', href: '#demo' },
		{ label: 'Journey', href: '#journey' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'Docs', href: '#docs' }
	];
	
	function smoothScroll(e, href) {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
		isMobileMenuOpen = false;
	}
	
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<nav class="navigation" class:scrolled={isScrolled}>
	<div class="nav-container">
		<div class="nav-brand">
			<img src="/faf-logo.png" alt=".faf" class="nav-logo" />
			<span class="nav-title">.faf</span>
		</div>
		
		<div class="nav-menu" class:open={isMobileMenuOpen}>
			{#each navItems as item}
				<a 
					href={item.href} 
					class="nav-link"
					onclick={(e) => smoothScroll(e, item.href)}
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
		gap: 0.75rem;
	}
	
	.nav-logo {
		width: 32px;
		height: 32px;
	}
	
	.nav-title {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--faf-black);
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
</style>