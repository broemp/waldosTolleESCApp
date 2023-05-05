<script>
	export let active;
	export let my = false;
</script>

<div class="flex justify-center">
	<div class="tabs">
		<a
			class="tab tab-bordered {active === 'overall' ? 'tab-active' : ''}"
			href="/ranking/{my === 'true' ? 'my' : 'all'}/overall">Overall</a
		>
		<a
			class="tab tab-bordered {active === 'act' ? 'tab-active' : ''}"
			href="/ranking/{my === 'true' ? 'my' : 'all'}/act">Act</a
		>
		<a
			class="tab tab-bordered {active === 'drink' ? 'tab-active' : ''}"
			href="/ranking/{my === 'true' ? 'my' : 'all'}/drink">Drink</a
		>
	</div>
</div>
