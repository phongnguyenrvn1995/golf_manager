import { use } from "i18next";
import { database, getDBConnection } from "./db";
import { User, userModel } from "./models/User";

export const seedUsers = async () => {
    const users: User[] = [
        {id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ];
    
    try {
        await database?.transaction((tx) => {
            for(const user of users) {
                tx.executeSql(userModel.insertSQL, [user.id, user.name, user.email]);
            }
        });
        console.log('Database seeded successfully.');
    } catch (error) {
        console.log('Error seeding database:', error);
    }
};