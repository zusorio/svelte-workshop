import Database from 'better-sqlite3';

const sqlite = new Database('./db.sqlite');

sqlite.exec(`DROP TABLE IF EXISTS users`);
sqlite.exec(`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)`);
sqlite.exec(`INSERT INTO users (name, age) VALUES ('Alice', 42)`);
sqlite.exec(`INSERT INTO users (name, age) VALUES ('Bob', 43)`);

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {number} age
 */

/**
 * @returns {User[]}
 */
export function getUsers() {
	return sqlite.prepare(`SELECT * FROM users`).all();
}

/**
 * @param {number} id
 * @returns {User}
 */
export function getUser(id) {
	return sqlite.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
}

/**
 * @param {string} name
 * @param {number} age
 * @returns {User}
 */
export function createUser(name, age) {
	const { lastInsertRowid } = sqlite
		.prepare(`INSERT INTO users (name, age) VALUES (?, ?)`)
		.run(name, age);
	return getUser(lastInsertRowid);
}
