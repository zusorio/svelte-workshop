import { error } from '@sveltejs/kit';
import { animals } from '$lib/animals.js';

export function load( { params } ) {
    const animal = animals.find((animal) => animal.id === parseInt(params.id));

    if (!animal) throw error(404, `Animal with id ${params.id} not found`);

    return {
        animal
    };
}