<script>
	export let data;
</script>

<div class="flex justify-center">
	<div class="flex flex-col w-full">
		{#each data.acts as act}
			<a href="/rating/{act.id}">
				<div
					class="card shadow-xl bg-primary m-2 card-compact {act.rating_act
						? 'bg-success'
						: 'bg-primary'}
						"
				>
					<div class="card-body {act.rating_act ? 'text-black' : ''}">
						<h2 class="card-title">
							{act.act_number}
							<img
								src="https://flagsapi.com/{act.country_code}/flat/24.png"
								alt="Country Flag"
							/>{act.country}
						</h2>
						<p class="card-text">
							<span class="font-bold">Artist:</span>
							{act.artist}<br />
							<span class="font-bold">Song:</span>
							{act.song_name}
							<br />
							<span class="font-bold">Drink:</span>
							{act.drink_name}
							<br />
							<span class="font-bold">Act Rating:</span>
							{act.rating_act}
							<span class="font-bold">Drink Rating:</span>
							{act.rating_drink}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
