<script>
	export let country;
	export let value;
	export let position;
</script>

<div
	class="box rounded-lg font-bold px-2 {position <= 3 ? 'bg-secondary text-black' : 'bg-primary'}"
>
	<div class="flex justify-between">
		<div>
			{position}.
			{country}
		</div>
		{value.toFixed(1)}
	</div>
</div>
