import { createUser, getUsers } from '$lib/db';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		if (!name) {
			return fail(400, { error: 'Missing name' });
		}
		const age = data.get('age');
		if (!age) {
			return fail(400, { error: 'Missing age' });
		}

		const user = createUser(name, age);

		return { success: true };
	}
};

export function load({}) {
	return {
		users: getUsers()
	};
}
