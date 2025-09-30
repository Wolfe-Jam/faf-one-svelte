<script>
	// AI testimonials from verified testing
</script>

<div class="ai-testimonials">
	<h3 class="testimonials-title">What the BIG-3 AI's said during Verified Testing</h3>
	<div class="testimonial-grid">
		<div class="testimonial-item claude-item">
			<p class="testimonial-quote">"Should become the standard"</p>
			<div class="testimonial-author">
				<span class="author-name">Claude Code</span>
				<span class="author-rating">(9.5/10 Rating)</span>
			</div>
		</div>
		<div class="testimonial-item openai-item">
			<p class="testimonial-quote">"Every project should have one"</p>
			<div class="testimonial-author">
				<span class="author-name">OpenAI Codex CLI</span>
				<span class="author-rating">(9/10 Rating)</span>
			</div>
		</div>
		<div class="testimonial-item gemini-item">
			<p class="testimonial-quote">"README evolution for AI era"</p>
			<div class="testimonial-author">
				<span class="author-name">Google Gemini CLI</span>
				<span class="author-rating">(9.5/10 Rating)</span>
			</div>
		</div>
	</div>
</div>

<style>
	.ai-testimonials {
		width: 100%;
		padding: 3rem 0;
		background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
		border-radius: 20px;
		margin: 2rem 0;
	}

	.testimonials-title {
		text-align: center;
		font-size: 1.8rem;
		margin-bottom: 2rem;
		color: #333;
		font-weight: 700;
	}

	.testimonial-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.testimonial-item {
		background: white;
		padding: 2rem;
		border-radius: 15px;
		box-shadow: 0 5px 20px rgba(0,0,0,0.08);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		border: 2px solid transparent;
		position: relative;
		overflow: hidden;
	}

	.testimonial-item::before {
		content: '"';
		position: absolute;
		top: 10px;
		left: 20px;
		font-size: 3rem;
		opacity: 0.1;
		font-weight: 900;
	}

	.testimonial-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 40px rgba(0,0,0,0.12);
	}

	.claude-item {
		border-color: #FF6B35;
	}

	.claude-item:hover {
		border-color: #ff8c5e;
		background: linear-gradient(135deg, #fff9f7 0%, #ffffff 100%);
	}

	.openai-item {
		border-color: #10a37f;
	}

	.openai-item:hover {
		border-color: #1db885;
		background: linear-gradient(135deg, #f0fdf9 0%, #ffffff 100%);
	}

	.gemini-item {
		border-color: #4285f4;
	}

	.gemini-item:hover {
		border-color: #5a95f5;
		background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
	}

	.testimonial-quote {
		font-size: 1.3rem;
		font-weight: 600;
		color: #222;
		margin: 1.5rem 0 1rem 0;
		line-height: 1.4;
		position: relative;
		z-index: 1;
	}

	.testimonial-author {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #eee;
	}

	.author-name {
		font-weight: 700;
		color: #555;
		font-size: 0.95rem;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	.author-rating {
		color: #999;
		font-size: 0.85rem;
		font-style: italic;
	}

	@media (max-width: 768px) {
		.testimonials-title {
			font-size: 1.4rem;
			padding: 0 1rem;
		}

		.testimonial-grid {
			grid-template-columns: 1fr;
			padding: 0 1rem;
		}

		.testimonial-quote {
			font-size: 1.1rem;
		}
	}
</style>