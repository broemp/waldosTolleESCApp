<script>
	import RatingCard from '$lib/components/RatingCard.svelte';
	import RatingCardUser from '$lib/components/RatingCardUser.svelte';
	import { getImageURL } from '$lib/utils';
	export let data;
	console.log(data.act?.song_image);
</script>

<div class="flex justify-center">
	<div class="card card-compact m-2 w-full bg-secondary shadow-xl">
		<figure>
			<div class="flex justify-center w-full">
				<img
					src={data.act?.song_image ? data.act?.song_image : 'https://picsum.photos/500/300'}
					alt="act"
					class="object-cover max-h-50"
				/>
			</div>
		</figure>
		<div class="card-body text-black">
			<div class="card-title justify-between">
				<h2>{data.act.country}</h2>
				<a href="/rating/{data.act.id}">
					<button class="btn bg-primary">Vote!</button>
				</a>
			</div>
			<div class="flex justify-between">
				<div class="class">
					<p class="text-md font-bold">
						{data.act.song_name} - <wbr />
						{data.act.artist} <br />
						{data.act.drink_name}
					</p>
				</div>
				{#if data.isAdmin}
					<div class="">
						<button class="btn">Edit</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div class="flex justify-center mb-4">
	<div class="mx-2 w-full">
		<RatingCard title="Song" value="⌀ {data.rating_act}" />
	</div>
	<div class="mr-2 w-full">
		<RatingCard title="Drink" value="⌀ {data.rating_drink}" />
	</div>
</div>

<div class="bg-secondary py-2 m-2 rounded-lg">
	<span class="text-center text-2xl font-bold underline text-black">
		<h2>ALLE VOTES!</h2>
	</span>
</div>
<div class="flex justify-center flex-col mt-4">
	{#each data.ratings as card}
		<div class="mx-2 mb-2">
			<RatingCardUser
				username={card.expand?.user?.username}
				rating_act={card.rating_act}
				rating_drink={card.rating_drink}
			/>
		</div>
	{/each}
</div>
