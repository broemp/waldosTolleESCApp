import { error, redirect } from '@sveltejs/kit'


export const actions = {
  login: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData())

    try {
      await locals.pb.collection('users').authWithPassword(body.username, body.password)
    }
    catch (err) {
      console.log('Error logging in:', err)
      throw error(err.status, err.message)
    }
    throw redirect(303, '/')
  }
}