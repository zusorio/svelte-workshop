export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		// verwende `data.get()` um die Werte aus dem Formular zu lesen
		// stelle sicher, dass die Werte existieren
		// erstelle einen neuen Benutzer mit `createUser()`

		return { success: true };
	}
};

export function load({}) {
	// verwende `getUsers()` um die Benutzerdaten zu laden
	return {
		users: 'missing'
	};
}
