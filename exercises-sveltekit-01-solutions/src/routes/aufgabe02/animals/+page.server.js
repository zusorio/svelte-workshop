import { animals } from '$lib/animals.js';

export function load() {
    return {
        summaries: animals.map((animal) => ({
            id: animal.id,
            name: animal.name,
        }))
    }
}