import { serializeNonPOJOs } from '$lib/utils.js'
import { error } from '@sveltejs/kit'

export async function load({ locals }) {
  const getActs = async () => {
    try {
      const data = serializeNonPOJOs(await locals.pb.collection('acts').getFullList({
        sort: 'act_number',
      }));
      return data
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
  }

  return {
    acts: getActs()
  }
}

//TODO Add function to show who was already voted on