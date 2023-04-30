<script>
	export let title;
	export let value;
</script>

<div class="stats shadow m-2 bg-green-500 w-full">
	<div class="stat">
		<div class="stat-title flex justify-center">{title}</div>
		<div class="flex justify-center">
			<div class="stat-value">{value}</div>
		</div>
	</div>
</div>
