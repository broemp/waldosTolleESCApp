import { error } from '@sveltejs/kit'

export const actions = {
  updateProfile: async ({ request, locals }) => {
    let data = await request.formData()
    const userAvatar = data.get('avatar')

    if (userAvatar.size === 0) {
      data.delete('avatar')
    }

    try {
      const { name, avatar } = await locals.pb.collection('users').update(locals?.user?.id, data)
      locals.user.name = name
      locals.user.avatar = avatar
    } catch (err) {
      console.log(err)
      throw error(400, 'Error updating profile')
    }

    return {
      success: true,
    }
  }
}