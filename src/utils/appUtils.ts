import { database, database_version } from "../database/db";

export const isDatabaseUptodate = async () => {
    if(!database) {
        return false;
    }
    try {
        // Lấy danh sách các migration đã được thực thi
        const [results] = await database.executeSql('SELECT * FROM migrations');
        const executedMigrations = results.rows.raw().map((row) => ({name: row.name, version: row.version}));
        // Lấy danh sách các file migration
        if(executedMigrations.length > 0) {
            if(executedMigrations[0].version == database_version) {
                console.log('Database version is up to date!!!'); 
                return true;
            }
        }

        console.log('Database version is not up to date!!!'); 
    } catch(error) {
        console.log('migrations table seems not exist')
    }
    return false;
}