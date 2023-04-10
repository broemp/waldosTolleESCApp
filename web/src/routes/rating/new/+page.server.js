import { error, redirect } from '@sveltejs/kit'
import { serializeNonPOJOs } from '$lib/utils.js'

export const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login')
  }

  const getActs = async () => {
    try {
      const acts = serializeNonPOJOs(await locals.pb.collection('acts').getFullList({
        sort: 'act_number',
      }))
      return acts
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  return {
    acts: getActs()
  }
}

export const actions = {
  create: async ({ request, locals }) => {
    const formData = await request.formData()
    const image = formData.get('image')

    try {
      const record = serializeNonPOJOs(await locals.pb.collection('ratings').getFirstListItem('user="' + locals.user.id + '"&& act="' + formData.get('act') + '"'))
      if (record != null) {
        throw error(400, 'You have already rated this act')
      }
    } catch (err) {
      //Do nothing
    }

    if (image.size === 0) {
      formData.delete('image')
    }
    formData.append('user', locals.user.id)

    try {
      await locals.pb.collection('ratings').create(formData)
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }

    throw redirect(303, '/')

  }
}