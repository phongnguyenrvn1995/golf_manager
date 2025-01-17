import { ResultSet } from "react-native-sqlite-storage";
import { database } from "../db";

export interface User {
    id?: number;
    name: string;
    email: string;
};

export const userModel = {
    tableName: "users",
    createTableSQL: 
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        );`,
    insertSQL: 'INSERT INTO users (id, name, email) VALUES (?, ?, ?)',
    selectAllSQL: 'SELECT * FROM users',
    updateSQL: 'UPDATE users SET name = ?, email = ? WHERE id = ?',
    deleteSQL: 'DELETE FROM users WHERE id = ?'
};

export const addUser = async(user: User) => {
    database?.executeSql(userModel.insertSQL, [null, user.name, user.email]);
};

export const getUsers = async () => {
    const _results = await database?.executeSql(userModel.selectAllSQL);
    if(!_results) {
        return [];
    }

    const [results] = _results;
    const users: User[] = results.rows.raw().map(row => ({
        id: row.id,
        name: row.name,
        email: row.email
    }));
    return users;
};

export const updateUser = async (user: User) => {
    try {
        const _result = await database?.executeSql(userModel.updateSQL, [user.name, user.email, user.id]);
        if(!_result) {
            return false;
        }
        const [result] = _result;
        if(result.rowsAffected > 0) {
            console.log(`update user ${user.id} successfully`);
            return true;
        }
        console.error(`update user ${user.id} failed`);
    } catch(error) {
        console.error(`update user error ${error}`);
    }
    return false;
};

export const deleteUser = async (id: number) => {
    try {
        const _result = await database?.executeSql(userModel.deleteSQL, [id]);
        if(!_result) {
            console.log(`delete user ${id} failed`);
            return false;
        }
        const [result] = _result;
        if(result.rowsAffected > 0) {
            console.log(`delete user ${id} successfully`);
            return true;
        }
        console.log(`delete user ${id} failed`);
    } catch (error) {
        console.log(`delete user error ${error}`);
    }
    return false;
}