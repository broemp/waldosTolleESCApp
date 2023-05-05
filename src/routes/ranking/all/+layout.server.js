import { error, redirect } from '@sveltejs/kit'
import { serializeNonPOJOs } from '$lib/utils.js'

export const load = ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/')
  }

  const getActs = async () => {
    try {
      const act = serializeNonPOJOs(await locals.pb.collection('acts').getFullList({
        expand: 'ratings(act)',
      }))
      return act
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  const getRatingList = async () => {
    let acts = await getActs()

    for (const act of acts) {
      var counter = 0;
      act.rating_drink = 0;
      act.rating_act = 0;

      act.expand['ratings(act)']?.forEach(rating => {
        act.rating_drink += rating.rating_drink;
        act.rating_act += rating.rating_act;
        counter++;
      })
      if (counter != 0) {
        act.rating_drink = act.rating_drink / counter;
        act.rating_act = act.rating_act / counter;
      }
    }

    return acts
  }

  return {
    acts: getRatingList(),
    params: params
  }
}