<script>
	export let data;
</script>

<div class="flex justify-center">
	<h1 class="text-2xl font-bold p-4 text-primary-focus">
		{data.act.country}
	</h1>
</div>

<div class="flex flex-col justify-center">
	<p class="text-md font-light mt-2">
		{data.act.song_name} - <wbr />
		{data.act.artist} <br />
		{data.act.drink_name}
	</p>
</div>

TODO RATING

<div class="flex justify-center mt-10">
	{#if data.act.youtube_link !== ''}
		<div class="mt-4">
			<iframe
				src="https://www.youtube.com/embed/{data.act.youtube_link.split('v=')[1]}"
				title="YouTube video player"
				frameborder="0"
				allowfullscreen
			/>
		</div>
	{/if}
</div>
<!-- {#if !(pb.authStore.model instanceof Admin)}
		<a href="/act/{data.act.id}/edit">
			<button class="btn btn-secondary">Bearbeiten</button>
		</a>
	{/if} -->
