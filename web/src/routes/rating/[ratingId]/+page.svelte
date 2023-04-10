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
						src={data.rating.expand.act.song_image
							? getImageURL(data.rating.collectionId, data.rating.id, data.rating.image, '160x160')
							: `https://flagsapi.com/${data.rating.expand.act.country_code}/flat/64.png`}
						alt="flag"
					/>
				</div>
			</div>
			<h1 class="text-2xl font-bold mt-4">
				{data.rating.expand.act.country}
			</h1>
			<p class="text-2xl font-light mt-2">
				{data.rating.expand.act.song_name} - <wbr />
				{data.rating.expand.act.artist}
			</p>
			<p class="text-2xl font-light mt-2">{data.rating.expand.act.drink_name}</p>
		</div>
	</div>
	<div class="flex-grow">
		<div class="mt-4">
			<iframe
				src={data.rating.expand.act.song_link}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	</div>
</div>
