import { serializeNonPOJOs } from '$lib/utils.js'
import { error } from '@sveltejs/kit'

export const load = ({ locals, params }) => {

  const getRating = async (ratingId) => {
    try {
      const rating = serializeNonPOJOs(await locals.pb.collection('ratings').getOne(ratingId, {
        expand: 'user,act',
      }))
      return rating
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  return {
    rating: getRating(params.ratingId)
  }
}