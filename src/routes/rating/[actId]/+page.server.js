import { error, redirect } from '@sveltejs/kit'
import { serializeNonPOJOs } from '$lib/utils.js'
import { isAdmin } from '../../../hooks.server.js'

export const load = ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/')
  }

  if (isAdmin(locals)) {
    throw redirect(303, '/act/' + params.actId)
  }

  const getAct = async () => {
    try {
      const act = serializeNonPOJOs(await locals.pb.collection('acts').getFirstListItem('id="' + params.actId + '"'))
      return act
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  const getRating = async () => {
    try {
      const rating = serializeNonPOJOs(await locals.pb.collection('ratings').getFirstListItem('user="' + locals.user.id + '" && act="' + params.actId + '"'))
      return rating
    } catch (err) {
      console.log(err)
    }
  }

  return {
    act: getAct(),
    rating: getRating(),
    params: params
  }
}

export const actions = {
  create: async ({ request, locals, params }) => {

    if (!locals.pb.authStore.isValid) {
      throw redirect(303, '/')
    }

    let record = undefined;

    const formData = await request.formData()
    formData.append('user', locals.user.id)
    formData.append('act', params.actId)

    try {
      // Fetch old Record
      record = serializeNonPOJOs(await locals.pb.collection('ratings').getFirstListItem('user="' + formData.get('user') + '" && act="' + formData.get('act') + '"'))

    } catch (err) {
      console.log("Record: " + record)
    }

    // Try to Update Record
    if (record != undefined) {
      try {

        await locals.pb.collection('ratings').update(record.id, formData)
      } catch (err) {
        console.log(err)
        throw error(err.status, err.message)
      }
    } else {
      // Create new Record
      try {
        await locals.pb.collection('ratings').create(formData)

      } catch (err) {
        console.log(err)
        throw error(err.status, err.message)
      }
    }

    throw redirect(303, '/overview')
  }
}
