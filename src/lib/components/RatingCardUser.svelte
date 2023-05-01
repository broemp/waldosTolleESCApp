<script>
	export let username;
	export let rating_act;
	export let rating_drink;
</script>

<div class="card bg-secondary shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{username}</h2>
		<div class="flex justify-between">
			<div>
				<p class="text-md font-bold">
					Song: {rating_act}
				</p>
				<p class="text-md font-bold">
					Drink: {rating_drink}
				</p>
			</div>
		</div>
	</div>
</div>
