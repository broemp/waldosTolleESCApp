<script>
	import { invalidateAll } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';
	import { getImageURL } from '$lib/utils';

	export let data;
	let loading;

	$: loading = false;

	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');
			preview.src = src;
		}
	};

	const submitUpdateProfile = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div class="flex flex-col w-full h-full">
	<form
		action="?/updateProfile"
		method="POST"
		class="flex flex-col space-y-2 w-full"
		enctype="multipart/form-data"
		use:enhance={{ submitUpdateProfile }}
	>
		<h3 class="text-2xl font-medium">Update Profile</h3>
		<div class="flex pt-4">

		</div>
	</form>
</div>
