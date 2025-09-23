<script>
	import FafLogo from '$lib/components/FafLogo.svelte';
</script>

<svelte:head>
	<title>FAF Logo Component Demo</title>
</svelte:head>

<div class="demo-container">
	<h1>FAF Logo Component Showcase</h1>
	
	<section>
		<h2>Animated Version (Splash Screen)</h2>
		<div class="demo-box dark">
			<FafLogo size="medium" color="white" animated={true} />
		</div>
	</section>
	
	<section>
		<h2>Size Variations</h2>
		<div class="demo-grid">
			<div class="demo-box">
				<h3>Tiny</h3>
				<FafLogo size="tiny" color="black" />
			</div>
			<div class="demo-box">
				<h3>Small</h3>
				<FafLogo size="small" color="black" />
			</div>
			<div class="demo-box">
				<h3>Medium</h3>
				<FafLogo size="medium" color="black" />
			</div>
			<div class="demo-box">
				<h3>Large</h3>
				<FafLogo size="large" color="black" />
			</div>
		</div>
	</section>
	
	<section>
		<h2>Color Variations</h2>
		<div class="demo-grid">
			<div class="demo-box dark">
				<h3>White Text</h3>
				<FafLogo size="small" color="white" />
			</div>
			<div class="demo-box">
				<h3>Black Text</h3>
				<FafLogo size="small" color="black" />
			</div>
			<div class="demo-box dark">
				<h3>Orange Text</h3>
				<FafLogo size="small" color="orange" />
			</div>
			<div class="demo-box dark">
				<h3>Cyan Text</h3>
				<FafLogo size="small" color="cyan" />
			</div>
		</div>
	</section>
	
	<section>
		<h2>Dot Color Variations</h2>
		<div class="demo-grid">
			<div class="demo-box">
				<h3>Orange Dot (Default)</h3>
				<FafLogo size="small" color="black" dotColor="orange" />
			</div>
			<div class="demo-box">
				<h3>Cyan Dot</h3>
				<FafLogo size="small" color="black" dotColor="cyan" />
			</div>
			<div class="demo-box dark">
				<h3>White Dot</h3>
				<FafLogo size="small" color="orange" dotColor="white" />
			</div>
			<div class="demo-box">
				<h3>Black Dot</h3>
				<FafLogo size="small" color="orange" dotColor="black" />
			</div>
		</div>
	</section>
	
	<section>
		<h2>Special Modes</h2>
		<div class="demo-grid">
			<div class="demo-box">
				<h3>Dot Only</h3>
				<FafLogo size="large" dotOnly={true} />
			</div>
			<div class="demo-box dark">
				<h3>Custom Size</h3>
				<FafLogo 
					size={{ dot: 45, font: 6, gap: 0.8, lift: -1 }}
					color="white"
				/>
			</div>
		</div>
	</section>
	
	<section>
		<h2>Usage Examples</h2>
		<div class="code-block">
			<h3>Basic Usage</h3>
			<pre><code>{`<FafLogo size="medium" color="white" />`}</code></pre>
		</div>
		
		<div class="code-block">
			<h3>Animated Splash</h3>
			<pre><code>{`<FafLogo 
  size="large" 
  color="white" 
  animated={true}
  animationDelay={1500}
/>`}</code></pre>
		</div>
		
		<div class="code-block">
			<h3>Custom Configuration</h3>
			<pre><code>{`<FafLogo 
  size={{ dot: 50, font: 7, gap: 1, lift: -1.2 }}
  color="#FF6B35"
  dotColor="#00F3FF"
/>`}</code></pre>
		</div>
	</section>
</div>

<style>
	.demo-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		min-height: 100vh;
		background: var(--faf-cream);
	}
	
	h1 {
		font-size: 3rem;
		font-weight: 900;
		margin-bottom: 3rem;
		text-align: center;
		color: var(--faf-dark);
	}
	
	section {
		margin-bottom: 4rem;
	}
	
	h2 {
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 2rem;
		color: var(--faf-dark);
		border-bottom: 3px solid var(--faf-orange);
		padding-bottom: 0.5rem;
	}
	
	h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--faf-gray);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.demo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}
	
	.demo-box {
		background: var(--faf-white);
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 200px;
		position: relative;
	}
	
	.demo-box.dark {
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
	}
	
	.demo-box.dark h3 {
		color: var(--faf-white);
	}
	
	.code-block {
		background: var(--faf-dark);
		color: var(--faf-white);
		padding: 1.5rem;
		border-radius: 8px;
		margin-bottom: 1.5rem;
	}
	
	.code-block h3 {
		color: var(--faf-orange);
		margin-bottom: 1rem;
	}
	
	pre {
		margin: 0;
		font-family: 'Roboto Mono', monospace;
		font-size: 0.9rem;
		line-height: 1.5;
		overflow-x: auto;
	}
	
	code {
		color: var(--faf-cyan);
	}
</style>