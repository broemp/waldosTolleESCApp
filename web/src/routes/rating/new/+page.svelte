<script>
	import { Rating } from '$lib/components';

	export let data;
	let selected;
</script>

<div class="flex flex-col w-full h-full p-2 ">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
		>
			<h3 class="text-3xl font-bold">Erzähle von dem Auftritt und deinem Drink!</h3>
			<select
				bind:value={selected}
				id="act"
				label="act"
				name="act"
				class="select select-bordered w-full max-w-xs"
			>
				{#each data.acts as act}
					<option value={act.id}>{act.act_number}. - {act.country}</option>
				{/each}
			</select>
			<p>
				Land:
				{selected ? data.acts.find((act) => act.id === selected).country : data.acts[0].country}
			</p>
			<p>
				Song:
				{selected ? data.acts.find((act) => act.id === selected).song_name : data.acts[0].song_name}
			</p>
			<p>
				Künstler:
				{selected ? data.acts.find((act) => act.id === selected).artist : data.acts[0].artist}
			</p>
			<p>
				Drink:
				{selected
					? data.acts.find((act) => act.id === selected).drink_name
					: data.acts[0].drink_name}
			</p>
			<div class="divider" />
			<Rating name="rating_act" label="Bewerte den Auftritt" id="rating_act" required="true" />
			<div class="divider" />
			<Rating name="rating_drink" label="Bewerte den Drink" id="rating_drink" required="true" />
			<div class="form-control w-full max-w-lg">
				<textarea
					id="opinion"
					placeholder="Beschreibe deinen Drink"
					label="Beschreibe deinen Drink"
					class="textarea textarea-bordered h-24 resize-none"
				/>
				<div class="form-control w-full max-w-lg">
					<label for="image" class="label font-medium pb-1">
						<span class="label-text">Bild</span>
					</label>
					<input
						type="file"
						name="image"
						id="image"
						value=""
						accept="image/*"
						class="file-input file-input-bordered w-full max-w-lg"
					/>
					<div class="w-full max-w-lg pt-3">
						<button type="submit" class="btn btn-primary w-full max-w-lg"> Abschicken </button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
