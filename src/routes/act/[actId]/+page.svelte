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

<div class="flex justify-center mb-4">
	<div class="mx-2 w-full">
		<RatingCard title="Song" value={data.rating_act} />
	</div>
	<div class="mr-2 w-full">
		<RatingCard title="Drink" value={data.rating_drink} />
	</div>
</div>

<div class="bg-secondary py-2 m-2 rounded-lg">
	<span class="text-center text-2xl font-bold">
		<h2>Alle Votes!</h2>
	</span>
</div>
<div class="flex justify-center flex-col mt-4">
	{#each data.ratings as card}
		<div class="mx-2 mb-2">
			<RatingCardUser
				username={card.expand.user.username}
				rating_act={card.rating_act}
				rating_drink={card.rating_drink}
			/>
		</div>
	{/each}
</div>
