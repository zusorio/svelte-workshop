export const exercises: Exercise[] = [
	{
		number: '1',
		name: 'Dein erster Component',
		description: 'Zeige eine Variable in einem Component an.',
		difficulty: 1,
		exercise: '/exercise-1',
		solution: '/exercise-1/solution'
	}
];

export interface Exercise {
	number: string;
	name: string;
	description: string;
	exercise: string;
	solution: string;
	difficulty: number;
}
