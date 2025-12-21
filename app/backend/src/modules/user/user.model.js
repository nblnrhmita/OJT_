import { db } from '../../lib/db';

export async function getAllUser() {
    const [rows] = await db.query('SELECT role, username, email FROM users');
    return rows;
}