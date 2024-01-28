import { getUser } from '$lib/db';

export async function load({ params }) {
	return {
		user: getUser(params.id)
	};
}
