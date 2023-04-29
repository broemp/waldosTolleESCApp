<script>
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	let loading = false;

	const submitLogin = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Falsche Einloggdaten', { position: 'bottom-center' });
					await update();
					break;
				case 'error':
					toast.error(result.error.message, { position: 'bottom-center' });
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">Admin Login</h2>
	<form
		action="?/login"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
		use:enhance={submitLogin}
	>
		<div class="form-control w-full max-w-md">
			<label for="name" class="label font-medium pb-1">
				<span class="label-text">E-Mail</span>
			</label>
			<input type="email" name="email" class="input input-bordered mx-2" disabled={loading} />
		</div>

		<div class="form-control w-full max-w-md">
			<label for="password" class="label font-medium pb-1">
				<span class="label-text">Password</span>
			</label>
			<input type="password" name="password" class="input input-bordered mx-2" disabled={loading} />
		</div>
		<div class="w-5/6 max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full" disabled={loading}>Login</button>
		</div>
	</form>
</div>
