<script>
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { Toaster } from 'svelte-french-toast';
	export let data;
	// let bg_image = '/images/bg_esc.jpg';
	var bg_image = '';

	onMount(async () => {
		if (data.animeMode) {
			let response = await fetch('https://api.waifu.pics/sfw/waifu');
			let url = await response.json();
			// console.log(url.url);
			bg_image = url.url;
		} else bg_image = '/images/bg_esc.jpg';
	});
</script>

<Toaster />
<div
	class="cover"
	style="background-image: url('{bg_image}'); 		background-size: cover;
background-position: right;
background-color: #02025e;"
>
	<div class="min-h-full">
		<nav class="navbar bg-base-100 border-b justify-between">
			<div class="flex">
				<a href="/"> <img src="/images/ESC2023.png" alt="Logo" class="object-cover h-10 w-36" /></a>
			</div>
			<div class="flex-none">
				{#if data.user}
					<div class="flex items-end mt-2">
						<form action="/logout" method="POST">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label>
								<button>
									<svg
										width="2rem"
										height="2rem"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M21 12L13 12"
											stroke="#FAF9F6"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
											stroke=" #FAF9F6"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
											stroke=" #FAF9F6"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</button>
							</label>
						</form>
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
</div>
