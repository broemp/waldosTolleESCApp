import { serializeNonPOJOs } from '$lib/utils.js'
import { error } from '@sveltejs/kit'

export const load = ({ locals, params }) => {

  const getAct = async (actId) => {
    try {
      const act = serializeNonPOJOs(await locals.pb.collection('acts').getOne(actId))
      return act
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  return {
    act: getAct(params.actId)
  }
}