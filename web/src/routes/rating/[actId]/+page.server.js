import { error, redirect } from '@sveltejs/kit'
import { serializeNonPOJOs } from '$lib/utils.js'
// import { createEventDispatcher } from 'svelte';

// const dispatch = createEventDispatcher();

export const load = ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/')
  }

  const getActs = async () => {
    try {
      const act = serializeNonPOJOs(await locals.pb.collection('acts').getFirstListItem('id="' + params.actId + '"'))

      return act
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  const actsList = getActs()

  return {
    act: actsList,
    params: params
  }
}

export const actions = {
  create: async ({ request, locals }) => {

    if (!locals.pb.authStore.isValid) {
      throw redirect(303, '/')
    }

    const formData = await request.formData()
    formData.append('user', locals.user.id)

    try {
      const record = serializeNonPOJOs(await locals.pb.collection('ratings').getFirstListItem('user="' + locals.user.id + '"&& act="' + formData.get('act') + '"'))
      console.log("Fetched Record: " + record)
      if (record != null) {
        console.log("Updating")
        await locals.pb.collection('ratings').update(formData.get('id'), formData)
        // playToast("Rating updated!")
      } else {
        try {
          console.log("Create")
          await locals.pb.collection('ratings').create(formData)
          // playToast("Rating created!")
        } catch (err) {
          console.log(err)
          throw error(err.status, err.message)
        }
      }
    } catch (err) {
      //Do nothing
    }

  }
}

// function playToast(text) {
//   dispatch('message', {
//     text: text,
//   });
// }