<script>
	import '../app.postcss';
	import { getImageURL } from '$lib/utils';
	import { Toaster } from 'svelte-french-toast';
	export let data;
</script>

<Toaster />
<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b justify-between">
		<div class="flex">
			<a href="/"> <img src="/images/ESC2023.png" alt="Logo" class="object-cover h-12 w-38" /></a>
		</div>
		<div class="flex-none">
			{#if data.user}
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-cricle avatar">
						<div class="w-10 rounded-full">
							<img
								src={data.user?.avatar
									? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
									: `https://ui-avatars.com/api/?name=${data.user?.name}`}
								alt="User avatar"
							/>
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-pink-500"
					>
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-full text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
	<div class="py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>

<!-- <style>
	:global(body) {
		background-image: url('/images/bg_esc.png');
		background-attachment: scroll;
		background-size: auto;
	}
</style> -->
