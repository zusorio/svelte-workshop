import { getUser } from '$lib/db.js';

export async function load({ params }) {
	const id = parseInt(params.id, 10);
	return {
		user: getUser(id)
	};
}
