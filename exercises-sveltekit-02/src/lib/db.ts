import Database from 'better-sqlite3';

const sqlite = new Database('./db.sqlite');

sqlite.exec(`DROP TABLE IF EXISTS users`);
sqlite.exec(`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)`);
sqlite.exec(`INSERT INTO users (name, age) VALUES ('Alice', 42)`);
sqlite.exec(`INSERT INTO users (name, age) VALUES ('Bob', 43)`);

interface User {
	id: number;
	name: string;
	age: number;
}

export function getUsers() {
	return sqlite.prepare(`SELECT * FROM users`).all() as User[];
}

export function getUser(id: number | bigint | string) {
	const idParsed = parseInt(id as string, 10);
	return sqlite.prepare(`SELECT * FROM users WHERE id = ?`).get(idParsed) as User | undefined;
}

export function createUser(name: string | File, age: number | string | File) {
	if (typeof name === 'object') throw new Error('name must be a string');
	if (typeof age === 'object') throw new Error('age must be a number');

	const ageParsed = parseInt(age as string, 10);
	const { lastInsertRowid } = sqlite
		.prepare(`INSERT INTO users (name, age) VALUES (?, ?)`)
		.run(name, ageParsed);
	return getUser(lastInsertRowid) as User;
}
