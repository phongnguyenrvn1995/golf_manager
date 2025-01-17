import { isDatabaseUptodate } from '../utils/appUtils';
import { database, database_displayname, database_version } from './db';
import { alterUsersTableSQL } from './migrations/001_create_users_table';
import { userModel } from './models/User';

const getCreationQueries = [
  userModel.createTableSQL
];

const getMigrationQueries = [
  alterUsersTableSQL
];
  
// Kiểm tra và chạy migrations chưa được thực thi
export const runMigrations = async () => {
    // Tạo bảng migration nếu chưa có
    await database?.executeSql(`
        CREATE TABLE IF NOT EXISTS migrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        version TEXT NOT NULL
        )
    `);

    if(!database) {
        console.error('database null!');
        return;
    }

    if(await isDatabaseUptodate()) {
      return;
    }
    
    try {
        await database?.transaction((tx) => {
          // Chạy các migration chưa được thực thi
          for (const query of getCreationQueries) {
            try {
              tx.executeSql(query);
              console.log(`Creation ${query} executed successfully.`); 
            } catch(errr) {
              console.error(errr);
            }
          } 
          tx.executeSql(`INSERT OR REPLACE INTO migrations (id, name, version) VALUES (?, ?, ?)`, [1, database_displayname, database_version]); // Đánh dấu migration đã chạy
          console.log('All creation executed successfully!');
        });

        for(const query of getMigrationQueries) {
          try {
            database.executeSql(query);
            console.log(`Migration ${query} executed successfully.`); 
          } catch(error) {
            console.error(`Migration ${query} executed failed. ${error}`); 
          }
        }
        console.log('All Migration executed successfully!');
    } catch (error) {
        console.error(`Error executing migration`, error);
    }
};