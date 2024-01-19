export const exerciseGroups: ExerciseGroup[] = [
	{
		name: 'Einführung',
		exercises: [
			{
				number: '1',
				name: 'Hello World!',
				description: 'Zeige eine Variable in einem Component an.',
				difficulty: 1,
				exercise: '/exercise-01-hello-world',
				solution: '/exercise-01-hello-world/solution'
			},
			{
				number: '2',
				name: 'Dynamische Variable',
				description: 'Ändere den Wert eine Variable dynamisch.',
				difficulty: 1,
				exercise: '/exercise-02-binding',
				solution: '/exercise-02-binding/solution'
			}
		]
	},
	{
		name: 'Cookie Clicker',
		exercises: [
			{
				number: '3a',
				name: 'Cookie Clicker: Teil 1',
				description: 'Erstelle einen Klon von Cookie Clicker.',
				difficulty: 1,
				exercise: '/exercise-03a-cookie-clicker',
				solution: '/exercise-03a-cookie-clicker/solution'
			},
			{
				number: '3b',
				name: 'Cookie Clicker: Teil 2',
				description: 'Erstelle einen Klon von Cookie Clicker.',
				difficulty: 2,
				exercise: '/exercise-03b-cookie-clicker',
				solution: '/exercise-03b-cookie-clicker/solution'
			},
			{
				number: '3c',
				name: 'Cookie Clicker: Teil 3',
				description: 'Erstelle einen Klon von Cookie Clicker.',
				difficulty: 2,
				exercise: '/exercise-03c-cookie-clicker',
				solution: '/exercise-03c-cookie-clicker/solution'
			}
		]
	},
	{
		name: 'Komponenten',
		exercises: [
			{
				number: '4',
				name: 'Component erstellen',
				description: 'Erstelle eine Button Component.',
				difficulty: 1,
				exercise: '/exercise-button',
				solution: '/exercise-button/solution'
			}
		]
	}
];

export const exercises: Exercise[] = exerciseGroups
	.map((group) => group.exercises)
	.reduce((prev, curr) => prev.concat(curr), []);

export interface Exercise {
	number: string;
	name: string;
	description: string;
	exercise: string;
	solution: string;
	difficulty: number;
}

export interface ExerciseGroup {
	name: string;
	exercises: Exercise[];
}
