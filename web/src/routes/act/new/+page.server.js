import { error, redirect } from '@sveltejs/kit'
import { Admin } from 'pocketbase'
import { serializeNonPOJOs } from '$lib/utils.js'

export const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login')
  } else if (!(locals.pb.authStore.model instanceof Admin)) {
    throw redirect(303, '/')
  }
}

export const actions = {
  create: async ({ request, locals }) => {
    const formData = await request.formData()
    const drink_image = formData.get('drink_image')

    try {
      const record = serializeNonPOJOs(await locals.pb.collection('acts').getFirstListItem('country="' + formData.country + '"'))
      if (record != null) {
        throw error(400, 'You have already created this act')
      }
    } catch (err) {
      //Do nothing
    }


    if (drink_image.size === 0) {
      formData.delete('drink_image')
    }

    formData.append('user', locals.user.id)

    try {
      await locals.pb.collection('acts').create(formData)
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }

    throw redirect(303, '/')

  }
}