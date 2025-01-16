import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "app.db";
const database_version = "1.0";
const database_displayname = "SQLite App Database";
const database_size = 200000;

export let database: SQLite.SQLiteDatabase | null = null;

export const getDBConnection = async () => {
  return SQLite.openDatabase({
    name: database_name,
    location: 'default'
  });
};

export const closeDatabase = async (db: SQLite.SQLiteDatabase | null = database) => {
  if(db) {
      await db.close();
      console.log("Database closed");
  } else {
      console.log('No database to close');
  }
};

export const initDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if(!database) {
    database = await getDBConnection();
    console.log('Database initialized');
  }
  return database;
};

export const executeQuery = async (query: string, params: any[] = []) => {
  try {
    const result = await database?.executeSql(query, params);
    return result;
  } catch(error) {
    console.error("Error executing query: ", error);
    throw error;
  }
};