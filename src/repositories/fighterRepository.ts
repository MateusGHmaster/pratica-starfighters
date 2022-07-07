import connection from '../database';

export async function find () {
    const result = await connection.query(`
        SELECT * FROM fighters
        ORDER BY wins DESC
    `);
    return result.rows;
}

export async function findUserName (username: string) {
    const result = await connection.query(`
        SELECT * FROM fighters
        WHERE username=$1
    `, [username]);
    return result.rows[0]; 
}

export async function insertUser (username: string) {
    const result = await connection.query(`
        INSERT INTO fighters (username, wins, losses, draws)
        VALUES ($1, 0, 0, 0)
        RETURNING id
    `);
}