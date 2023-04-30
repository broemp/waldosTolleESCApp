<script>
	import { Rating } from '$lib/components';
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';

	export let data;
	export let act = data.act;
	export let actValue = data.rating?.rating_act === undefined ? 5 : data.rating.rating_act;
	export let drinkValue = data.rating?.rating_drink === undefined ? 5 : data.rating.rating_drink;

	let loading = false;

	const submitLogin = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Fehler' + result.error.message, { position: 'bottom-center' });
					await update();
					break;
				case 'error':
					toast.error(result.error.message, { position: 'bottom-center' });
					await update();
					break;
				case 'redirect':
					toast.success('Voting wurde gespeichert!', {
						position: 'bottom-center'
					});
					await update();
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			use:enhance={submitLogin}
		>
			<div class="box bg-pink-500 px-3 m-2">
				<h3 class="text-md font-bold">Wie fandest du den Auftritt und den Drink?</h3>
			</div>
			<h2 class="text-xl font-bold text-accent-focus">
				{act.act_number}. {act.country}
			</h2>
			<div class="text-center font-bold text-sm">
				<p>
					Song: {act.song_name}
					<br />
					Künstler: {act.artist}
					<br />
					Drink:
					{act.drink_name}
				</p>
			</div>
			<div class="flex">
				<a href="/act/{act.id}">
					<button class="btn btn-outline btn-success mr-4" type="button">Mehr Infos</button>
				</a>
				<a href="/overview">
					<button class="btn btn-outline btn-success" type="button">Overview</button>
				</a>
			</div>
			<div class="divider" />
			<Rating
				name="rating_act"
				label="Bewerte den Auftritt!"
				id="rating_act"
				required="true"
				value={actValue}
			/>
			<div class="divider" />
			<Rating
				name="rating_drink"
				label="Bewerte den Drink!"
				id="rating_drink"
				required="true"
				value={drinkValue}
			/>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-success w-full max-w-lg"> Abschicken </button>
			</div>
		</form>
	</div>
</div>
