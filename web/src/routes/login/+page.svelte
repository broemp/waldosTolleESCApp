<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Hier einloggen
	</h2>
	<p class="text-center mt-1">
		Oder <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>hier registrieren</a
		>
	</p>
	<form action="?/login" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
		<div class="form-control w-full max-w-md">
			<label for="name" class="label font-medium pb-1">
				<span class="label-text">Username</span>
			</label>
			<input type="text" name="username" class="input input-bordered w-full max-w-md" />
		</div>

		<div class="form-control w-full max-w-md">
			<label for="password" class="label font-medium pb-1">
				<span class="label-text">Password</span>
			</label>
			<input type="password" name="password" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="w-full max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full">Login</button>
		</div>
	</form>
</div>
<footer>
	<div class="sticky flex justify-center content-end pt-4">
		<a href="/login/admin" class="text-primary font-medium hover:cursor-pointer hover:underline">
			<button type="button" class="btn btn-secondary w-full">Admin Login</button>
		</a>
	</div>
</footer>
