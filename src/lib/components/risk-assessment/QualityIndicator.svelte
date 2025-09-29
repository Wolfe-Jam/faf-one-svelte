<script>
	let { context = 50 } = $props();

	const quality = $derived(() => {
		if (context >= 100) return { level: 'Best Possible', emoji: '🏆', color: 'var(--faf-orange)' };
		if (context >= 90) return { level: 'Excellent', emoji: '🌟', color: 'var(--faf-green)' };
		if (context >= 80) return { level: 'Very Good', emoji: '💪', color: '#333' };
		if (context >= 70) return { level: 'Good', emoji: '👍', color: '#555' };
		if (context >= 60) return { level: 'Fair', emoji: '😐', color: '#666' };
		if (context >= 50) return { level: 'Compromised', emoji: '⚠️', color: '#777' };
		if (context >= 40) return { level: 'Poor', emoji: '⛔', color: '#999' };
		if (context >= 30) return { level: 'Critical', emoji: '🚨', color: '#aaa' };
		if (context >= 20) return { level: 'Failing', emoji: '💀', color: '#bbb' };
		return { level: 'Disaster', emoji: '☠️', color: '#ccc' };
	}());
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