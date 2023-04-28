<script>
	export let label;
	export let name;
	export let value = '50';
	export let id;
	export let disabled = false;
	export let required = false;
</script>

<p class="mt-2  text-xl underline decoration-green-500 decoration-2">{label}</p>
<input
	{label}
	{name}
	{value}
	{id}
	{disabled}
	{required}
	type="range"
	min="0"
	max="10"
	class="range range-primary"
	step="0.5"
/>
<div class="w-full flex justify-between text-xs px-2">
	<span class="font-bold">0</span>
	<span class="font-bold">1</span>
	<span class="font-bold">2</span>
	<span class="font-bold">3</span>
	<span class="font-bold">4</span>
	<span class="font-bold">5</span>
	<span class="font-bold">6</span>
	<span class="font-bold">7</span>
	<span class="font-bold">8</span>
	<span class="font-bold">9</span>
	<span class="font-bold">10</span>
</div>
