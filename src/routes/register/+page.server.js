import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		let username = body.name;

		if (body.password !== body.passwordConfirm) {
			return {
				passwordNotEqual: true
			};
		}

		if (body.password.length < 5) {
			return {
				passwordTooShort: true
			};
		}

		try {
			await locals.pb.collection('users').create({ username, ...body });
			// await locals.pb.collection('users').requestVerification(body.email);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}

		throw redirect(303, '/');
	}
};