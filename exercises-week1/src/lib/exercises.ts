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
				name: 'Binding',
				description: 'Ändere den Wert eine Variable dynamisch.',
				difficulty: 1,
				exercise: '/exercise-02-binding',
				solution: '/exercise-02-binding/solution'
			},
			{
				number: '3',
				name: 'Loops',
				description: 'Zeige mehrere Elemente mit Hilfe von Loops an.',
				difficulty: 1,
				exercise: '/exercise-03-loops',
				solution: '/exercise-03-loops/solution'
			}
		]
	},
	{
		name: 'Cookie Clicker',
		exercises: [
			{
				number: '4a',
				name: 'Cookie Clicker: Teil 1',
				description: 'Erstelle einen Klon von Cookie Clicker.',
				difficulty: 1,
				exercise: '/exercise-04a-cookie-clicker',
				solution: '/exercise-04a-cookie-clicker/solution'
			},
			{
				number: '4b',
				name: 'Cookie Clicker: Teil 2',
				description: 'Erstelle einen Klon von Cookie Clicker.',
				difficulty: 2,
				exercise: '/exercise-04b-cookie-clicker',
				solution: '/exercise-04b-cookie-clicker/solution'
			},
			{
				number: '4c',
				name: 'Cookie Clicker: Teil 3',
				description: 'Erstelle einen Klon von Cookie Clicker.',
				difficulty: 2,
				exercise: '/exercise-04c-cookie-clicker',
				solution: '/exercise-04c-cookie-clicker/solution'
			}
		]
	},
	{
		name: 'Component Basics',
		exercises: [
			{
				number: '5a',
				name: 'Component Basics',
				description: 'Erstelle eine Button Component.',
				difficulty: 1,
				exercise: '/exercise-05a-component-basics',
				solution: '/exercise-05a-component-basics/solution'
			},
			{
				number: '5b',
				name: 'Component Basics',
				description: 'Erstelle eine Button Component.',
				difficulty: 1,
				exercise: '/exercise-05b-component-basics',
				solution: '/exercise-05b-component-basics/solution'
			},
			{
				number: '5c',
				name: 'Component Basics',
				description: 'Erstelle eine Button Component.',
				difficulty: 1,
				exercise: '/exercise-05c-component-basics',
				solution: '/exercise-05c-component-basics/solution'
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
