import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		let username = body.name;

		if (body.password !== body.passwordConfirm) {
			throw error(500, 'Passwörter stimmen nicht überein');
		}

		if (body.password.length < 5) {
			throw error(500, 'Passwort muss mindestens 5 Zeichen lang sein');
		}

		try {
			await locals.pb.collection('users').create({ username, ...body });
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}

		throw redirect(303, '/');
	}
};