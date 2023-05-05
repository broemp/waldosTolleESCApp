import { serializeNonPOJOs } from '$lib/utils.js'
import { error } from '@sveltejs/kit'

export async function load({ locals }) {

  const getActs = async () => {
    try {
      var fullList = serializeNonPOJOs(await locals.pb.collection('acts').getFullList({
        sort: 'act_number',
        expand: 'ratings(act)'
      }));

      fullList.forEach(act => {
        var ratingList = act.expand['ratings(act)']
        if (ratingList) {
          for (var rating of ratingList) {
            if (rating.user == locals.user.id) {
              act.rating_drink = rating.rating_drink;
              act.rating_act = rating.rating_act;
            }
          }
        }
      })
      return fullList
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  return {
    acts: getActs(),
  }
}