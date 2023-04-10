import { redirect } from '@sveltejs/kit'
import { Admin } from 'pocketbase'

export const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login')
  } else if (!(locals.pb.authStore.model instanceof Admin)) {
    throw redirect(303, '/')
  }
}
