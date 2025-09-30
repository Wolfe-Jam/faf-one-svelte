<script>
	let { context = 50 } = $props();

	const quality = $derived(
		context >= 100 ? { level: 'Best Possible', emoji: '🏆', color: 'var(--faf-green)' } :
		context >= 90 ? { level: 'Excellent', emoji: '🌟', color: 'var(--faf-green)' } :
		context >= 80 ? { level: 'Very Good', emoji: '💪', color: '#333' } :
		context >= 70 ? { level: 'Good', emoji: '👍', color: '#555' } :
		context >= 60 ? { level: 'Fair', emoji: '😐', color: '#666' } :
		context >= 50 ? { level: 'Compromised', emoji: '⚠️', color: '#777' } :
		context >= 40 ? { level: 'Poor', emoji: '⛔', color: '#999' } :
		context >= 30 ? { level: 'Critical', emoji: '🚨', color: '#aaa' } :
		context >= 20 ? { level: 'Failing', emoji: '💀', color: '#bbb' } :
		{ level: 'Disaster', emoji: '☠️', color: '#ccc' }
	);
</script>

<div class="quality-indicator" style="background: {quality.color}">
	<span>{quality.emoji} {quality.level}</span>
</div>

<style>
	.quality-indicator {
		margin-top: 1rem;
		padding: 0.75rem;
		border-radius: 8px;
		text-align: center;
		color: white;
		font-weight: 700;
		font-size: 1.125rem;
	}
</style>