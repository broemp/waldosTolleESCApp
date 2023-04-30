<script>
	import RatingCard from '$lib/components/RatingCard.svelte';
	import RatingCardUser from '$lib/components/RatingCardUser.svelte';

	export let data;
</script>

<div class="flex justify-center">
	<div class="card card-compact m-2 w-full bg-secondary shadow-xl">
		<figure>
			<div class="flex justify-center w-full aspect-video">
				<iframe
					src="https://www.youtube.com/embed/{data.act.youtube_link.split('v=')[1]}"
					title="YouTube video player"
					class="rounded-t-lg w-full h-full"
					frameborder="0"
					allowfullscreen
				/>
			</div>
		</figure>
		<div class="card-body">
			<h2 class="card-title">{data.act.country}</h2>
			<div class="flex justify-between">
				<div class="class">
					<p class="text-md font-bold">
						{data.act.song_name} - <wbr />
						{data.act.artist} <br />
						{data.act.drink_name}
					</p>
				</div>
				<div class="">
					<button class="btn">Edit</button>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex justify-center">
	<RatingCard title="Song" value={data.rating_act} />
	<RatingCard title="Drink" value={data.rating_drink} />
</div>

<div class="flex justify-center flex-col">
	// Hier Fehler!!!!!
	{#each data.ratings as card}
		<RatingCardUser
			username={card.expand.user.username}
			rating_act={card.rating_act}
			rating_drink={card.rating_drink}
		/>
	{/each}
</div>
