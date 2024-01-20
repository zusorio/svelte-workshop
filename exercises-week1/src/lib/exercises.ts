export const exercises: Exercise[] = [
    {
        number: '1',
        name: 'Dein erster Component',
        description: 'Zeige eine Variable in einem Component an.',
        difficulty: 1,
        exercise: '/exercise-1',
        solution: '/exercise-1/solution'
    },
    {
        number: '2',
        name: 'Dynamische Variable',
        description: 'Ändere den Wert eine Variable dynamisch.',
        difficulty: 1,
        exercise: '/exercise-2',
        solution: '/exercise-2/solution'
    },
    {
        number: '3',
        name: 'Component erstellen',
        description: 'Erstelle eine Button Component.',
        difficulty: 1,
        exercise: '/exercise-button',
        solution: '/exercise-button/solution'
    },
    {
        number: '4',
        name: 'Erweiterter Button',
        description: 'Erstelle eine Button Component.',
        difficulty: 3,
        exercise: '/exercise-button-2',
        solution: '/exercise-button-2/solution'
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
