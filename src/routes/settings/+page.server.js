import { error } from '@sveltejs/kit'

export const actions = {
  updateProfile: async ({ request, locals }) => {
    let data = await request.formData()

    try {
      const { name } = await locals.pb.collection('users').update(locals?.user?.id, data)
      locals.user.name = name
    } catch (err) {
      console.log(err)
      throw error(400, 'Error updating profile')
    }

    return {
      success: true,
    }
  }
}