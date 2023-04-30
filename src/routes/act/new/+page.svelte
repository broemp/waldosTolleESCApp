<script>
	import { Input } from '$lib/components';

	// export let data;
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
		>
			<h3 class="text-3xl font-bold">Erstelle einen Act</h3>
			<Input id="country" label="Land" />
			<div class="tooltip" data-tip="Bsp. DE für Deutschland oder GB für Great Britain">
				<Input id="country_code" label="Länder Code" placeholder="2 Stelliger Ländercode" />
			</div>
			<Input id="artist" label="Künstler" />
			<Input id="song_name" label="Song Name" />
			<Input id="drink_name" label="Getränk" />
			<Input id="song_link" label="Youtube Link" />
			<Input id="act_number" label="Auftritt Nummer" />
			<div class="form-control w-full max-w-lg">
				<label for="drink_description" class="label font-medium pb-1">
					<span class="label-text">Getränke Beschreibung</span>
				</label>
				<textarea class="textarea textarea-bordered h-24 resize-none" id="drink_description" />
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="drink_image" class="label font-medium pb-1">
					<span class="label-text">Getränke Bild</span>
				</label>
				<input
					type="file"
					name="drink_image"
					id="drink_image"
					value=""
					accept="image/*"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
				<div class="w-full max-w-lg pt-3">
					<button type="submit" class="btn btn-primary w-full max-w-lg"> Abschicken </button>
				</div>
			</div>
		</form>
	</div>
</div>
