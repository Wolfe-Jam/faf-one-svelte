<script>
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	let sectionRef = $state(null);
	let currentSlide = $state(0);
	
	const slides = [
		{
			title: "The Problem Everyone Faces",
			icon: "😰",
			content: [
				"Hey AI, help me...",
				"What's your tech stack?",
				"What database?",
				"What's the project about?",
				"[20 minutes later...] 😴"
			],
			score: "20 min",
			scoreLabel: "wasted per session",
			color: "#999"
		},
		{
			title: "The Lightbulb Moment",
			icon: "💡",
			content: [
				"🧬 Your .faf is ALIVE",
				"Birth Certificate: FAF-2025-PROJECT",
				"Born: Today",
				"Birth Weight: 22%",
				"Current: 92% 🚀"
			],
			score: "DNA",
			scoreLabel: "Lifecycle",
			color: "var(--faf-cyan)"
		},
		{
			title: "Get dotFAFfed - One Command",
			icon: "🎯",
			content: [
				"$ faf init",
				"Birth weight: 22%",
				"$ faf auto",
				"Score: 22% → 86% (+64%) 🚀",
				"Then forget about it!"
			],
			score: "⚡",
			scoreLabel: "Just BUILD!",
			color: "var(--faf-orange)"
		},
		{
			title: "Your Achievement Journey",
			icon: "📈",
			content: [
				"22% - Birth (Basic context)",
				"85% - Automated (Full understanding)",
				"99% - Championship (Perfect balance)",
				"+78% Total Growth 🚀"
			],
			score: "99%",
			scoreLabel: "Perfect AI|HUMAN balance",
			color: "var(--faf-green)"
		},
		{
			title: "Context-Mirroring™ Magic",
			icon: "🔄",
			content: [
				"CLAUDE.md ⇄ .faf",
				"Updates every 40ms",
				"Never Lose Context",
				"Disaster Proof",
				"Context Immortality"
			],
			score: "∞",
			scoreLabel: "Lives forever",
			color: "var(--faf-green)"
		},
		{
			title: "The Real Value",
			icon: "🎯",
			content: [
				"Stop measuring time.",
				"Start measuring trust.",
				"Hope → Trust",
				"Never explaining twice"
			],
			score: "Trust",
			scoreLabel: "Not ROI",
			color: "var(--faf-orange)"
		},
		{
			title: "Championship Performance",
			icon: "🏎️",
			content: [
				"86% Context extraction",
				"⌚ &lt;50ms Speed guarantee",
				"154 Validated formats",
				"3.5x Faster than others",
				"Stop FAFfing About! ⚡"
			],
			score: "F1",
			scoreLabel: "F1-Inspired Engineering",
			color: "var(--faf-green)"
		},
		{
			title: "Live in Production",
			icon: "🏆",
			content: [
				"🤖 MCP Server with 1,125+ downloads",
				"🌐 Google Chrome EXTENSION LIVE",
				"Trusted by developers worldwide"
			],
			score: "✓",
			scoreLabel: "Enterprise Ready",
			color: "var(--faf-green)"
		},
		{
			title: "Works with Every AI",
			icon: "🤖",
			content: [
				"Claude, ChatGPT, Gemini",
				"Cursor, Windsurf, v0",
				"Codeium, Copilot",
				"One Format To Rule Them All"
			],
			score: ".faf",
			scoreLabel: "Universal Standard",
			color: "var(--faf-orange)"
		},
		{
			title: "Get dotFAFfed Today!",
			icon: "🏁",
			content: [
				"🎮 PLAY - Web version",
				"🚀 USE MCP - Claude Desktop",
				"⚡ TRY CLI - npm install",
				"Choose Your Path!"
			],
			score: "NOW",
			scoreLabel: "Start Free",
			color: "var(--faf-orange)"
		}
	];
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.2 }
		);
		
		if (sectionRef) {
			observer.observe(sectionRef);
		}
		
		// Auto-advance slides
		const interval = setInterval(() => {
			if (isVisible) {
				nextSlide();
			}
		}, 5000);
		
		return () => {
			if (sectionRef) {
				observer.unobserve(sectionRef);
			}
			clearInterval(interval);
		};
	});
	
	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}
	
	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}
	
	function goToSlide(index) {
		currentSlide = index;
	}
