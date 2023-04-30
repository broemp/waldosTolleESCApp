import { isAdmin } from '../hooks.server.js'

export const load = ({ locals }) => {
    if (locals.user) {
        return {
            user: locals.user,
            isAdmin: isAdmin(locals)
        }
    }
    return {
        user: undefined
    }
}