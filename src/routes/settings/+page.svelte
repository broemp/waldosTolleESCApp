<script>
	import { invalidateAll } from '$app/navigation';
	import { applyAction } from '$app/forms';
	import { Input } from '$lib/components';
	import toast from 'svelte-french-toast';

	export let data;
	let loading;

	$: loading = false;

	const submitUpdateProfile = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					toast.success('Profile updated', { position: 'bottom-center' });
					break;
				case 'error':
					toast.error(result.error.message, { position: 'bottom-center' });
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div class="flex flex-col m-2">
	<form action="?/updateProfile" method="POST" class="flex flex-col space-y-2 w-full items-center">
		<h3 class="text-2xl font-medium">Update Profile</h3>
		<Input id="username" label="Userame" value={data.user.username} disabled={loading} />
		<label class="label-tex">
			<div class="flex">
				<div class="mr-2">Anime Mode</div>
				<input
					id="anime-mode"
					label="Anime Mode"
					type="checkbox"
					class="checkbox align-middle mb-2"
				/>
			</div>
		</label>
		<div class="w-full max-w-lg mt-3">
			<button class="btn btn-primary w-full max-w-lg" disabled={loading}> Update Profile </button>
		</div>
	</form>
</div>
