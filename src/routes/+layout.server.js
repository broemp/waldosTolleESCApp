import { isAdmin } from '../hooks.server.js'
import { error } from '@sveltejs/kit'
import { serializeNonPOJOs } from '$lib/utils.js'

export const load = ({ locals }) => {
    if (locals.user) {

        const getAnimeMode = async () => {
            try {
                const anime = serializeNonPOJOs(await locals.pb.collection('users').getFirstListItem('id ="' + locals.user.id + '"',))
                // console.log(anime["anime_mode"])
                return [anime["anime_mode"], anime["nsfw_mode"]]
            } catch (err) {
                console.log(err)
                throw error(err.status, err.message)
            }
        }

        return {
            user: locals.user,
            isAdmin: isAdmin(locals),
            animeMode: getAnimeMode(),
        }
    }



    return {
        user: undefined,
    }
}