import { getDBConnection } from "./db";

export const seedDatabase = async () => {
    const db = await getDBConnection();
    await db.executeSql(`INSERT INTO users (name, email) 
        VALUES ('PHONG', 'phong@gmail.com'),
        ('PRO', 'pro@gmail.com')`);
    console.log('Database seeded');
    await db.close();
};