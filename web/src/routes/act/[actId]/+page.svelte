<script>
	import { getImageURL } from '$lib/utils.js';
	export let data;
</script>

<div class="flex flex-row flex-wrap-reverse justify-center">
	<div class="flex-grow">
		<div class="flex flex-col w-full mt-4">
			<div class="avatar">
				<div class="w-30 rounded">
					<img
						src={data.act.song_image
							? getImageURL(data.act.collectionId, data.act.id, data.act.song_image, '160x160')
							: `https://flagsapi.com/${data.act.country_code}/flat/64.png`}
						alt="flag"
					/>
				</div>
			</div>
			<h1 class="text-2xl font-bold mt-4">
				{data.act.country}
			</h1>
			<p class="text-2xl font-light mt-2">
				{data.act.song_name} - <wbr />
				{data.act.artist}
			</p>
			<p class="text-2xl font-light mt-2">{data.act.drink_name}</p>
		</div>
	</div>
	{#if data.act.youtube_link !== ''}
		<div class="flex-grow">
			<div class="mt-4">
				<iframe
					src="https://www.youtube.com/embed/{data.act.youtube_link.split('v=')[1]}"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		</div>
	{/if}
	<!-- {#if !(pb.authStore.model instanceof Admin)}
		<a href="/act/{data.act.id}/edit">
			<button class="btn btn-secondary">Bearbeiten</button>
		</a>
	{/if} -->
</div>
