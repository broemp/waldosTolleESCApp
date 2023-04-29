import { error, redirect } from '@sveltejs/kit'


export const actions = {
  login: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData())

    try {
      await locals.pb.admins.authWithPassword(body.email, body.password)
    }
    catch (err) {
      console.log('Error:', err)
      throw error(err.status, err.message)
    }
    throw redirect(303, '/')
  }
}