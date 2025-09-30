<script>
	// Trust signal component
</script>

<!-- Trust Signal -->
<div class="trust-signal">
	<p class="trust-text">
		Trusted by developers at
		<span class="company">Anthropic</span> and
		<span class="company">Google Chrome</span>
	</p>
</div>

<style>
	.trust-signal {
		text-align: center;
		margin-top: 3rem;
		padding: 2rem;
		background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
		border-radius: 12px;
	}

	.trust-text {
		font-size: 1.1rem;
		color: #666;
		margin: 0;
	}

	.company {
		font-weight: 700;
		color: var(--faf-black);
		padding: 0 0.25rem;
	}

	@media (max-width: 768px) {
		.trust-signal {
			margin-top: 2rem;
			padding: 1.5rem;
		}

		.trust-text {
			font-size: 1rem;
		}
	}
</style>