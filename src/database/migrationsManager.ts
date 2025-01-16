import { database } from './db';
import { createUsersTableSQL } from './migrations/001_create_users_table';

const getMigrationQueries = [
  createUsersTableSQL
];
  

// Kiểm tra và chạy migrations chưa được thực thi
export const runMigrations = async () => {
    // Tạo bảng migration nếu chưa có
    await database?.executeSql(`
        CREATE TABLE IF NOT EXISTS migrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
        )
    `);

    if(!database) {
        console.error('database null!');
        return;
    }

    // Lấy danh sách các migration đã được thực thi
    const [results] = await database.executeSql('SELECT name FROM migrations');
    const executedMigrations = results.rows.raw().map((row: any) => row.name);
    // Lấy danh sách các file migration
    
    try {
        await database?.transaction((tx) => {
          // Chạy các migration chưa được thực thi
          for (const migrationQuery of getMigrationQueries) {
              if (!executedMigrations.includes(migrationQuery)) {
                  try {
                    tx.executeSql(migrationQuery);
                    tx.executeSql(`INSERT INTO migrations (name) VALUES (?)`, [migrationQuery]); // Đánh dấu migration đã chạy
                    console.log(`Migration ${migrationQuery} executed successfully.`); 
                  } catch(errr) {
                    console.log(errr);
                  }
              }
          }
        });
    } catch (error) {
        console.error(`Error executing migration`, error);
    }

    console.log('All migrations executed successfully!');
};