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

  const getRatings = async (actId) => {
    try {
      const ratings = serializeNonPOJOs(await locals.pb.collection('ratings').getFullList({
        filter: 'act="' + actId + '"',
        expand: 'user',
      }))
      return ratings
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  const ratings = getRatings(params.actId)

  const rating_act = ratings.then(ratings => {
    if (ratings.length == 0) {
      return 0
    }

    let rating_act = 0;
    ratings.forEach(rating => {
      rating_act = rating.rating_act + rating_act;
    })
    return (rating_act / ratings.length).toFixed(2)
  })

  const rating_drink = ratings.then(ratings => {
    if (ratings.length == 0) {
      return 0
    }

    let rating_drink = 0;
    ratings.forEach(rating => {
      rating_drink += rating.rating_drink;
    })
    return (rating_drink / ratings.length).toFixed(2)
  })

  return {
    act: getAct(params.actId),
    rating_act: rating_act,
    rating_drink: rating_drink,
    ratings: ratings,
  }
}