<script>
	import { onMount } from 'svelte';
	
	let {
		children,
		threshold = 0.3,
		stagger = false,
		className = '',
		delay = 0
	} = $props();
	
	let elementRef = $state(null);
	let isVisible = $state(false);
	
	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						isVisible = true;
					}, delay);
					observer.unobserve(entry.target);
				}
			},
			{ threshold }
		);
		
		if (elementRef) {
			observer.observe(elementRef);
		}
		
		return () => {
			if (elementRef) {
				observer.unobserve(elementRef);
			}
		};
	});
</script>

<div 
	bind:this={elementRef}
	class="scroll-reveal {className}"
	class:visible={isVisible}
	class:stagger
>
	{@render children()}
</div>

<style>
	.scroll-reveal {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	.scroll-reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	/* For staggered child animations */
	.scroll-reveal.stagger :global(> *) {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	.scroll-reveal.stagger.visible :global(> *) {
		opacity: 1;
		transform: translateY(0);
	}
	
	/* Stagger delays for children */
	.scroll-reveal.stagger.visible :global(> *:nth-child(1)) { transition-delay: 0.1s; }
	.scroll-reveal.stagger.visible :global(> *:nth-child(2)) { transition-delay: 0.2s; }
	.scroll-reveal.stagger.visible :global(> *:nth-child(3)) { transition-delay: 0.3s; }
	.scroll-reveal.stagger.visible :global(> *:nth-child(4)) { transition-delay: 0.4s; }
	.scroll-reveal.stagger.visible :global(> *:nth-child(5)) { transition-delay: 0.5s; }
	.scroll-reveal.stagger.visible :global(> *:nth-child(6)) { transition-delay: 0.6s; }
	.scroll-reveal.stagger.visible :global(> *:nth-child(7)) { transition-delay: 0.7s; }
	.scroll-reveal.stagger.visible :global(> *:nth-child(8)) { transition-delay: 0.8s; }
</style>