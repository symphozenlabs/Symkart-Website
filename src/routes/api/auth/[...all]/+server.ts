import type { RequestHandler } from './$types';
import { getAuth } from '$lib/server/auth';

const handler: RequestHandler = ({ request }) => getAuth().handler(request);

export const GET = handler;
export const POST = handler;