</script>

<section bind:this={sectionRef} class="journey">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<h2 class="section-title">The .faf Journey</h2>
			<p class="section-subtitle">
				10 moments every developer experiences
			</p>
			
			<div class="slideshow">
				<div class="slide-container">
					{#each slides as slide, i}
						<div class="slide" class:active={i === currentSlide}>
							<div class="slide-icon">{slide.icon}</div>
							<h3 class="slide-title">{slide.title}</h3>
							<div class="slide-score" style="color: {slide.color}">
								{slide.score}
							</div>
							{#if slide.scoreLabel}
								<div class="slide-score-label">
									{slide.scoreLabel}
								</div>
							{/if}
							<ul class="slide-content">
								{#each slide.content as item}
									<li>{item}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
				
				<button class="nav-btn prev" onclick={prevSlide} aria-label="Previous slide">
					←
				</button>
				<button class="nav-btn next" onclick={nextSlide} aria-label="Next slide">
					→
				</button>
				
				<div class="dots">
					{#each slides as _, i}
						<button 
							class="dot" 
							class:active={i === currentSlide}
							onclick={() => goToSlide(i)}
							aria-label={`Go to slide ${i + 1}`}
						></button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.journey {
		padding: 5rem 0;
		background: var(--faf-white);
	}
	
	.content {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}
	
	.content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.section-title {
		text-align: center;
		margin-bottom: 1rem;
	}
	
	.section-subtitle {
		text-align: center;
		color: var(--faf-gray-dark);
		font-size: 1.25rem;
		margin-bottom: 3rem;
	}
	
	.slideshow {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
		height: 500px;
	}
	
	.slide-container {
		position: relative;
		height: 100%;
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 16px;
		overflow: hidden;
	}
	
	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		opacity: 0;
		transform: translateX(100%);
		transition: all 0.5s ease-out;
	}
	
	.slide.active {
		opacity: 1;
		transform: translateX(0);
	}
	
	.slide-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
		animation: bounce 2s ease-in-out infinite;
	}
	
	.slide-title {
		font-size: 1.75rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}
	
	.slide-score {
		font-size: 2.5rem;
		font-weight: 900;
		font-family: var(--font-mono);
		margin-bottom: 0.5rem;
	}
	
	.slide-score-label {
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1.5rem;
	}
	
	.slide-content {
		list-style: none;
		padding: 0;
		margin: 0;
		max-width: 400px;
	}
	
	.slide-content li {
		margin: 0.75rem 0;
		color: var(--faf-gray-dark);
		font-size: 1.125rem;
	}
	
	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: var(--faf-black);
		color: var(--faf-white);
		border: none;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		font-size: 1.5rem;
		cursor: pointer;
		transition: all 0.3s ease;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.nav-btn:hover {
		background: var(--faf-orange);
		transform: translateY(-50%) scale(1.1);
	}
	
	.nav-btn.prev {
		left: -24px;
	}
	
	.nav-btn.next {
		right: -24px;
	}
	
	.dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 2rem;
	}
	
	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: 2px solid var(--faf-gray-medium);
		background: transparent;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.dot.active {
		background: var(--faf-orange);
		border-color: var(--faf-orange);
		transform: scale(1.2);
	}
	
	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
	
	@media (max-width: 768px) {
		.slideshow {
			height: 600px;
		}
		
		.slide {
			padding: 2rem;
		}
		
		.nav-btn {
			width: 40px;
			height: 40px;
			font-size: 1.25rem;
		}
		
		.nav-btn.prev {
			left: 10px;
		}
		
		.nav-btn.next {
			right: 10px;
		}
	}
</style>