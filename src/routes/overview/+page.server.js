import { serializeNonPOJOs } from '$lib/utils.js'
import { error } from '@sveltejs/kit'

export async function load({ locals }) {

  const getActs = async () => {
    try {
      var fullList = serializeNonPOJOs(await locals.pb.collection('acts').getFullList({
        sort: 'act_number',
        expand: 'ratings(act)'
      }));

      // console.log(fullList[1].expand['ratings(act)'][0])

      fullList.forEach(act => {
        var ratingList = act.expand['ratings(act)']
        if (ratingList) {
          console.log(ratingList)
          for (var rating of ratingList) {
            // console.log("Rating: " + rating)
            // console.log("User: " + rating.user)
            // console.log("User 2: " + locals.user.id)
            if (rating.user == locals.user.id) {
              act.rating_drink = rating.rating_drink;
              act.rating_act = rating.rating_act;
            }
          }
        }
      })
      // console.log(fullList)
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

//TODO Add function to show who was already voted on