<script>
	import { onMount } from 'svelte';
	
	let {
		text = '',
		speed = 30,
		delay = 0,
		cursor = true,
		className = ''
	} = $props();
	
	let displayedText = $state('');
	let showCursor = $state(cursor);
	let isTyping = $state(false);
	
	onMount(() => {
		setTimeout(() => {
			typeText();
		}, delay);
	});
	
	function typeText() {
		isTyping = true;
		let index = 0;
		
		const interval = setInterval(() => {
			if (index < text.length) {
				displayedText = text.slice(0, index + 1);
				index++;
			} else {
				clearInterval(interval);
				isTyping = false;
				// Keep cursor for a bit, then fade it out smoothly
				if (cursor) {
					setTimeout(() => {
						showCursor = false;
					}, 2000);
				}
			}
		}, speed);
	}
</script>

<span class="typewriter-text {className}">
	{displayedText}
	{#if showCursor}
		<span class="cursor" class:typing={isTyping}>|</span>
	{/if}
</span>

<style>
	.typewriter-text {
		display: inline-block;
		position: relative;
	}
	
	.cursor {
		position: absolute;
		color: var(--faf-orange);
		animation: blink 1s infinite;
		margin-left: 2px;
		transition: opacity 0.5s ease-out;
	}
	
	.cursor.typing {
		animation: none;
		opacity: 1;
	}
	
	@keyframes blink {
		0%, 49% { opacity: 1; }
		50%, 100% { opacity: 0; }
	}
</style>