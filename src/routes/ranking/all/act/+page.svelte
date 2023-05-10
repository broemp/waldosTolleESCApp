<script>
	import RankingTabs from '$lib/components/RankingTabs.svelte';
	import RatingCardList from '$lib/components/RatingCardList.svelte';

	export let data;

	function compare(a, b) {
		if (a.rating_act > b.rating_act) {
			return -1;
		}
		if (a.rating_act < b.rating_act) {
			return 1;
		}
		return 0;
	}

	let acts = data.acts.sort(compare);
</script>

<RankingTabs active="act" />

{#each acts as act, i (i)}
	<a href="/act/{act.id}">
		<div class="m-2">
			<RatingCardList country={act.country} value={act.rating_act} position={i + 1} />
		</div>
	</a>
{/each}
