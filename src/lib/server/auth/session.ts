import type { RequestEvent } from '@sveltejs/kit';
import { getAuth } from './index';

/** Reads the Better Auth cookie-backed session on the server only. */
export async function getServerSession(event: Pick<RequestEvent, 'request'>) {
  return getAuth().api.getSession({ headers: event.request.headers });
}
