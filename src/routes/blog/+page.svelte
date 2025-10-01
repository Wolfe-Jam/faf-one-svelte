<script>
	const posts = [
		{
			slug: '68-minutes',
			title: '68 Minutes: B&W to Technicolor',
			date: 'October 1, 2025',
			timestamp: '2025-10-01',
			excerpt: 'B&W-to-color TVs took ~20 years. We transformed our CLI in 68 minutes.',
			emoji: '⚡️',
			category: 'Story'
		},
		{
			slug: 'press-release',
			title: '.faf - The JPEG for AI',
			date: 'September 24, 2025',
			timestamp: '2025-09-24',
			excerpt: 'Foundational AI-context Format - Universal, shareable AI context for any AI, human or team.',
			emoji: '📢',
			category: 'Press Release'
		}
	];
</script>

<svelte:head>
	<title>Blog | FAF - Stories & Press Releases</title>
	<meta name="description" content="Latest stories, press releases, and updates from FAF - The JPEG for AI">
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<article class="blog">
	<div class="container">
		<h1>Blog & Press</h1>
		<div class="subtitle">Stories, press releases, and updates from the FAF team</div>

		<div class="posts-grid">
			{#each posts as post}
				<a href="/{post.slug}" class="post-card">
					<div class="post-emoji">{post.emoji}</div>
					<div class="post-category">{post.category}</div>
					<h2>{post.title}</h2>
					<p class="post-excerpt">{post.excerpt}</p>
					<div class="post-date">{post.date}</div>
				</a>
			{/each}
		</div>

		<div class="archive-note">
			<p>More stories coming soon...</p>
		</div>
	</div>
</article>

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

	.blog {
		padding: 3rem 0;
		background: white;
		min-height: 80vh;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
		font-weight: 900;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 3rem;
		font-weight: 500;
	}

	.posts-grid {
		display: grid;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.post-card {
		background: #f9f9f9;
		padding: 2.5rem;
		border-radius: 12px;
		border: 2px solid var(--faf-cream);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		display: block;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
		border-color: var(--faf-orange);
	}

	.post-emoji {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.post-category {
		display: inline-block;
		background: var(--faf-orange);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.post-card h2 {
		font-size: 1.75rem;
		margin: 0 0 1rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.post-excerpt {
		color: #666;
		line-height: 1.6;
		margin: 0 0 1.5rem;
		font-size: 1.0625rem;
	}

	.post-date {
		color: #888;
		font-size: 0.9rem;
		font-style: italic;
	}

	.archive-note {
		text-align: center;
		padding: 2rem;
		color: #888;
		font-style: italic;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.post-card {
			padding: 1.5rem;
		}

		.post-card h2 {
			font-size: 1.5rem;
		}

		.container {
			padding: 0 1rem;
		}
	}
</style>
