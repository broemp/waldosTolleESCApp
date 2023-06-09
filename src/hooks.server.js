import PocketBase, { Admin } from 'pocketbase'
import { serializeNonPOJOs } from './lib/utils'
import { env } from '$env/dynamic/public'

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase(env.PUBLIC_POCKETBASE_URL)
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
    } else {
        event.locals.user = undefined
    }

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response
}

export function isAdmin(locals) {
    return locals.pb.authStore.isValid && locals.pb.authStore.model instanceof Admin
}