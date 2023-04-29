<script>
	export let data;
</script>

{#if !data.user}
	<div class="flex flex-col justify-center w-screen">
		<h2 class="text-center text-3xl font-bold tracking-tight text-base-content">
			Willkommen zum Eurovision Song Contest 2023
		</h2>
		<div class="bg-green-500 border border-green-500 mt-2 mx-20" />
		<form
			action="?/login"
			method="POST"
			class="flex flex-col items-center space-y-2 w-full  py-2 pt-4"
		>
			<div class="form-control w-full  py-2 max-w-md">
				<label for="name" class="label font-medium pb-1">
					<span class="label-text">Username</span>
				</label>
				<input type="text" name="username" class="input input-bordered mx-2" />
			</div>

			<div class="form-control w-full  py-2 max-w-md">
				<label for="password" class="label font-medium pb-1">
					<span class="label-text">Password</span>
				</label>
				<input type="password" name="password" class="input input-bordered mx-2" />
			</div>
			<button type="submit" class="btn btn-primary w-5/6">Login</button>
		</form>
	</div>
	<footer>
		<div class="sticky flex justify-center content-end pt-4">
			<div class="">
				<a
					href="/login/admin"
					class="text-primary font-medium hover:cursor-pointer hover:underline"
				>
					<button type="button" class="btn btn-secondary w-half mr-4">Registrieren</button>
				</a>
				<a
					href="/login/admin"
					class="text-primary font-medium hover:cursor-pointer hover:underline"
				>
					<button type="button" class="btn btn-secondary w-half">Admin Login</button>
				</a>
			</div>
		</div>
	</footer>
{:else}
	<div class="flex justify-center">
		<div class="w-5/6 mt-4 grid grid-cols-1 ">
			<h2 class="font-bold text-xl btn btn-primary">
				WALDO SALDO <svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 ml-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/></svg
				>
			</h2>
			<div class="mt-8 flex justify-center">
				<p class="font-bold text-lg">WOHIN MÖCHTEST DU?</p>
			</div>
			<button class="btn btn-success w-full my-4 mt-10 ">
				<div class="font-bold text-lg">
					<a href="/overview">Running Order</a>
				</div>
			</button>
			<button class="btn btn-success w-full  my-4">
				<div class="font-bold text-lg">
					<a href="/my/votes">Meine Votes</a>
				</div>
			</button>
			<button class="btn btn-success w-full  my-4">
				<div class="font-bold text-lg">
					<a href="/rating/new">Zum Voting</a>
				</div>
				{#if data.user?.admin}
					<button class="btn btn-success w-full  my-4">
						<div class="font-bold text-lg">
							<a href="/admin">Admin</a>
						</div>
					</button>
				{/if}
			</button>
			<button class="btn btn-success w-full  my-4">
				<div class="font-bold text-lg">
					<a href="/my/settings">Settings</a>
				</div>
			</button>
		</div>
	</div>
{/if}
